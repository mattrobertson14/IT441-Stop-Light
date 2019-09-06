let Gpio = require('onoff').Gpio
let RED = new Gpio(4, 'out')
let YEL = new Gpio(3, 'out')
let GRN = new Gpio(2, 'out')

let rpi = {}

rpi.getCurrentLight = () => {
  return {light: currentLight()}
}

rpi.redOn = () => {
  console.log('Turning Red On')
  
  changeLight('red')

  return {light: currentLight()}
}

rpi.yellowOn = () => {
  console.log('Turning Yellow On')
  
  changeLight('yellow')

  return {light: currentLight()}
}

rpi.greenOn = () => {
  console.log('Turning Green On')
  
  changeLight('green')

  return {light: currentLight()}
}

rpi.lightsOut = () => {
  console.log('Turning Lights Off')

  changeLight()

  return {light: currentLight()}
}

const changeLight = (color) => {
  RED.writeSync(color === 'red'? 1 : 0)
  YEL.writeSync(color === 'yellow'? 1 : 0)
  GRN.writeSync(color === 'green'? 1 : 0)
}

const currentLight = () => {
  switch (true){
    case RED.readSync() === 1:
      return 'red'
    case YEL.readSync() === 1:
      return 'yellow'
    case GRN.readSync() === 1:
      return 'green'
    default:
      return 'off'
  }
}

module.exports = rpi