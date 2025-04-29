import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/narutoAPI";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    async function loadCharacters() {
      const data = await fetchCharacters();
      setCharacters(data);
    }
    loadCharacters();
  }, []);

  return (
    <div className="min-h-screen bg-blackish text-orangeish p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Naruto Characters</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} onClick={setSelectedCharacter} />
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}

export default Home;
