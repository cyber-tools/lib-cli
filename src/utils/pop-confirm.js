const inquirer = require("inquirer");


module.exports = async (message = "是否同意", defaultOption = true) => {
  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    default: defaultOption,
    message: message
  });
  return confirm;
};