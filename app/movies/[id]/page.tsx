import UI from "./ui";

export default function MovieDetail({ params }) {
  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      <UI id={params.id} />
    </main>
  );
}
