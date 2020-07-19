const path = require("path");
const execa = require("execa");

const toast = require("@/utils/toast");


module.exports = async () => {
  try {
    toast.start("正在编译代码... ...");
    await execa("npx", [
      "babel",
      path.join(process.cwd(), "src"),
      "--out-dir",
      path.join(process.cwd(), "dist"),
      `--config-file ${path.join(process.cwd(), ".babelrc.js")}`,
    ], { stdout: "inherit" });
    toast.succeed("编译成功!");
  } catch (error) {
    toast.fail("编译失败!");
    throw error;
  };
};