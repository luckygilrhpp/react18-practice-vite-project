import React, { useState } from 'react'
 import B from './B'
export default function father() {
  // 父组件的数据
 const [data,setData] = useState('')
  
// 父组件传给子组件的方法
 const onMessageChange = (message) => {
   setData(message)
 }

  return (
    <div style={{width:'400px',height:'200px',background:'pink',marginLeft:'500px'}}>
     我是父组件
     <div>接收子组件的数据:{data}</div>
     <hr />
     <B sendMessageData={onMessageChange}/>
    </div>
  )
}
