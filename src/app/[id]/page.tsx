export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen grid place-content-center">
      <h1>Detail Page {params.id}</h1>
    </main>
  );
}
