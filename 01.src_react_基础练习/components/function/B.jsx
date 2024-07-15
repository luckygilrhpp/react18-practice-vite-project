import React from "react";

export default function son({sendMessageData}) {

//子组件操作 给父组件传数据
  const handleData=()=>{
    sendMessageData('韩小刀')
  }
  return (
    <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
      我是子组件
      <hr />
     <button onClick={handleData} >点我给父组件传数据</button>
    </div>
  );
}
