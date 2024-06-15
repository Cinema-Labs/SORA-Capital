import NavBar from "./_components/NavBar"
import Header from "./_components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-center">
      <NavBar />
      <Header />
    </main>
  );
}
