const path = require("path");
const git = require("simple-git")();
const jsonfile = require("jsonfile");
const parse = require("git-url-parse");
const { fromPairs } = require("lodash");

module.exports = async () => {
  try {
    const jsonFilePath = path.join(process.cwd(), "package.json");
    const jsonFileContent = await jsonfile.readFile(jsonFilePath);
    const list = await git.getRemotes(true);
    const remote = fromPairs(list.map(({ name, refs }) => [name, refs.push]));
    const { href, source } = parse(remote.origin);
    const assignObject = { ...jsonFileContent, repository: { type: source, url: href } };
    await jsonfile.writeFile(jsonFilePath, assignObject, { spaces: 2, EOL: '\r\n' });
  } catch (error) {
    throw error;
  }
};