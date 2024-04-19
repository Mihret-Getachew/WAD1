import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([
    { id: 1, title: "News 1", content: "Content of News 1" },
    { id: 2, title: "News 2", content: "Content of News 2" },
    { id: 3, title: "News 3", content: "Content of News 3" },
  ]);

  return (
    <div>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link
              to={`detail?id=${news.id}&&title=${news.title}&&content=${news.content}`}
            >
              {news.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
