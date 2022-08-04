import React from "react";
import Checkbox from "../Checkbox";
import { BsTrash } from "react-icons/bs";
import cn from "classnames";

const TodoItem = ({ changeTodo, todo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <div onClick={() => changeTodo(todo.id)} className="flex items-center">
        <Checkbox isCompleted={todo.isCompleted} />
        <span
          className={cn("text-zinc-50", { "line-through": todo.isCompleted })}
        >
          {todo.title}
        </span>
      </div>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
