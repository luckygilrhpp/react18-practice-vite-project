import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/CounterSlice.jsx'
import buttonsReducer from '../features/buttons/ButtonSlice.jsx'
export default configureStore({
  reducer: {
    // counter: counterReducer
    buttons:buttonsReducer
  }
})