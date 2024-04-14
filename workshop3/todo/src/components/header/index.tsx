import { KeyboardEvent } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Todo from "../../types";
type Props = {
  addNewTodo: (newTodo: Todo) => void;
};

export default function Header(props: Props) {
  const { addNewTodo } = props;
  const enterToodo = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    console.log("-------" + value);
    if (e.key === "Enter") {
      if (value.trim()) {
        addNewTodo({
          id: nanoid(),
          name: value,
          done: false,
        });
        e.currentTarget.value = "";
        e.currentTarget.focus();
      } else {
        alert("todo task cannot be empty");
      }
    }
  };

  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" onKeyDown={enterToodo} />
    </div>
  );
}
