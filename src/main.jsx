import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import {Provider} from 'react-redux'
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
 
 <div>
  <Provider store={store}>
    <RouterProvider router={router}/> 
  </Provider>
 </div>
);
