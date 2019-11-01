const shell = require("shelljs");


const GIT_CODE_ENUM = {
  "0": "no_problem",
  "128": "not_git_init"
};;

module.exports = function hasGit() {
  if (shell.which("git")) {
    return GIT_CODE_ENUM[shell.exec("git status", { silent: true }).code] === "no_problem";
  } else {
    throw new Error("没有找到git命令,无法执行git命令,请安装git")
  }
};