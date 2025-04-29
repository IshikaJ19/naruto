// components/CharacterList.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // assuming you're using react-router
import  {fetchAllCharacters} from "../api/narutoAPI"

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllCharacters()
      .then(data => setCharacters(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // if (!characters.length === 0) return <p>No characters found.</p>;
  console.log(characters)

  return (
    <div className="p-4 bg-bgBlack">
      <h1 className="text-3xl font-bold mb-6 text-orangeish">All Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.characters && characters.characters.length > 0 && characters.characters.map(character => (
          <div
            key={character.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(`/characters/${character.id}`)}
          >
            {character.images && character.images.length > 0 && (
              <img
                src={character.images[0]}
                alt={character.name}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4 bg-blackish text-orangeish">
              <h2 className="text-lg font-semibold text-[#fff]">{character.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
