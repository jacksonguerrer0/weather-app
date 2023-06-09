const axios = require('axios')

class Weather {
  constructor() {

  }

  get _paramsOpenweather() {
    return {
      'appid': process.env.TOKEN_OPEWEATHER
    }
  }

  async getWeather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: {...this._paramsOpenweather, lat, lon}
      })
      const res = await instance.get()
      const { data } = res
      const { main, weather } = data

      if (!main, !weather) return {}

      return {
        description: weather[0].description,
        temperature: main.temp,
        max: main.temp_max,
        min: main.temp_min
      }
    } catch (error) {
      const { data } = error.response

      throw `Ups! a error - getWeather: ${data.message}`
    }
  }
}

module.exports = Weather;
