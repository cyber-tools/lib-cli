const path = require("path");
const pathExists = require("path-exists");

module.exports = async () => {
  try {
    const ignoreFilePath = path.resolve(process.cwd(), ".gitignore");
    const hasIgnoreFile = await pathExists(ignoreFilePath);
    return hasIgnoreFile;
  } catch (error) {
    throw error;
  }
};