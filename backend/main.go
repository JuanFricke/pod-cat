package main

import (
  "database/sql"
  "encoding/json"
  "fmt"
  "log"
  "net/http"
  _ "github.com/lib/pq"
)

type Cat struct {
  Name string `json:"name"`
}

var db *sql.DB

func randomCatName(w http.ResponseWriter, r *http.Request) {
  var cat Cat
  err := db.QueryRow("SELECT name FROM cats ORDER BY RANDOM() LIMIT 1").Scan(&cat.Name)
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  json.NewEncoder(w).Encode(cat)
}

func main() {
  var err error
  connStr := "host=db user=postgres password=postgres dbname=catdb sslmode=disable"
  db, err = sql.Open("postgres", connStr)
  if err != nil {
    log.Fatal(err)
  }

  http.HandleFunc("/random-cat-name", randomCatName)
  fmt.Println("Server running on port 8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}
