import FundPerformance from "./FundPerformance"

export default function MarketCard() {
    return (
        <button className="flex flex-col bg-[#0A0B0D] w-[16vw] h-[16vw] rounded-3xl hover:bg-[#0E0F11]">
            <div className="p-3 font-bold text-2xl text-[#D9EBFF]">
                Sora fund
            </div>
            <div className="w-full flex justify-center">
                <FundPerformance />
            </div>
            <div className="flex flex-row w-full justify-between p-3 items-center">
                <div className="font-bold text-lg text-[#D9EBFF]">
                    <p>$777.00</p>
                    <p className="text-sm">per quota</p> 
                </div>
                <div className="bg-[#1AA739] p-1 text-sm rounded-full text-[#D9EBFF] font-bold">
                    300.00%
                </div>

            </div>
        </button>
    )
}