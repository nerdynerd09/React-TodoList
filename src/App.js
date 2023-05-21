import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const [todosList, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(
      todosList.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodoList = (e) => {
    if (
      document.getElementById("todo-title").value.length === 0 ||
      document.getElementById("todo-task").value.lenght === 0
    ) {
      alert("Enter the fields");
    } else {
      e.preventDefault();

      const myTodo = {
        title: document.getElementById("todo-title").value,
        task: document.getElementById("todo-task").value,
      };

      document.getElementById("todo-title").value = "";
      document.getElementById("todo-task").value = "";
      setTodos([...todosList, myTodo]);
    }
  };
  return (
    <>
      <Header myTitle="Todo List" searchBar={false} />{" "}
      <AddTodo todosList={todosList} addTodoList={addTodoList} />{" "}
      <br></br>
      <Todos todos={todosList} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
