import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const HumidityGraph2 = () => {
  return (
    <div><br></br>
      <Bar
        data={{
          labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
          datasets: [
            {
              label: 'Average Humidity Per Hour (%)',
              data: [50,50,50,50,50,50,50,60,65,65,70,75,75,75,72,71,67,63,61,59,55,50,50],
              backgroundColor:
                'rgba(89, 150, 247)',
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
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

export default HumidityGraph2
