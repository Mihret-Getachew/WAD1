import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export default function NewsDetail() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <p> News Id:{searchParam.get("id")}</p>
      <p> News title:{searchParam.get("title")}</p>
      <p> News content:{searchParam.get("content")}</p>
    </div>
  );
}
