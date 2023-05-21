import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (propsList) => {
  return (
    <div className="container">
      <div>
        {propsList.todos.length === 0
          ? "No todos to display"
          : propsList.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.title}
                  onDelete={propsList.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};