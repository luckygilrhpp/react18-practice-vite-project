import React, { Component } from 'react'
import B from './B'

export default class Father extends Component {
  //父组件的数据
    state ={
      name:'韩小刀'
    }

    changeDataMessage = (message) => {
      this.setState({
        name:message
      })
    }
  render() {
    return (
      <div style={{width:'400px',height:'200px',background:'pink',marginLeft:'500px'}}>
       我是父组件
      接收到的子组件的数据：{this.state.name}
     <hr />
     <B sendData={this.changeDataMessage}/>
    </div>
    )
  }
}
