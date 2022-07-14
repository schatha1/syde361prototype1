import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

<<<<<<<< HEAD:src/components/LightGraph3.js
const LightGraph3 = () => {
========
const LightGraph1 = () => {
>>>>>>>> b0b65d252c3bdd4682efe3ccd50e68ff5b08c02e:src/components/LightGraph1.js
  return (
    <div><br></br>
      <Bar
        data={{
          labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
          datasets: [
            {
              label: 'Average Relative Light Per Hour',
              data: [1,0,0,0,0,0,2,3,4,5,6,7,8,9,9,9,8,7,6,3,2,1],
              backgroundColor:
                'rgba(245, 235, 54)',
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

<<<<<<<< HEAD:src/components/LightGraph3.js
export default LightGraph3
========
export default LightGraph1
>>>>>>>> b0b65d252c3bdd4682efe3ccd50e68ff5b08c02e:src/components/LightGraph1.js
