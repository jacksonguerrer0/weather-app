console.log("==================ok =============")

const { showMenu } = require("./helpers/inquirer.js")

const main = async () => {
  const option = await showMenu()

  console.log("Option: ",option)
}

main()