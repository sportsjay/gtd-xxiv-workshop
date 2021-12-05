import React, { useState } from "react";
import "./App.css";
import TodoComponent from "./components/TodoComponent";
import TodoForm from "./components/TodoForm";

function App() {
  /**
   * Stores todo list
   */
  const [todoList, setTodoList] = useState([
    // Saves todo list state
    {
      // Initial state
      title: "Placeholder",
      description: "No Description",
    },
  ]);

  // Handle add new todo
  function handleAddNewTodo(newTodo) {
    // Validate if user has added title
    if (newTodo.title != null && newTodo.title !== "") {
      // Add new todo to the list
      setTodoList([...todoList, newTodo]);
    } else alert("Please fill in a Todo title before submitting a new Todo");
  }

  /**
   * List Manipulations
   */
  // Handle todo deletion
  function handleDeleteFunction(idx) {
    // delete 1 item starting from index = idx
    todoList.splice(idx, 1);
    // replace the old list with the new list
    setTodoList([...todoList]);
  }

  // Handle todo update
  function handleUpdateFunction(idx, newData) {
    // Replace list in index = idx to a new Todo
    todoList[idx] = newData;
    // replace the old list with the new list
    setTodoList([...todoList]);
  }

  return (
    <div className="container">
      {/* APP TITLE */}
      <h1 className="title">Todo List</h1>
      {todoList.length >= 1 ? (
        todoList.map((todo, idx) => (
          <TodoComponent
            key={idx}
            idx={idx}
            title={todo.title}
            description={todo.description}
            onDeleteFunction={() => handleDeleteFunction(idx)}
            onUpdateFunction={handleUpdateFunction}
          />
        ))
      ) : (
        <h3>
          <strong>Add new todo</strong>
        </h3>
      )}
      <TodoForm handleAddNewTodo={handleAddNewTodo} />
    </div>
  );
}

export default App;
