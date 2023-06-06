require('colors')
const inquirer = require('inquirer');
const {
  questionConfirm,
  questionMenu,
  questionInputCity,
  questionSelectCity
} = require('./definitions')

const showMenu = async () => {
  console.clear()
  console.log("\n|||||||||||||||||||||||||||||||||||||".green)
  console.log("           Weather App".green)
  console.log("|||||||||||||||||||||||||||||||||||||\n".green)

  const { menu } = await inquirer.prompt(questionMenu)

  return menu
}

const pause = async () => {
  const { pause } = await inquirer.prompt(questionConfirm)
  return pause
}

const inputCity = async () => {
  // todo: required input
  const { city } = await inquirer.prompt(questionInputCity)
  return city
}

const selectCity = async (cities = []) => {
  const choices = cities.map((city, i) => {
    const enumeration = `${i + 1}. `.green

    return {
      name: enumeration + `${city.name}`,
      value: city.id
    }
  })

  choices.unshift({
    name: '0. '.green + 'go back',
    value: 0
  })

  questionSelectCity[0].choices = choices
  const { questionSelect } = await inquirer.prompt(questionSelectCity)

  return questionSelect
}

module.exports = {
  showMenu,
  pause,
  inputCity,
  selectCity,
}