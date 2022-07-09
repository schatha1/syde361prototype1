import React from 'react'

import LightGraph from './components/LightGraph'
import TemperatureGraph from './components/TemperatureGraph'
import HumidityGraph from './components/HumidityGraph'
import Title from './components/Title'
import Header from './components/Header'
import Text from './components/Text'
import Likert from './components/Likert'
import Likert2 from './components/Likert2'
import Likert3 from './components/Likert3'
import './App.css'

const App = () => {
  return (
    <div>
      <Title />
      <Likert />
      <Likert2 />
      <Likert3 />
      <button>Submit</button>
      <Header />
      <Text />
      <div className = "Header">Room Weather Conditions:<p></p>
      </div><div className = "Text">In this room, the average light level for today is 87%. The average temperature is 24° Celsius, and the average humidity is 65%.<p></p>
      </div>
      <LightGraph />
      <TemperatureGraph />
      <HumidityGraph />
    </div>
  )
}

export default App