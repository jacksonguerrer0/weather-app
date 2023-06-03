const questionMenu = [
  {
    type: 'list',
    name: 'TODO',
    default: 'Default value',
    message: "What do you want to do?",
    choices: [
      {name: '1. Create task', value: '1'},
      {name: '2. List task', value: '2'},
      {name: '3. List task complete', value: '3'},
      {name: '4. List task pending', value: '4'},
      {name: '5. Complete tasks', value: '5'},
      {name: '6. Delete task', value: '6'},
      {name: '0. Leave', value: '0'},
  ]
  }
]

const questionConfirm = [
  {
    type: 'input',
    name: 'pause',
    message: 'Press enter to continue'
  }
]

const questionAddTask = [
  {
    type: 'input',
    name: 'title',
    message: 'Add title for task: ',
    validate: function (input) {
      if (input.length === 0 ) {
        return 'Enter a value'
      }

      return true
    }
  }
]

const questionSelectTask = [
  {
    type: 'list',
    name: 'questionDelete',
    default: 'Default value',
    message: "Delete",
    choices: []
  }
]

const questionConfirmDeleteTask = [
  {
    type: 'confirm',
    name: 'confirmDelete',
    message: 'Are you sure to delete this task?'
  }
]

const questionCheckList = [
  {
    type: 'checkbox',
    name: 'selectTasks',
    message: 'Select the tasks to complete',
    choices: []
  }
]

module.exports = {
  questionMenu,
  questionConfirm,
  questionAddTask,
  questionSelectTask,
  questionConfirmDeleteTask,
  questionCheckList
}