import React, { useState } from "react";
import { useQuery } from "react-query";

import Character from "./Character";

export default function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) =>
    await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    ).then((response) => response.json());

  const { data, isPreviousData, isError, isLoading } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  const mzxPage = data?.info?.pages || 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const isPreviousDisabled = page === 1;
  const isNextDisabled = page === mzxPage;

  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <div className="characters">
        {data.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <div>
        <button
          disabled={isPreviousDisabled}
          onClick={() => setPage((page) => page - 1)}
        >
          Previous
        </button>
        <button
          disabled={isPreviousData && isNextDisabled}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
