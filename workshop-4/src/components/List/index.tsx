import SearchReponse from "../../types/search-response";
import User from "../../types/user";

import "./index.css";
interface Props {
  isFirst: boolean;
  isLoading: boolean;
  isError: boolean;
  users: User[];
}

// type Props = {
//     searchResponse: SearchReponse
// }

export default function List(props: Props) {
  const { isFirst, isLoading, isError, users } = props;
  return (
    <div>
      {isFirst ? (
        <h2>please enter key word</h2>
      ) : isLoading ? (
        <h2>please wait...</h2>
      ) : isError ? (
        <h2>Oops try again!</h2>
      ) : (
        <div className="row">
          {users.map((card) => (
            <div className="card">
              <a href={card.html_url} target="_blank">
                <img src={card.avatar_url} style={{ width: "100px" }} />
              </a>
              <p className="card-text">{card.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
