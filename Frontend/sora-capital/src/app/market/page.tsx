import NavBar from "./_components/NavBar"
import Header from "../components/Header";
import MarketCard from "./_components/MarketCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-center">
      <NavBar />
      <div className="flex flex-col w-[100vw]">
      <Header />
      <div className="p-5">
      <div className="flex flex-row text-[#D9EBFF] text-2xl font-semibold mb-3">
        Buy Quotas from 
        <div className="text-[#578BFA] ml-1"> SORA</div>
        </div> 
        <div className="flex flex-row gap-8">
        <MarketCard /> 
        <MarketCard /> 
        <MarketCard /> 
        <MarketCard /> 
        </div>
      </div>
      <div className="p-5 mt-5">
      <div className="flex flex-row text-[#D9EBFF] text-2xl font-semibold mb-3">
        Trade with users 
        </div> 
        <div className="flex flex-row gap-8">
        <MarketCard /> 
        <MarketCard /> 
        <MarketCard /> 
        <MarketCard /> 
        </div>
      </div>
      </div>  
    </main>
  );
}
