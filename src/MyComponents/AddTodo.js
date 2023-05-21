import React from "react";

export const AddTodo = (props) => {


  return (
    <div className="container">
      <h2>Add Todo</h2>
      <form onSubmit={props.addTodoList}>
        <div className="mb-3">
          <label for="todo-title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="form-field"
            className="form-control"
            id="todo-title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="todo-task" name="form-field" className="form-label">
            Task
          </label>
          <input type="text" className="form-control" id="todo-task" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
