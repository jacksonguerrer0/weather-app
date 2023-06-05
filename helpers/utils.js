const findItemInArray = ([ key, value ], array) => (
  array.find(item => item[key] === value)
)

module.exports = {
  findItemInArray
}