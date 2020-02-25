// 请在此处书写您的库文件案例
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import ComponentName from "@/test";




const mountNode = document.createElement("div");
document.body.appendChild(mountNode);
ReactDOM.render((
  <div>
    <Button type="danger">
      <ComponentName />
    </Button>
  </div>
), mountNode);





