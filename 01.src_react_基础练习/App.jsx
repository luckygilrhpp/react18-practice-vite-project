import "./App.css";
import { useRoutes, NavLink } from "react-router-dom";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 co1-xs-offset-2">
            <div className="list-group">
              {/* react 靠路由链接切换组件 实现不同页面跳转 */}
              <div className="list-group">
                <NavLink className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink className="list-group-item" to="/home">
                  Home
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
