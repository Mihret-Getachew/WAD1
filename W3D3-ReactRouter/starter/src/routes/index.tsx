import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Messages from "../pages/Message";
import Detail from "../pages/MessageDetail";
import PageNotFound from "../pages/PageNotFound";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
        children: [{ path: "detail", element: <NewsDetail /> }],
      },
      {
        path: "messages",
        element: <Messages />,
        children: [{ path: "detail/:id/:title/:content", element: <Detail /> }],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
