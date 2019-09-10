# IT441 Stop Light 🚦

This is a simple stoplight implementation using a Raspberry Pi and GPIO pins. The objective of this code is to server a web server, from which you can change which light (red, yellow, or green) is on at any given moment. There is also the ability to turn off the lights. The final action you can take from the frontend is that you can set the lights to _auto mode_. This will cause the lights to act similarly to a stoplight (i.e. red will turn on, after a few seconds green will turn on, after a few seconds yellow will turn on briefly warning the light will soon turn to red, and finally the light will turn red again). This cycle will continue until another light is turned on from the frontend or the lights are turned off by the frontend.

## Infrastructure 🔩

The implementation of this project is done entirely in JavaScript.

### Frontend 👋🏻

The frontend is built using [ReactJS](https://reactjs.org/). Furthermore, this app was built with the help of the `create-react-app` package from Facebook. Their documentation can be found [here](https://github.com/facebook/create-react-app). The following package was also used in this project to implement the frontend

* axios ([Documentation](https://github.com/axios/axios))

### Backend 💪🏻

The backend is built using [NodeJS](https://nodejs.org/en/). The API is built using the [ExpressJS Framework](https://expressjs.com/). The following packages also helped in creating the backend of this project

* express-promise-router ([Documentation](https://www.npmjs.com/package/express-promise-router))
* onoff ([Documentation](https://www.npmjs.com/package/onoff))
* path ([Documentation](https://www.npmjs.com/package/path))

---

**Disclaimer**
_This project was made for a class at Brigham Young University. This was a class assignment with certain parameters to be met. This is not a project that has a real life application in its current state. This code is also not meant for production and has not been fully optimized._
