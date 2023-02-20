import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const ElectronicsChart = () => {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Laptop","Monitor","Keyboard","Mouse","Headphone","Docker"],
            datasets: [{
                label: "Electronics",
                data: [27,5,90,60,50,35],
                backgroundColor: ["#F5EAEA","#FFB84C","#F16767","#A459D1","#4D455D","#E96479"],
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
      <h1 className="text-[36px] text-center text-black">Electronics Chart</h1>
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default ElectronicsChart