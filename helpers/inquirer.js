require('colors')
const inquirer = require('inquirer');
const {
  questionConfirm,
  questionMenu,
  questionAddTask,
  questionSelectTask,
  questionConfirmDeleteTask,
  questionCheckList
} = require('./definitions')

const showMenu = async () => {
  console.clear()
  console.log("\n|||||||||||||||||||||||||||||||||||||".green)
  console.log("           Select a option".green)
  console.log("|||||||||||||||||||||||||||||||||||||\n".green)

  const { TODO } = await inquirer.prompt(questionMenu)

  return TODO
}

const pause = async () => {
  const { pause } = await inquirer.prompt(questionConfirm)
  return pause
}

const addTaskInput = async () => {
  const { title } = await inquirer.prompt(questionAddTask)

  return title
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

const confirmDeleteTask = async () => {
  const { confirmDelete } = await inquirer.prompt(questionConfirmDeleteTask)

  return confirmDelete
}

const checkList = async (listTasks = []) => {
  const choices = listTasks.map((task, i) => {
    const enumeration = `${i + 1}. `.green

    return {
      name: enumeration + `${task.title}`,
      value: task.id,
      checked: task.completed_at ? true : false
    }
  })

  questionCheckList[0].choices = choices
  const { selectTasks } = await inquirer.prompt(questionCheckList)

  return selectTasks
}


module.exports = {
  showMenu,
  pause,
  addTaskInput,
  selectTask,
  confirmDeleteTask,
  checkList
}