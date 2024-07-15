import {createSlice} from "@reduxjs/toolkit"
import{request} from '../../utils/request'
import { setToken as _setToken,getToken as _getToken } from "../../utils/token";

const userStore = createSlice({
  name:'user',
  initialState:{
    //初始化token
    token:localStorage.getItem('token_key')||'',
  },
  //同步修改方法
  reducers:{
    setToken(state,action){
      // 获取并存储token --- redux
      state.token = action.payload
      console.log(state,'state')
      console.log(action,'action')
    // 存储token --- localStorage
    setToken(action.payload)
    }
  }
})
//解构actionCreater
export const {setToken} = userStore.actions


//异步方法  完成登录获取token
const fetchLogin =(loginForm) =>{
  
  return async (dispatch)=>{
    //1.发送异步请求
  const res = await request.get('/users/1',loginForm)
  console.log(res,'res');
  // const res = await request.post('/users/1')
    //2.提交同步数据action 进行token保存
    dispatch(setToken(res.id))
  }
}




// 获取reducer函数
 const userReducer = userStore.reducer;
 
 export default userReducer;
 export {fetchLogin};