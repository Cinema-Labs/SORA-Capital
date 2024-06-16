import { FaCheck, FaCog, FaEye } from 'react-icons/fa';

const Solution = () => {
    const data = [
        {
            title: 'Performance',
            description:
                'Sora Capital is committed to being as fundamentalist as it demands when analyzing companies to be part of the portfolio. This reaffirms Sora’s commitment to performance.',
        },
        {
            title: 'Transparency',
            description:
                'Sora Capital is on its way to create a transparent and seamless market in the landscape of Private Equity. To accomplish it, Sora is strongly compliant with industry standards and performance metrics.',
        },
        {
            title: 'Technology',
            description:
                'Sora Capital leverages blockchain in order to achieve its goal to be a universal Private Equity with built-in liquidity provided by position tokenization.',
        },
    ];

    return (
        <div className="relative h-[90vh] flex bg-gray-100">
            <img
                src="../../public/mountain.png"
                alt="mountain"
                className="w-[35vw] h-full object-cover"
            />
            <div className="left-[35vw] w-[65vw] h-full flex items-start px-8">
                <div>
                    <h1 className="text-7xl px-2 text-start">
                        What problem can we <span className="text-blue-800">solve together</span>
                    </h1>
                    <div className="flex absolute right-[5%] justify-evenly w-[70vw] h-[75%] py-8">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex-1 mx-4 p-8 border bg-white bg w-[25vw] text-justify"
                            >
                                <div>
                                    {/* <img
                                        src="https://via.placeholder.com/50" // Placeholder icon, replace with the actual icon URL
                                        alt="Icon"
                                        className="mb-4"
                                    /> */}
                                    {index === 0 && <FaCheck className="text-4xl text-blue-800" />}
                                    {index === 1 && <FaEye className="text-4xl text-blue-800" />}
                                    {index === 2 && <FaCog className="text-4xl text-blue-800" />}
                                </div>
                                <h2 className="text-3xl py-2 font-semibold">{item.title}</h2>
                                <p className="mt-2 text-lg">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;
