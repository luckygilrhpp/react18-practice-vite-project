import React,{useState} from 'react'
import B from './B'
export default function father() {
   const [message,setMessage] = useState('haha')
 const sendMessageData = (message) => {
      setMessage(message)
   }
 
  return (
    <div style={{width:'400px',height:'200px',background:'pink',marginLeft:'500px'}}>
     我是父组件
     <hr />
     <div>接受子组件的数据:{message}</div>
     <B onMessageChange={sendMessageData}/>
    </div>
  )
}
