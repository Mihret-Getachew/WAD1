import React, { useEffect, useState } from "react";
import SearchReponse from "../../types/search-response";

import "./index.css";

export default function List() {
  const [searchResponse, setSearchResponse] = useState<SearchReponse>({
    isFirst: true,
    isError: false,
    isLoading: false,
    users: [],
  });
  const { isError, isFirst, isLoading, users } = searchResponse;
  useEffect(() => {
    const id = PubSub.subscribe("sD545", (msg, data) => {
      setSearchResponse(data);
    });
    return () => {
      PubSub.unsubscribe(id);
    };
  });

  return (
    <div>
      {isFirst ? (
        <h2>Please Enter keyword to start</h2>
      ) : isLoading ? (
        <h2>Please wait</h2>
      ) : isError ? (
        <h2>Whoops! Try later</h2>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank">
                <img src={user.avatar_url} style={{ width: "100px" }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
