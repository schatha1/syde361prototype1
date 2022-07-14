import React from 'react'
import LightGraph1 from './components/LightGraph1'
import TemperatureGraph1 from './components/TemperatureGraph1'
import HumidityGraph1 from './components/HumidityGraph1'
import LightGraph2 from './components/LightGraph2'
import TemperatureGraph2 from './components/TemperatureGraph2'
import HumidityGraph2 from './components/HumidityGraph2'
import LightGraph3 from './components/LightGraph3'
import TemperatureGraph3 from './components/TemperatureGraph3'
import HumidityGraph3 from './components/HumidityGraph3'
import Likert from './components/Likert'
import Likert2 from './components/Likert2'
import Likert3 from './components/Likert3'
import './App.css'

const App = () => {
  return (
    <div>
      <div className = "Title">E5-6008 Data<p></p> </div>
      <Likert />
      <Likert2 />
      <Likert3 />
      <button>Submit</button> <p></p>
      <div className = "Header">Ambient Weather Conditions:<p></p> </div>
      <div className = "Text">The date is Friday, July 8th, 2022. In Waterloo, it is currently sunny with temperature at 25° Celsius, and humidity at 60%.<p></p></div>
      <div className = "Header">Room Weather Conditions:<p></p> </div>
      <div className = "Text">In this room, the average light level for today is 80%. The average temperature is 24° Celsius, and the average humidity is 65%.<p></p></div>
      <LightGraph1 />
      <TemperatureGraph1 />
      <HumidityGraph1 />
      <p></p>
      <div className = "Title">E7-4043 Data<p></p> </div>
      <Likert />
      <Likert2 />
      <Likert3 />
      <button>Submit</button> <p></p>
      <div className = "Header">Ambient Weather Conditions:<p></p> </div>
      <div className = "Text">The date is Friday, July 8th, 2022. In Waterloo, it is currently sunny with temperature at 25° Celsius, and humidity at 60%.<p></p></div>
      <div className = "Header">Room Weather Conditions:<p></p> </div>
      <div className = "Text">In this room, the average light level for today is 90%. The average temperature is 22° Celsius, and the average humidity is 70%.<p></p></div>
      <LightGraph2 />
      <TemperatureGraph2 />
      <HumidityGraph2 />
      <p></p>
      <div className = "Title">E7 Common Area Data<p></p> </div>
      <Likert />
      <Likert2 />
      <Likert3 />
      <button>Submit</button> <p></p>
      <div className = "Header">Ambient Weather Conditions:<p></p> </div>
      <div className = "Text">The date is Friday, July 8th, 2022. In Waterloo, it is currently sunny with temperature at 25° Celsius, and humidity at 60%.<p></p></div>
      <div className = "Header">Room Weather Conditions:<p></p> </div>
      <div className = "Text">In this room, the average light level for today is 95%. The average temperature is 23° Celsius, and the average humidity is 65%.<p></p></div>
      <LightGraph3 />
      <TemperatureGraph3 />
      <HumidityGraph3 />
    </div>
  )
}

export default App