import Image from "next/image";
import { Home } from "lucide-react";
import { CandlestickChart } from "lucide-react";
export default function NavBar() {
    return (
        <div className="flex flex-col justify-left w-[18vw] bg-[#1B1B1B] p-2 px-5 border border-r-2 border-b-0 border-l-0 border-t-0 border-[#3B3D41]">
            <div className="items-left">
            <Image
              src="/soraIcon.png"
              alt="Sora Logo"
              className="mt-5 mb-5"
              width={100}
              height={100}
              priority
            />
            <a className="flex flex-row items-center py-4 w-[15vw] rounded-full mb-5 hover:bg-[#00234D]" href="/home">
                <Home color="#d9ebff" className="ml-5" strokeWidth={1.5} />
                <div className="text-[#d9ebff] font-bold ml-2 text-l">Home</div>
            </a>
            <a className="flex flex-row items-center py-4 w-[15vw] rounded-full mb-5 hover:bg-[#00234D]" href="/market">
                <CandlestickChart color="#d9ebff" className="ml-5"/>
                <div className="text-[#d9ebff] font-bold ml-2 text-l">Market</div>
            </a>
            <a className="flex flex-row items-center bg-[#00234D] py-4 w-[15vw] rounded-full mb-5 hover:bg-[#00234D]" href="/profile">
                <Home color="#578bfa" className="ml-5" strokeWidth={1.5} />
                <div className="text-[#578bfa] font-bold ml-2 text-l">Profile</div>
            </a>
        </div>

        </div>
    )
}