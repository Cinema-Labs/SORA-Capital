import Image from "next/image";
import { Home } from "lucide-react";

export default function NavBar() {
    return (
        <div className="flex flex-col justify-left w-[18vw] bg-[#1B1B1B] p-2 px-5">
            <div className="items-left">
            <Image
              src="/soraIcon.png"
              alt="Sora Logo"
              className="mt-5 mb-5"
              width={100}
              height={100}
              priority
            />
            <div className="flex flex-row items-center bg-[#00234D] py-4 w-[15vw] rounded-xl">
                <Home color="#578bfa" className="ml-5" strokeWidth={1.5} />
                <div className="text-[#578bfa] font-bold ml-2">Home</div>
            </div>
        </div>

        </div>
    )
}