import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { Comment } from "./types/types";
import avatar from "./images/bozai.png";
import { v4 as uuid } from "uuid";
import dayjs, { Dayjs } from "dayjs";
import _lodash from "lodash";
import classNames from "classnames";
import useComment from "./hooks/customhooks";

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
interface CommentProp {
  rpid: number | string;
  user: {
    uid: string | number;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
  deleteHandler: (rpid: number | string) => void;
  likeHandler: (id: number | string) => void;
}

const Commentcomp = (props: CommentProp) => {
  const { rpid, user, content, ctime, like, deleteHandler, likeHandler } =
    props;
  return (
    <div className="reply-item">
      {/* profile */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" alt="" />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{ctime}</span>
            {/* total likes */}
            <span
              className="reply-time"
              onClick={() => {
                likeHandler(rpid);
              }}
            >
              {" "}
              Like:{like}
            </span>
            <span
              className="delete-btn"
              onClick={() => {
                deleteHandler(rpid);
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { comments, setComments } = useComment();
  const [activeState, setActiveState] = useState<string>("hot");

  const textRef = useRef<HTMLTextAreaElement>(null);
  const deleteHandler = (id: number | string) => {
    const deletedComment = comments.filter((comment) => comment.rpid != id);
    setComments(deletedComment);
  };
  const postHandler = () => {
    const inputValue = textRef.current!.value;
    const newCommment = {
      rpid: uuid(),
      user: user,
      content: inputValue,
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };
    setComments([...comments, newCommment]);

    textRef.current!.value = "";
    textRef.current!.focus();
  };
  const tabHandler = (type: string) => {
    setActiveState(type);
    if (type == "hot") {
      setComments(_lodash.orderBy(comments, "like", "asc"));
    } else {
      setComments(_lodash.orderBy(comments, "ctime", "asc"));
    }
  };
  const likeHandler = (id: number | string) => {
    const liked = comments.map((comment) => {
      if (comment.rpid == id) {
        return { ...comment, like: comment.like + 1 };
      } else return comment;
    });
    setComments(liked);
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                className={classNames("nav-item", {
                  active: tab.type == activeState,
                })}
                key={tab.type}
                onClick={() => {
                  tabHandler(tab.type);
                }}
              >
                {tab.text}
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
          {comments.map((comment) => (
            <Commentcomp
              key={comment.rpid}
              rpid={comment.rpid}
              user={comment.user}
              content={comment.content}
              ctime={comment.ctime}
              like={comment.like}
              deleteHandler={deleteHandler}
              likeHandler={likeHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
