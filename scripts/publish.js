const spawn = require("cross-spawn");

const hasGit = require("./utils/git_utils/hasGit");
const isClean = require("./utils/git_utils/isClean");
const hasRemote = require("./utils/git_utils/hasRemote");
const runGitInit = require("./utils/git_utils/runGitInit");
const lastConfirm = require("./utils/lastConfirm");


// 对内发布npm
async function publishAction() {
  try {
    // 完成发布前的提交
    if (!isClean()) {
      spawn.sync("git", ["add", "."], { stdio: "inherit" });
      spawn.sync("git", ["commit", "-m", "版本发布"], { stdio: "inherit" });
    };
    // 修改npm版本
    // 修改的同时会自动完成一次git提交,所以要保证在修改版本号之前，git工作区是干净的
    spawn.sync("npm", ["version", "patch"], { stdio: "inherit" });
    //登录到npm
    spawn.sync("npm", ["login", "--registry", "http://npm.crgt.xyz"], { stdio: "inherit" });
    //发布到npm
    spawn.sync("npm", ["--registry", "http://npm.crgt.xyz", "publish"], { stdio: "inherit" });

    if (hasRemote()) {
      spawn.sync("git", ["push", "origin"], { stdio: "inherit" });
    };
    console.log("发布成功:)");
  } catch (error) {
    console.log("发布失败:(");
    throw error;
  } finally {
    process.exit(0);
  }
};






