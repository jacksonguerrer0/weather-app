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

        const city_selected = findItemInArray(['id', id], cities)
        console.log('selected,', city_selected)
        break;
      case 2:
        console.log('History')
        break;
      default:
        break;
    }

    if ( opt !== 0 ) await pause()
  } while (opt !== 0);
}

main()