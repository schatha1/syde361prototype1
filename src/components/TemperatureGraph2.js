import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const TemperatureGraph2 = () => {
  return (
    <div><br></br>
      <Bar
        data={{
          labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
          datasets: [
            {
              label: 'Average Temperature Per Hour (°Celsius)',
              data: [20,20,20,20,20,20,21,21,21,22,23,24,25,25,25,24,23,22,21,21,21,21,21],
              backgroundColor:
                'rgba(245, 54, 54)',
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: [
              {
                max: 30,
                min: 0,
                ticks: {
                    beginAtZero: true,
                  },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default TemperatureGraph2