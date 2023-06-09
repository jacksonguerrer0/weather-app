const fs = require('fs')
const Mapbox = require("../concepts/mapbox/api_call");
const Openweather = require("../concepts/open_weather/api_call")

class Searchs {
  _instanceMapbox = new Mapbox()
  _instanceOpenweather = new Openweather()
  _history = []
  _pathSearchsDB = './db/searchs.json'

  constructor() {
    this._history = this.getDataPersisted()
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
    const { _history } = this

    const historyCapitalized = _history.map(city => {
      let cityCapitalized = city.split(' ')
      cityCapitalized = cityCapitalized.map(word => word[0].toUpperCase() + word.substring(1))

      return cityCapitalized.join(' ')
    })

    return historyCapitalized
  }

  persisHistoryInJSON() {
    const payload = {
      history: this._history
    }
    fs.writeFileSync(this._pathSearchsDB, JSON.stringify(payload))
  }

  getDataPersisted() {
    if (!fs.existsSync(this._pathSearchsDB)) {
      return []
    }

    const data = fs.readFileSync(this._pathSearchsDB, { encoding: 'utf-8' })
    const { history } = JSON.parse(data)

    return history
  }
}



module.exports = Searchs;