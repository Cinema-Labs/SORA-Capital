"use client"

import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as chartjs, LinearScale, registerables } from 'chart.js/auto';

chartjs.register(...registerables);

export default function PortfolioPerformance() {
    const Value = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                data: [360, 352, 364, 346, 349, 350, 368, 370, 342, 325, 350, 372],
                fill: true,
                backgroundColor: 'rgba(0,35,77,0.7)',
                borderColor: 'rgba(87,139,250,1)',
                borderWidth: 2,
                clip: false,
                pointRadius: 0,
            },
        ],
    };
    const PortfolioPerformanceOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 320,
                ticks: {
                    color: 'rgba(28,28,28,1)',
                    display:false,
                    callback: function(value) {
                        return value;
                    }
                    
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    color: 'rgba(217,235,255)',
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div>
            <div className="text-2xl ml-20 text-[#D9EBFF] font-bold">Portfolio Performance</div>
            <div className='flex flex-center w-[78vw] h-[40vh] mt-4 rounded-xl mx-auto bg-[#0A0B0D] justify-center items-center border border-[1px] border-[#3B3D41]'>
                <div className='h-[40vh] mx-auto'>
                <Line  
                    data={Value}
                    options={PortfolioPerformanceOptions}
                    className='ml-3' 
                />
                </div>
            </div>
        </div>
    )
}