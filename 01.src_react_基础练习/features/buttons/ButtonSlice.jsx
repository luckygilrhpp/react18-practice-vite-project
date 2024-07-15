import { createSlice } from '@reduxjs/toolkit'

const ButtonSlice = createSlice({
      name:'buttons',
      initialState:{
        value:0
      },
      reducers:{
        increment:state =>{
          state.value += 1
        }
      }
 })
 
export default ButtonSlice.reducer
export const {increment} = ButtonSlice.actions
