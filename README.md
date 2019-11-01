> 功能说明

该脚手架用于发布pc客户端的js工具库

> shell命令

| shell            | 说明                                                   |
| ---------------- | ------------------------------------------------------ |
| npm start        | 启动开发模式                                           |
| npm run build    | 将库文件编译成commonjs模块并输出到dist文件(src文件夹)  |
| npm run pub:crgt | 将库文件编译成commonjs模块,并发布到crgt(公司内部)的npm |
| npm run pub:npm  | 将库文件编译成commonjs模块,并发布到外部的的npm         |



> 文件夹结构说明

ts-lib/
┣ config/			    配置文件存放目录(webpack配置,tsconfig等)
┣ dist/				    编译好的库文件存放目录
┣ examples/	      书写一些开发demo,webpack-dev-server指向的文件夹		
┣ scripts/			  包含一些脚本(发布脚本)
┣ src/				    库文件的原始文件夹
┣ .eslintignore
┣ .eslintrc.js
┣ .gitignore
┣ .npmignore
┣ package.json
┣ README.md
┣ tsconfig.json
┗ 脚手架使用说明.md



> 后期增加功能

* 增加发布检测,如果不存在git远程仓库则不能发布

* 发布的时候自动在package.json中增加git仓库信息

* 增加umd,cmd,amd打包模式

  