import FundPerformance from "./FundPerformance"

export default function MarketCard() {
    return (
        <button className="flex flex-col bg-[#0A0B0D] w-[16vw] h-[16vw] rounded-3xl p-3 hover:bg-[#0E0F11]">
            <div className="font-bold text-2xl text-[#D9EBFF]">
                Sora fund
            </div>
            <FundPerformance />
            <div className="flex flex-row items-center">
            <div className="font-bold text-3xl text-[#D9EBFF] mt-2">
                $ 777.00
            </div>
            <div className="bg-[#1AA739] p-1 text-sm ml-20 rounded-full text-[#D9EBFF] font-bold">
                300.00%
            </div>

            </div>
            <div className="font-light text-md text-[#D9EBFF]">
                per quota
            </div>

        </button>
    )
}