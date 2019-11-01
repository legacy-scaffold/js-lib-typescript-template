const spawn = require("cross-spawn");
const hasRemote = require("./hasRemote");
const listConfirm = require("../lastConfirm");

module.exports = async function pushToRemote(params = "") {
  if (hasRemote()) {
    const confirm = await listConfirm({
      defaultValue: true,
      message: "是否推送到远程仓库?"
    });
    if (confirm) {
      spawn.sync("git", ["push", "origin"], { stdio: "inherit" });
    } else {
      process.exit(0);
    }
  } else {
    process.exit(0);
  };
};