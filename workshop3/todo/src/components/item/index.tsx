import React, { ChangeEvent, MouseEvent } from "react";
import "./index.css";
import Todo from "../../types";
type props = {
  id: string;
  name: string;
  done: boolean;
  updateTodo: (id: string, done: boolean) => void;
  deletedTodo: (id: string) => void;
};
export default function Item(props: props) {
  const { id, name, done, updateTodo, deletedTodo } = props;
  const onChangechecked = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo(id, done);
  };
  const ondeletebutton = (e: MouseEvent<HTMLButtonElement>) => {
    deletedTodo(id);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onChangechecked} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" onClick={ondeletebutton}>
        Delete
      </button>
    </li>
  );
}
