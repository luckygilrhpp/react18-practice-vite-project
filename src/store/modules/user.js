import {createSlice} from "@reduxjs/toolkit"
import{request} from '../../utils/request'
const userStore = createSlice({
  name:'user',
  initialState:{
    token:'',
  },
  //同步修改方法
  reducers:{
    setToken(state,action){
      state.token = action.payload
      console.log('state',state);
      console.log('action',action);
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