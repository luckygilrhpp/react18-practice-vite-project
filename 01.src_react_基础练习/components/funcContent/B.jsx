import React from "react";

export default function son({onMessageChange}) {
 
   const changeDataMessage = (message) => {
    onMessageChange('韩小刀')
   }
    

  return (
    <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
      我是子组件
      <hr />
    <button onClick={changeDataMessage}> 点我父组件接收到数据</button>
    </div>
  );
}
