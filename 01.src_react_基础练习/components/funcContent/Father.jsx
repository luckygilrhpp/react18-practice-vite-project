import React,{useState} from 'react'
import Son from './Son'
export default function father() {

   const [data,setData] = useState('韩小刀')
  return (
    <div style={{width:'400px',height:'200px',background:'pink',marginLeft:'500px'}}>
     我是父组件
     <hr />
     <div>接受子组件的数据:</div>
     <Son sendMessage={data}/>
    </div>
  )
}
