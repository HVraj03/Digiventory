import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = () => {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ["Electronics","Cafeteria","Office Assets"],
            datasets: [{
                data: [27,50,90],
                backgroundColor: ["#FFB84C","#F16767","#A459D1"]
            }]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: false,
                    text: "Overall Data"
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    },[])
  return (
    <div className="w-full flex flex-col items-center py-20 md-col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <h1 className="text-[36px] text-center text-black">Category Chart</h1>
      <Doughnut data={chartData} options={chartOptions}/>
    </div>
  )
}
export default CategoryChart