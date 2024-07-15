import React from "react";

export default function son({changeDataMessage}) {
 const  handleData=()=>{
  changeDataMessage('韩小刀')
  }


  return (
    <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
      我是子组件
      <hr />
     <button onClick={handleData}></button>
    </div>
  );
}
