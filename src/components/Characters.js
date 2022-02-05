import React, { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character").then(
      (response) => response.json()
    );

    console.log(data);

    setCharacters(data.results);
  };

  return (
    <div>
      {characters.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}
