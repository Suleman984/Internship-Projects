import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MD5 } from 'crypto-js'; // Import MD5 from crypto-js
// import md5 from 'crypto-js/md5'; // Import the MD5 function from crypto-js

const MarvelAPIExample: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const publicKey = 'fbae50a994a9c88e0db414c5488142de';
    const privateKey = 'bf8510677df0531b2544c2e3c1cf1396979ff23f';
    const ts = new Date().getTime().toString();
    const hash = MD5(ts + privateKey + publicKey).toString(); // Generate MD5 hash

    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data;
        console.log(response.data)
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data from Marvel API:', error);
      });
  }, []);

  return (
    <div className='grid'>
    <h1>Marvel Characters</h1>
    <div>
      {characters.map((character) => (
        <div className='character-card' key={character.id}>
          <h2>{character.name}</h2>
          <p>Description: {character.description.slice(0,100) || 'No description available.'}</p>
          <p>Comics Count: {character.comics.available}</p>
          <p>Series Count: {character.series.available}</p>
          {/* You can add more information as needed */}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default MarvelAPIExample;
