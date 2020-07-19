const ora = require("ora");
const { dots } = require("cli-spinners");
const toast = ora(dots);

module.exports = toast;
