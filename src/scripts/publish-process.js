const execa = require("execa");
const toast = require("@/utils/toast");
const versionCommit = require("@/scripts/version-commit");
const selectVersionType = require("@/scripts/select-version-type");
const appendRemoteInfo = require("@/scripts/append-remote-info");

const hasRemote = require("@/utils/hasRemote");
const isPackageName = require("@/utils/is-package-name");


const { name } = require("../../package.json");

module.exports = async () => {
  if (!await isPackageName()) {
    toast.warn(["包名", name, "不符合规范!"].join(""));
    process.exit(0);
  };
  if (await hasRemote()) {
    await appendRemoteInfo();
  };
  try {
    const versionType = await selectVersionType();
    await versionCommit();
    await execa("npm", ["version", versionType], { stdio: "inherit" });
    await execa("npm", ["publish"], { stdio: "inherit" });
    toast.succeed("发布成功!");
  } catch (error) {
    throw error;
  };
};