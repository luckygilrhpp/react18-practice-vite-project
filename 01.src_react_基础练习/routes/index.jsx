
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import {Navigate} from 'react-router-dom'
import Detail from '../pages/Detail'


export default  [
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/home",
    element: <Home/>,
    children:[
          {
            path: "news",
            element: <News/>,
          },
          {
            path: "messages",
            element: <Messages/>,
            children:[
              {
                path: "detail/:id/:title/:content",
                element: <Detail/>,
              },
            ]
          },  
          {
            path: "/home",
            element: <Navigate to="news"/>,
           
          },
        
    ]
  },
  {
    path: "/",
    element: <Navigate to="/about"/>,
  },
]