// components/CharacterDetails.jsx

import React, { useEffect, useState } from "react";
import { fetchCharacterById } from "../api/narutoAPI";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>No data found.</p>;

  return (
    <div className="p-4 bg-bgBlack">
      <h1 className="text-3xl font-bold mb-4 text-orangeish">
        {character.name}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* Family */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orangeish">
              Family
            </h2>
            <ul className="list-disc list-inside text-orangeSecondary">
              {Object.entries(character.family).map(([relation, name]) => (
                <li key={relation}>
                  <strong>{relation}:</strong> {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Jutsu */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orangeish">
              Jutsu (Top 5)
            </h2>
            <ul className="list-disc list-inside text-orangeSecondary">
              {character.jutsu.slice(0, 5).map((jutsu, index) => (
                <li key={index}>{jutsu}</li>
              ))}
            </ul>
          </div>

          {/* Personal Info */}
          <div className="mb-6 text-orangeSecondary">
            <h2 className="text-2xl font-semibold mb-2 text-orangeish">
              Personal Info
            </h2>
            <p>
              <strong>Birthdate:</strong> {character.personal.birthdate}
            </p>
            <p>
              <strong>Sex:</strong> {character.personal.sex}
            </p>
            <p>
              <strong>Blood Type:</strong> {character.personal.bloodType}
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {character.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Character ${index}`}
              className="h-48 rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
