var router = require("express-promise-router")()
const rpi = require('./rpi')

router.get('/status', async (req, res, next) => {
  const result = rpi.getCurrentLight()

  res.json(result)
})

router.post('/redon', async (req, res, next) => {
  const result = rpi.redOn()

  res.json(result)
})

router.post('/yellowon', async (req, res, next) => {
  const result = rpi.yellowOn()

  res.json(result)
})

router.post('/greenon', async (req, res, next) => {
  const result = rpi.greenOn()

  res.json(result)
})

router.post('/off', async (req, res, next) => {
  const result = rpi.lightsOut()

  res.json(result)
})

module.exports = router
