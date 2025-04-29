export async function fetchCharacterById(id) {
  const response = await fetch(`http://localhost:8080/characters/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch character data");
  }
  return response.json();
}

// services/fetchAllCharacters.js

export async function fetchAllCharacters() {
  const response = await fetch("http://localhost:8080/characters");
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
}
