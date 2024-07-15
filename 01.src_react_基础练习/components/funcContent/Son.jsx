import React from "react";

export default function son({sendMessage}) {
 
 
    

  return (
    <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
      我是子组件
      <hr />
     父组件接收到的数据：{sendMessage}
    </div>
  );
}
