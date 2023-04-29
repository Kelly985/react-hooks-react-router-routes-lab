import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.time} minutes
          </li>
        ))}
      </ul>
      <ul>
        {movies.reduce(
          (allGenres, movie) => [...allGenres, ...movie.genres],
          []
        ).map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
