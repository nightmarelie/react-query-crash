import React, { useEffect, useState } from "react";

export default function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(setCharacters);
  }, []);

  const fetchCharacters = async (cf) => {
    const data = await fetch("https://rickandmortyapi.com/api/character").then(
      (response) => response.json()
    );

    cf(data);
  };
  return <div></div>;
}
