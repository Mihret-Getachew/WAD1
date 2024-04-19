import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function Detail() {
  const { id, title, content } = useParams();
  return (
    <div>
      <p>Message id: {id}</p>
      <p>Message title: {title}</p>
      <p>Message content: {content}</p>
    </div>
  );
}
