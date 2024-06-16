import { Landmark, User, Rocket} from "lucide-react";

export default function ForYou() {
    return (
        <div className="flex flex-col justify-center items-center py-5 w-[100vw]">
            <p className="font-bold text-6xl font-bold"><span className="text-[#074996]">Private Equity</span> made for you!</p>
            <div className="flex flex-row justify-evenly mt-5 items-center w-[100vw]">
            <div className="flex flex-col justify-center items-center w-1/3">
            <Landmark color="#000000" size={100}/>
            <p className="text-3xl">Funds and Accredited Investors</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
            <User color="#000000" size={100}/>
            <p className="text-3xl">Day-to-day investors</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
            <Rocket color="#000000" size={100}/>
            <p className="text-3xl">Startups</p>
            </div>
            </div>
        </div>
    )
}