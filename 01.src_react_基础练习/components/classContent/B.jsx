import React, { Component } from "react";

export default class Son extends Component {
  handleMessageData = () => {
    // 获取父组件传递过来的数据
    const { sendData } = this.props;
    return()=>{
      sendData('韩小刀')
    }
  };
  render() {
  
    return (
      <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
        我是子组件
        <hr />
        
      </div>
    );
  }
}
