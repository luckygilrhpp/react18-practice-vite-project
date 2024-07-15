import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import store from './app/store.js'
import { Provider } from 'react-redux'
// import {Counter} from "./features/counter/Counter.jsx";
import { BrowserRouter } from "react-router-dom";
import Buttons from "./features/buttons/Buttons.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
 <div>
    <BrowserRouter>
    <Provider store={store}>
       <App />
       {/* <Counter/> */}
       <Buttons/>
       </Provider>
    </BrowserRouter>
    <hr />
 
       
 </div>
);
