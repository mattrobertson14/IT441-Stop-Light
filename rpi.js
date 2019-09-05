let rpi = {}

let currentLight = 'off'

rpi.getCurrentLight = () => {
  return {light: currentLight}
}

rpi.redOn = () => {
  console.log('Turning Red On')
  currentLight = 'red'

  return {light: currentLight}
}

rpi.yellowOn = () => {
  console.log('Turning Yellow On')
  currentLight = 'yellow'

  return {light: currentLight}
}

rpi.greenOn = () => {
  console.log('Turning Green On')
  currentLight = 'green'

  return {light: currentLight}
}

rpi.lightsOut = () => {
  console.log('Turning Lights Off')
  currentLight = 'off'

  return {light: currentLight}
}

module.exports = rpi