import React, { Component } from "react";
import B from "./B";

export default class Father extends Component {
  //state写法一
  // constructor(props) {
  //   super(props);
  //   // 初始化状态
  //   this.state = {
  //     childMessage: "",
  //   };
  // }
  //state写法二
  state = {
    name: "",
  };
  changeDataMessage = (message) => {
    this.setState({ name: message });
  };
  render() {
    return (
      <div style={{width: "400px",height: "200px",background: "pink",marginLeft: "500px",}}>
        我是父组件 接收到子数据：{this.state.name}
        <hr />
        <B changeDataMessage={this.changeDataMessage} />
      </div>
    );
  }
}
