const questionMenu = [
  {
    type: 'list',
    name: 'menu',
    default: 'Default value',
    message: "What do you want to do?",
    choices: [
      {name: '1. Search City', value: 1},
      {name: '2. View history', value: 2},
      {name: '0. Leave', value: 0},
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

const questionSelectTask = [
  {
    type: 'list',
    name: 'questionDelete',
    default: 'Default value',
    message: "Delete",
    choices: []
  }
]


module.exports = {
  questionMenu,
  questionConfirm,
  questionSelectTask
}