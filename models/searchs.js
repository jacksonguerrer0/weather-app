const Mapbox = require("../concepts/mapbox/api_call");
const Openweather = require("../concepts/open_weather/api_call")

class Searchs {
  _instanceMapbox = new Mapbox()
  _instanceOpenweather = new Openweather()
  historial = ['Bogota', 'Arauca', 'Arauquita']

  constructor() {
  }

  async searchCities(city = '') {
    const data = await this._instanceMapbox.getCities(city)

    return data
  }

  async searchWeather(lat, lon) {
    const data = await this._instanceOpenweather.getWeather(lat, lon)

    return data
  }
}



module.exports = Searchs;