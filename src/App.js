import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [light, setLight] = useState('off')

  const lights = ['red', 'yellow', 'green']

  useEffect(() => {
    getStatus()
    const inter = setInterval(getStatus, 500)

    return () => {
      clearInterval(inter)
    }
  }, [])

  const getStatus = () => {
    axios.get('/api/status').then(res => {
      setLight(res.data.light)
    }).catch(console.log)
  }

  const changeLight = (color) => {
    axios.post(`/api/${color}on`).then(res => {
      setLight(res.data.light)
    }).catch(console.log)
  }

  const turnOffLight = () => {
    axios.post('/api/off').then(res => {
      setLight(res.data.light)
    }).catch(console.log)
  }

  const startCycle = () => {
    axios.post('/api/cycle').then(res => {
      setLight(res.data.light)
    }).catch(console.log)
  }

  return (
    <div className="App">
      <h1>Stoplight</h1>
      <div className='stoplight'>
        {lights.map(l => (
          <div 
            key={l}
            className={`light ${l}${l === light? ' on':''}`} 
            onClick={() => changeLight(l)}
          ></div>
      ))}
      </div>
      <button onClick={() => turnOffLight()}>TURN OFF</button>
      <button onClick={() => startCycle()}>AUTO MODE</button>
    </div>
  );
}

export default App;
