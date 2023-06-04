require('colors')
const inquirer = require('inquirer');
const {
  questionConfirm,
  questionMenu,
  questionInputCity,
  questionSelectTask
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
  const { city } = await inquirer.prompt(questionInputCity)
  return city
}

const selectTask = async (listTasks = []) => {
  const choices = listTasks.map((task, i) => {
    const enumeration = `${i + 1}. `.green

    return {
      name: enumeration + `${task.title}`,
      value: task.id
    }
  })

  choices.unshift({
    name: '0. '.green + 'go back',
    value: 0
  })

  questionSelectTask[0].choices = choices
  const { questionDelete } = await inquirer.prompt(questionSelectTask)

  return questionDelete
}

module.exports = {
  showMenu,
  pause,
  inputCity,
  selectTask,
}