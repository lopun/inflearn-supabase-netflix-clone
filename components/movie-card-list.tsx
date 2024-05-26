"use client";

import MovieCard from "./movie-card";

export default function MovieCardList() {
  return (
    <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
