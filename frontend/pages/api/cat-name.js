import axios from 'axios';

export default async function handler(req, res) {
  // Chamada ao backend Go via HTMX
  const response = await axios.get('http://backend:8080/random-cat-name');
  res.status(200).json({ name: response.data.name });
}
