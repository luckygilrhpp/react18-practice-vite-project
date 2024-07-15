import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function index() {
  const detailData = [
    { id: "01", title: "抽刀断水水更流", content: "韩小刀1" },
    { id: "02", title: "举杯消愁愁更愁", content: "韩小刀2" },
    { id: "03", title: "无可奈何花落去", content: "韩小刀3" },
    { id: "04", title: "桃花依旧笑春风", content: "韩小刀4" },
  ];
  return (
    <div>
      <ul>
        {detailData.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`detail/${m.id}/${m.title}/${m.content}`}>
              {m.title}  
              </Link>          
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  );
}
