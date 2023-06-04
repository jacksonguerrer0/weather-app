const { showMenu, pause } = require("./helpers/inquirer.js")

const main = async () => {
  let opt;

  do {
    opt = await showMenu()

    switch (opt) {
      case 0:
        console.log('salir')
        break;
      case 1:
        console.log('Search')
        break;
      case 2:
        console.log('History')
        break;
      default:
        break;
    }

    if ( opt !== '0' ) await pause()
  } while (opt !== '0');
}

main()