import React, { useState } from "react";
import "./TodoForm.css";

export default function TodoForm(props) {
  // Get properties
  const handleAddNewTodo = props.handleAddNewTodo;

  // Initialize states
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  // Declare functions
  // Handle todo title input
  function onChangeNewTodoTitle(e) {
    setForm({
      ...form,
      title: e.target.value,
    });
  }

  // Handle todo description input
  function onChangeNewTodoDescription(e) {
    setForm({
      ...form,
      description: e.target.value,
    });
  }

  // handle submit new todo
  function onSubmitNewTodo() {
    // Calls add new todo function from parent component -> <App />
    handleAddNewTodo(form);
    // Reset form
    setForm({
      title: "",
      description: "",
    });
  }

  return (
    <div className="form">
      <h2 style={{ textAlign: "center", margin: 0 }}>Input Form</h2>
      <label>Todo title</label>
      <input type="text" value={form.title} onChange={onChangeNewTodoTitle} />
      <br />
      <label>Todo description</label>
      <input
        type="text"
        value={form.description}
        onChange={onChangeNewTodoDescription}
      />
      <button onClick={onSubmitNewTodo}>Submit</button>
    </div>
  );
}
