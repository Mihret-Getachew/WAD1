import axios from "axios";
import { ChangeEvent, useState } from "react";
import User from "../../types/user";
import SearchReponse from "../../types/search-response";
import React from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const search = async () => {
    PubSub.publish("sD545", {
      isFirst: false,
      isLoading: true,
      isError: false,
      users: [],
    });

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${keyword}`
      );
      if (response.status === 200) {
        PubSub.publish("sD545", {
          isFirst: false,
          isLoading: false,
          isError: false,
          users: response.data.items,
        });
      } else {
        PubSub.publish("sD545", {
          isFirst: false,
          isLoading: true,
          isError: true,
          users: [],
        });
      }
    } catch (e) {
      PubSub.publish("sD545", {
        isFirst: false,
        isLoading: true,
        isError: true,
        users: [],
      });
    }
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          value={keyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
        />
        &nbsp;
        <button onClick={search}>Search</button>
      </div>
    </section>
  );
}
