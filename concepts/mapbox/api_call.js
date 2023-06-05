const axios = require('axios')

class Mapbox {
  static async getCities(city = '') {
    try {
      const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=5&language=en&access_token=${process.env.TOKEN_MAPBOX}`
      const res = await axios.get(api)
      const { data } = res

      return data
    } catch (error) {
      throw `Ups! a error: ${error}`
    }
  }
}

module.exports = Mapbox;
