const execa = require("execa");
const toast = require("@/utils/toast");


module.exports = async () => {
  try {
    toast.start("检查登录信息... ...");
    const { stdout } = await execa("npm", ["whoami"], {
      encoding: "utf-8"
    });
    toast.stop();
    return stdout.trim();
  } catch (error) {
    toast.warn("未检测到登录用户");
    return false;
  };
};