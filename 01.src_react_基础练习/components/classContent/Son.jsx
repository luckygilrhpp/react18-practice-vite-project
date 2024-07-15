import React, { Component } from "react";

export default class Son extends Component {
  render() {
  
    return (
      <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
        我是子组件
        <hr />
        接收到的父组件数据：{this.props.sendData}
      </div>
    );
  }
}
