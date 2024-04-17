import { useState } from "react";
import List from "./components/List";

import User from "./types/user";
import SearchReponse from "./types/search-response";
import Search from "./components/Search";

export default function App() {
  const [searchResponse, setSearchResponse] = useState<SearchReponse>({
    isFirst: true,
    isError: false,
    isLoading: false,
    users: [],
  });

  return (
    <div className="container">
      <Search onSetSearchResponse={setSearchResponse} />
      <List {...searchResponse} />
    </div>
  );
}
