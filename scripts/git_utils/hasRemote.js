const shell = require("shelljs");

module.exports = function hasRemote() {
  if (Boolean(shell.exec("git remote -v", { silent: true }).stdout)) {
    return true;
  } else {
    console.warn("当前工作区没有设置远程仓库");
    return false;
  }
};