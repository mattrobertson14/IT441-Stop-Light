let rpi = {}

let currentLight = 'off'

rpi.getCurrentLight = () => {
  return {light: currentLight}
}

rpi.redOn = () => {
  console.log('Turning Red On')
  
  changeLight('red')

   return {light: currentLight}
}

rpi.yellowOn = () => {
  console.log('Turning Yellow On')
  
  changeLight('yellow')

  return {light: currentLight}
}

rpi.greenOn = () => {
  console.log('Turning Green On')
  
  changeLight('green')

  return {light: currentLight}
}

rpi.lightsOut = () => {
  console.log('Turning Lights Off')
  
  changeLight('off')

  return {light: currentLight}
}

rpi.cycle = ()  => {
  console.log('Turning on light cycling')

  cycle()

  return {light: currentLight()}
}

const changeLight = (color) => {
  if (cyclingTimeout) clearTimeout(cyclingTimeout)
  if (color === 'red') currentLight = 'red'
  else if (color === 'yellow') currentLight = 'yellow'
  else if (color === 'green') currentLight = 'green'
  else currentLight = 'off'
}

const cycle = () => {
  changeLight('red')
  setTimeout(changeLight('yellow'), 5000)
  setTimeout(changeLight('green'), 7000)
  cyclingTimeout = setTimeout(cycle, 12000)
}

 module.exports = rpi 