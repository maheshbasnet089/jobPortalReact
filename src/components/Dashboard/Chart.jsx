import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as Chartjs,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";



Chartjs.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);


const Chart = () => {

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
    };

    const data = {
        labels: 'hello',
        datasets: [
            {
                data: 10,
                label: "transaction",
                borderColor: "rgb(75, 192, 192)",
                fill: false,
                tension: 0.3,
                hoverBackgroundColor: "f7bfbe",
            },
        ],
    };



    return (
        <>
            <div
                className='pt-10 w-full'
            >

                <Line data={data} options={options}>
                    hello
                </Line>
            </div>
        </>
    );
};

export default Chart;
