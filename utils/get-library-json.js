const path = require("path");
const { readFile } = require("jsonfile");

module.exports = async () => {
  try {
    const jsonFilePath = path.join(process.cwd(), "package.json");
    const jsonContent = await readFile(jsonFilePath);
    return jsonContent;
  } catch (error) {
    throw error;
  }
};