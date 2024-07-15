import React, { Component } from "react";

export default class Son extends Component {
  render() {
    const {changeDataMessage} = this.props
    return (
      <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
        我是子组件
        <hr />
        接收到的数据：{changeDataMessage}
      </div>
    );
  }
}
