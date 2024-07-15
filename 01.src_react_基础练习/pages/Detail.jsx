import React from "react";
import { useParams } from "react-router-dom";

export default function Deatil() {
  //state参数传递
  // const {state:{id,title,content}} = useLocation()
  // params参数传递
  const {id,title,content} = useParams()
  return (
    
        <ul>
          <li>{id}</li>
          <li>{title}</li>
          <li>{content}</li>
        </ul>
     
  );
}
