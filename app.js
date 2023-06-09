require('colors')
const { showMenu, pause, inputCity, selectCity } = require("./helpers/inquirer.js");
const Searchs = require("./models/searchs.js");
const Reqres = require("./concepts/reqres/api_call.js");
const { findItemInArray } = require("./helpers/utils.js");

const main = async () => {
  const searchs = new Searchs()
  let opt;

  do {
    opt = await showMenu()

    switch (opt) {
      case 0:
        console.log('Bye :(')
        break;
      case 1:
        const input = await inputCity()
        const cities = await searchs.searchCities(input)
        const id = await selectCity(cities)
        if (id == 0 ) continue;
        const city = findItemInArray(['id', id], cities)
        const weather = await searchs.searchWeather(city.latitude, city.longitude)
        searchs.setHistory(city.name)

        console.log("\nInformation\n".green)
        console.log('City:', city.name.yellow)
        console.log('Lat:', city.latitude)
        console.log('lng:', city.longitude)
        console.log('Temperatura:', weather.temperature)
        console.log('Min:', weather.min)
        console.log('Max:', weather.max)
        console.log('How is the climate? ', weather.description.green)
        break;
      case 2:
        const history = searchs.getHistory()
        console.log(history)
        break;
      default:
        break;
    }

    if ( opt !== 0 ) await pause()
  } while (opt !== 0);
}

main()