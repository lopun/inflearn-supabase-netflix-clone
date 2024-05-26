"use client";

export default function UI({ id }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
        className="w-1/3"
      />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">Dune: Part Two</h1>
        <p className="text-lg font-medium">
          Follow the mythic journey of Paul Atreides as he unites with Chani and
          the Fremen while on a path of revenge against the conspirators who
          destroyed his family. Facing a choice between the love of his life and
          the fate of the known universe, Paul endeavors to prevent a terrible
          future only he can foresee.
        </p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average : 8.3
        </div>
        <div className="font-bold text-lg">Popularity: 3437.313</div>
        <div className="font-bold text-lg">Release Date: 2024-02-27</div>
      </div>
    </div>
  );
}
