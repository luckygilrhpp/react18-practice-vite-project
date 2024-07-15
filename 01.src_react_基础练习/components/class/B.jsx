import React, { Component } from "react";

export default class Son extends Component {
  handleMessageData = () => { 
      this.props.changeDataMessage('韩小刀')  
  }
  render() {
    return (
      <div style={{ width: "200px", height: "100px", background: "lightgreen" }}>
        我是子组件
        <hr />
        <button onClick={this.handleMessageData}>点我给父组件传数据</button> 
      </div>
    );
  }
}
