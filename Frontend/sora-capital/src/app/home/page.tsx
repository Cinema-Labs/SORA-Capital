import NavBar from "./_components/NavBar";
import Header from "../components/Header";
import Investments from "./_components/Investments";
import PortfolioPerformance from "./_components/PortfolioPerformance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <NavBar />
      <div className="flex flex-col w-[100vw]">
      <Header />
      <Investments />
      <PortfolioPerformance />
      </div>
    </main>
  );
}
