import React, { Component } from 'react'
import Son from './Son'

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
     <hr />
     <Son sendData={this.state.name}/>
    </div>
    )
  }
}
