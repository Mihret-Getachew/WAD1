import React from "react";
import Item from "../item";
import Todo from "../../types";

type Props = {
  todos: Todo[];
  updateTodo: (id: string, done: boolean) => void;
  deletedTodo: (id: string) => void;
};
export default function List(props: Props) {
  const { todos, updateTodo, deletedTodo } = props;
  return (
    <ul className="todo-main">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          {...todo}
          updateTodo={updateTodo}
          deletedTodo={deletedTodo}
        />
      ))}
    </ul>
  );
}
