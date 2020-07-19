const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const ignoreFilePath = path.resolve(process.cwd(), ".gitignore");
    const stats = await promisify(fs.stat)(ignoreFilePath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
};