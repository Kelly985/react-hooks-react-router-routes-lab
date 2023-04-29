import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.name}>
            {actor.name}
            <ul>
              {actor.movies.map((movie) => (
                <li key={`${actor.name}-${movie}`}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
