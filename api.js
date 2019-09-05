var router = require("express-promise-router")()

let currentLight = 'off'

router.get('/status', async (req, res, next) => {
  res.json(`The light is currently ${currentLight}`)
})

router.post('/redon', async (req, res, next) => {
  console.log(`turn the red light on from ${currentLight}!`)

  res.json(`Turning red light on from ${currentLight}!`)

  currentLight = 'red'
})

router.post('/yellowon', async (req, res, next) => {
  console.log(`turn the yellow light on from ${currentLight}!`)

  res.json(`Turning yellow light on from ${currentLight}!`)

  currentLight = 'yellow'
})

router.post('/greenon', async (req, res, next) => {
  console.log(`turn the green light on from ${currentLight}!`)

  res.json(`Turning green light on from ${currentLight}!`)

  currentLight = 'green'
})

router.post('/off', async (req, res, next) => {
  console.log(`The ${currentLight}! is turned off`)

  res.json(`Turning ${currentLight} off!`)

  currentLight = 'off'
})

module.exports = router
