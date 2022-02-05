import React from "react";

export default function Character({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
    </div>
  );
}
