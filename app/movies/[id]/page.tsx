import { getMovie } from "actions/movieActions";
import UI from "./ui";

export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovie(params.id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function MovieDetail({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
