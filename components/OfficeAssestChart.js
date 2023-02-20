import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OfficeAssetsChart = () => {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Chairs","Diary","I-Card","TT-Balls","TT-Rackets","TT-Board"],
            datasets: [{
                label: "Office Assets",
                data: [30,50,65,60,50,20],
                backgroundColor: ["#BFDCE5","#EEEEEE","#FEFBE9","#E1EEDD","#F0A04B","#183A1D"],
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
      <h1 className="text-[36px] text-center text-black">Office Assets Chart</h1>
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default OfficeAssetsChart