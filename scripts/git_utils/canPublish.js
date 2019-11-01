const path = require("path");

module.exports = function canPublish() {
  try {
    const package_json = require(path.join(process.cwd(), "./package.json"));
    return package_json;
  } catch (error) {
    console.warn("不存在package.json,无法发布,请使用npm init -y 命令初始化!!! !!!");
    return false;
  }

};