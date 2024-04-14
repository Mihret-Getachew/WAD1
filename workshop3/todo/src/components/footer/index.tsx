import React from "react";
import "./index.css";
import { type } from "os";
import Todo from "../../types";
type Props = {
  todo: Todo[];
  allChecked: (done: boolean) => void;
  allDeleteTask: () => void;
};
export default function Footer(props: Props) {
  const { todo, allChecked, allDeleteTask } = props;
  const checkedCount = todo.filter((item) => item.done == true).length;
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={checkedCount == todo.length}
          onChange={(e) => {
            allChecked(e.currentTarget.checked);
          }}
        />
      </label>
      <span>
        <span>Finished {checkedCount}</span>/ total {todo.length}
      </span>
      <button className="btn btn-danger" onClick={allDeleteTask}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
