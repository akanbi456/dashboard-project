            

import React from 'react'
import Chart from 'react-apexcharts'


const Donutchart = ({ darkmode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkmode ? "#dddddd" : "#000000"
        }
      },
      dataLabels: {
        style: {
          colors: [darkmode ? "#dddddd" : "#000000"]
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    }
  }

  return (
    <div className='flex items-center justify-center p-5 py-6 bg-white rounded-lg dark:bg-gray-600'>
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={350}
      />
    </div>
  )
}

export default Donutchart
