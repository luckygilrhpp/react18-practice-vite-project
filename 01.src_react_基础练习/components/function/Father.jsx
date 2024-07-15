import React from 'react'
import Son from './Son'
export default function father() {
  const [data,setData]=React.useState('')
const changeData=(newData)=>{
  setData(newData)
}
  return (
    <div style={{width:'400px',height:'200px',background:'pink',marginLeft:'500px'}}>
     我是父组件
     <hr />
     <div>接受子组件的数据:{data}</div>
     <Son changeDataMessage={changeData}/>
    </div>
  )
}
