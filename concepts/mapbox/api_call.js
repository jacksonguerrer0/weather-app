const axios = require('axios')

class Mapbox {
  constructor() {

  }

  get _paramsMapbox () {
    return {
      'access_token': process.env.TOKEN_MAPBOX,
      'language': 'en',
      'limit': 5
    }
  }

  async getCities(city = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this._paramsMapbox
      })

      const res = await instance.get()
      const { data } = res

      return data
    } catch (error) {
      throw `Ups! a error: ${error}`
    }
  }
}

module.exports = Mapbox;
