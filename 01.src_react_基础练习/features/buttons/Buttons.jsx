import React from 'react'
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './ButtonSlice';
export default function Buttons() {
//   const [data,setData] = useState(0)
//  const changeNumData =(newData)=>{
//    setData(newData)
//  }

const selector =useSelector(state=>state.buttons.value)
const dispatch = useDispatch()

 const changeNumData =()=>{
  dispatch(increment())
}

  return (
    <div>
         <Button onClick={changeNumData} type="primary" style={{marginLeft:200}}>点我加 1</Button>
        <div style={{marginLeft: 200,marginTop:20}}>{selector}</div>
    </div>
  )
}
