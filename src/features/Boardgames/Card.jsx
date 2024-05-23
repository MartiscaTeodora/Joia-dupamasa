import React from 'react';
import { Link } from 'react-router-dom';

export function Card({ game }) {
  return (
    <Link to={`/boardgames/${game.id}`} className="no-underline">
      <article className="flex flex-col text-center rounded shadow-md">
        <img src={game.thumbnail} alt={`Poster of "${game.name}"`} className="rounded-t-sm min-w-full" />
        <h2 className="mt-auto mb-4">{game.name}</h2>
      </article>
    </Link>
  );
}