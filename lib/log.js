const chalk = require("chalk")
module.exports = type => data => {
  const color =
    type === "error" ? "red" : type === "success" ? "green" : "yellow"
  return console.log(chalk[color](`••• ${type.toUpperCase()} : ${data}`))
}
