const shell = require("shelljs");


module.exports = function isClean() {
  if (shell.exec("git status", { silent: true }).stdout.match("working tree clean")) {
    console.log("工作区很干净");
    return true;
  } else {
    console.warn("工作区不干净");
    return false;
  };
};