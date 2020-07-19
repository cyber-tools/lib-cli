const execa = require("execa");
const popConfirm = require("@/utils/pop-confirm");
const getLoginInfo = require("@/scripts/get-login-info");
const publishProcess = require("@/scripts/publish-process");


module.exports = async function startPublish() {
  try {
    const currentUser = await getLoginInfo();
    if (!currentUser) {
      await execa("npm", ["login"], { stdio: "inherit" });
      await startPublish();
    } else {
      const text = ["当前登录用户为", currentUser, "是否更换?"].join("");
      const confirm = await popConfirm(text, false);
      if (confirm) {
        await execa("npm", ["logout"], { stdio: "inherit" });
        await execa("npm", ["login"], { stdio: "inherit" });
      };
      await publishProcess();
    };
  } catch (error) {
    throw error;
  };
};
