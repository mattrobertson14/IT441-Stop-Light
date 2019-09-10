let rpi = {}

let currentLight = 'off'
let cyclingTimeout = null
let redTimeout = null
let yelTimeout = null

rpi.getCurrentLight = () => {
  return {light: currentLight}
}

rpi.redOn = () => {
  console.log('Turning Red On')
  
  stopCycle()
  changeLight('red')

   return {light: currentLight}
}

rpi.yellowOn = () => {
  console.log('Turning Yellow On')
  
  stopCycle()
  changeLight('yellow')

  return {light: currentLight}
}

rpi.greenOn = () => {
  console.log('Turning Green On')
  
  stopCycle()
  changeLight('green')

  return {light: currentLight}
}

rpi.lightsOut = () => {
  console.log('Turning Lights Off')
  
  stopCycle()
  changeLight('off')

  return {light: currentLight}
}

rpi.cycle = ()  => {
  console.log('Turning on light cycling')

  stopCycle()
  cycle()

  return {light: currentLight}
}

const changeLight = (color) => {
  if (color === 'red') currentLight = 'red'
  else if (color === 'yellow') currentLight = 'yellow'
  else if (color === 'green') currentLight = 'green'
  else currentLight = 'off'
}

const cycle = () => {
  changeLight('red')
  redTimeout = setTimeout(() => changeLight('green'), 5000)
  yelTimeout = setTimeout(() => changeLight('yellow'), 10000)
  cyclingTimeout = setTimeout(cycle, 12000)
}

const stopCycle = () => {
  if (cyclingTimeout) clearTimeout(cyclingTimeout)
  if (redTimeout) clearTimeout(redTimeout)
  if (yelTimeout) clearTimeout(yelTimeout)
}

 module.exports = rpi 