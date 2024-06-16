export default function Home() {
    return(
                // Container div for the entire home page content
                <div className="flex flex-row w-full h-[100vh] justify-evenly items-center bg-[url('./assets/sora-bg.png')] bg-cover">
                <div className="w-1/3">
                    <div className="flex flex-row">
                        <p className="text-8xl text-[#000000] font-bold">Grow </p>
                        <p className="text-8xl font-light ml-5">with</p>
                    </div>
                    {/* <div className="h-fit">  */}
                        <h1 className="text-[12rem] text-[#074996] font-bold text-center translate-y-[-70px] translate-x-[-2vw]">SORA</h1>
                    {/* </div> */}
                </div>
                <div className="w-1/3  text-justify">
                    <span className="font-semibold text-2xl ">Sora capital nurture consistent innovation and deliver for investors an outstanding performance with our unique portfolio.</span>
                </div>
            </div>
    )
}