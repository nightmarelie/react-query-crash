import React from "react";
import { useQuery } from "react-query";

import Character from "./Character";

export default function Characters() {
  const fetchCharacters = async () =>
    await fetch("https://rickandmortyapi.com/api/character").then((response) =>
      response.json()
    );

  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}
