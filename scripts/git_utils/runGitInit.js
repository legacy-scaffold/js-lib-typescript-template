const spawn = require("cross-spawn");
const canIuse = require("./canIuse");

module.exports = function runGitInit() {
  if (!canIuse()) {
    process.exit(0);
  };
  console.log("进行git初始化");
  spawn.sync("git", ["init"], { stdio: "inherit" });
};