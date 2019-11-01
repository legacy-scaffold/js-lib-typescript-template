const path = require("path");

module.exports = function canIuse() {
  const { root, dir, base, name } = path.parse(process.cwd());

  if (root === "C:\\") {
    console.log("位于系统盘,不提倡使用git命令,如一定要使用,请自行手动");
    return false;
  };

  if ((base === "Desktop") && (name === "Desktop")) {
    console.log("在桌面上,不提倡使用git命令,如一定要使用,请自行手动");
    return false;
  };

  if (base && name) {
    return true;
  } else {
    console.log("在盘符根目录,不提倡使用git命令,如一定要使用,请自行手动");
    return false;
  };
}