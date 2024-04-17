import axios from "axios";
import { ChangeEvent, useState } from "react";
import User from "../../types/user";
import SearchReponse from "../../types/search-response";

interface Props {
  onSetSearchResponse: (value: SearchReponse) => void;
}

export default function Search(props: Props) {
  const [search, setSearch] = useState<string>("");
  const { onSetSearchResponse } = props;
  const OnInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
  };
  const searchhandler = async () => {
    onSetSearchResponse({
      isFirst: false,
      isLoading: true,
      isError: false,
      users: [],
    });
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${search}`
      );
      if (response.status == 200) {
        onSetSearchResponse({
          isFirst: false,
          isLoading: false,
          isError: false,
          users: response.data.items,
        });
      } else {
        onSetSearchResponse({
          isFirst: false,
          isLoading: false,
          isError: false,
          users: [],
        });
      }
    } catch (e) {
      onSetSearchResponse({
        isFirst: false,
        isLoading: false,
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
          value={search}
          onChange={OnInputvalue}
        />
        &nbsp;
        <button onClick={searchhandler}>Search</button>
      </div>
    </section>
  );
}
