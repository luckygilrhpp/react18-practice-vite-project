import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
export default function index() {
  return (
    <div>
       <h2>我是home组件</h2>
      
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="messages">Messages</NavLink>
                  </li>
                </ul>
            <Outlet/>
              
    </div>
  )
}
