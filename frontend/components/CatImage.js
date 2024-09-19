"use client";

import { useState } from 'react';
import axios from 'axios';

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [catName, setCatName] = useState('');

  const fetchCatData = async () => {
    // Fetching random cat image from The Cat API
    const catApiResponse = await axios.get('https://api.thecatapi.com/v1/images/search');
    setCatImageUrl(catApiResponse.data[0].url);

    // Fetching random cat name from the backend
    const nameResponse = await axios.get('/api/cat-name'); // Via HTMX + Go
    setCatName(nameResponse.data.name);
  };

  return (
    <div>
      <button onClick={fetchCatData}>Gerar Gato</button>
      {catImageUrl && <img src={catImageUrl} alt="Cat" width="300px" />}
      {catName && <p>Nome do Gato: {catName}</p>}
    </div>
  );
};

export default CatImage;
