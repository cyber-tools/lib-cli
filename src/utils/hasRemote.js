const git = require("simple-git")();

module.exports = async () => {
  try {
    const list = await git.getRemotes();
    return list.length > 0;
  } catch (error) {
    throw error;
  }
};