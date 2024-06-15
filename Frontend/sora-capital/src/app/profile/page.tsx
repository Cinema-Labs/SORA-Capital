import NavBar from "./_components/NavBar"
import Header from "../components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <NavBar />
      <Header />
    </main>
  );
}
