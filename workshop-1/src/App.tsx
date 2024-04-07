import { ChangeEvent, useRef, useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";
import _lodash from "lodash";
import classnames from "classnames";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

interface Commment {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

// Comment List data
const defaultList: Commment[] = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];
// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [commentList, setCommentList] = useState<Commment[]>(defaultList);
  const [activeState, setActiveState] = useState("hot");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const [content, setContent] = useState<string>("");

  const deleteHandler = (id: string | number) => {
    const deletedComment = commentList.filter((comment) => comment.rpid != id);
    setCommentList(deletedComment);
  };

  const tabHandler = (type: string) => {
    setActiveState(type);
    if (type === "hot") {
      setCommentList(_lodash.orderBy(commentList, "like", "desc"));
    } else {
      console.log("newest");
      setCommentList(_lodash.orderBy(commentList, "ctime", "desc"));
    }
  };

  const textChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const postHandler = () => {
    // const textValue = textRef.current?.value;
    // if (textValue) {
    const newComment = {
      rpid: uuid(),
      user,
      content: content, //uncontrolled component
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };
    setCommentList([...commentList, newComment]);

    textRef.current!.value = " ";
    setContent("");
    textRef.current?.focus();
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}

            {tabs.map((tab) => (
              <span
                key={tab.type}
                className={classnames("nav-item", {
                  active: tab.type === activeState,
                })}
                onClick={() => tabHandler(tab.type)}
              >
                {tab.text}{" "}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              onChange={textChange}
              ref={textRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text" onClick={postHandler}>
                post
              </div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((comment) => (
            <div className="reply-item" key={comment.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" alt="" />
                </div>
              </div>

              <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                  <div className="user-name">{comment.user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                  <span className="reply-content">{comment.content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{"2023-11-11"}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{comment.like}</span>
                    <span
                      className="delete-btn"
                      onClick={() => {
                        deleteHandler(comment.rpid);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;