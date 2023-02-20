import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CafeteriaChart = () => {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Pepsi","Sprite","Mazaa","Juice","Coffee Maker Machine","Maggie"],
            datasets: [{
                label: "",
                data: [27,5,90,60,50,35],
                backgroundColor: ["#4D455D","#E96479","#F5E9CF","#7DB9B6","#AD7BE9","#3E54AC"],
            }]
        })
        setChartOptions({
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false,
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    },[])
  return (
    <div className="w-full flex flex-col items-center py-20 md-col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <h1 className="text-[36px] text-center text-black">Cafeteria Chart</h1>
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default CafeteriaChart