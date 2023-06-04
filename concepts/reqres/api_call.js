const axios = require('axios')

class Reqres {
  static async getUsers() {
    try {
      const res = await axios.get('https://reqres.in/api/users?page=2')
      const { data } = res

      return data
    } catch (error) {
      throw `Ups! a error: ${error}`
    }
  }
}

module.exports = Reqres
