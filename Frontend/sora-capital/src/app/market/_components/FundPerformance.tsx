"use client"

import { Line } from 'react-chartjs-2';
import { Chart as chartjs, registerables } from 'chart.js/auto';

chartjs.register(...registerables);

export default function FundPerformance() {
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
                    callback: function(value: any) {
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
                    display:false,
                    
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div>
            <div className='flex flex-center w-[15vw] mt-4 rounded-xl mx-auto justify-center items-center'>
                <Line  
                    data={Value}
                    options={PortfolioPerformanceOptions}
                    className='' 
                />
            </div>
        </div>
    )
}