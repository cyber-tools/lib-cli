const path = require("path");
const git = require("simple-git")();
const parse = require("git-url-parse");
const { fromPairs } = require("lodash");
const { readFile, writeFile } = require("jsonfile");

module.exports = async () => {
  try {
    const jsonFilePath = path.join(process.cwd(), "package.json");
    const jsonFileContent = await readFile(jsonFilePath);
    const list = await git.getRemotes(true);
    const remote = fromPairs(list.map(({ name, refs }) => [name, refs.push]));
    const { href, source } = parse(remote.origin);
    const assignObject = { ...jsonFileContent, repository: { type: source, url: href } };
    await writeFile(jsonFilePath, assignObject, { spaces: 2, EOL: '\r\n' });
  } catch (error) {
    throw error;
  }
};