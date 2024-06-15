import Image from "next/image"

export default function Header() {
    return (
        <div className="flex flex-row h-[12vh] w-full items-center bg-[#1B1B1B] border border-r-0 border-b-2 border-l-0 border-t-0 border-[#3B3D41]">
              <Image
              src="/soraIcon.png"
              alt="Sora Logo"
              className="ml-4 rounded-full"
              width={60}
              height={60}
              priority
            />
            <div className="text-xl ml-5 font-light text-[#969696]">
                Kowalski
            </div>
            <button className="bg-[#578BFA] text-[#1B1B1B] rounded-full py-2 px-12 ml-12 font-bold hover:bg-[#507FE5]">
                Deposit
            </button>
            <button className="bg-[#32353D] text-[#D9EBFF] rounded-full py-2 px-12 ml-2 font-bold hover:bg-[#3A3D45]">
                Buy/Sell
            </button>
            <div className="font-bold text-md ml-[40vw]">
                Market
            </div>
        </div>
    )
}