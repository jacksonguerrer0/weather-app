const Mapbox = require("../concepts/mapbox/api_call");

class Searchs {
  _instanceMapbox = new Mapbox()
  historial = ['Bogota', 'Arauca', 'Arauquita']

  constructor() {
  }

  async searchCities(city = '') {
    const data = await this._instanceMapbox.getCities(city)
    // HTTP request
    return data
  }
}


module.exports = Searchs;