const { showMenu, pause, inputCity } = require("./helpers/inquirer.js");
const Searchs = require("./models/searchs.js");
const Reqres = require("./concepts/reqres/api_call.js");
const Mapbox = require("./concepts/mapbox/api_call.js");

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
        const city = await inputCity()
        const data = await Mapbox.getCities(city)
        console.log('Search', city, data)
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