const fs = require('fs')
const Mapbox = require("../concepts/mapbox/api_call");
const Openweather = require("../concepts/open_weather/api_call")

class Searchs {
  _instanceMapbox = new Mapbox()
  _instanceOpenweather = new Openweather()
  _history = []
  _pathSearchsDB = './db/searchs.json'

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

  setHistory( city = '' ) {
    const newHistory = this._history.filter(item => item.toLowerCase() !== city.toLowerCase())
    newHistory.unshift(city)
    this._history = newHistory.slice(0,5)
    this.persisHistoryInJSON()
  }

  getHistory() {
    return this._history
  }

  persisHistoryInJSON() {
    const payload = {
      history: this._history
    }
    console.log(payload, 'PAT')
    fs.writeFileSync(this._pathSearchsDB, JSON.stringify(payload))
  }
}



module.exports = Searchs;