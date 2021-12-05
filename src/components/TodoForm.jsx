import React, { Component } from "react";
import "./TodoForm.css";

export default class TodoForm extends Component {
  constructor(props) {
    // declare super class
    super();
    // Extract props
    this.handleAddNewTodo = props.onAddNewTodo;

    // Initialize state
    this.state = {
      title: "",
      description: "",
    };

    // Bind methods
    this.onChangeNewTodoTitle = this.onChangeNewTodoTitle.bind(this);
    this.onChangeNewTodoDescription =
      this.onChangeNewTodoDescription.bind(this);
    this.onSubmitNewTodo = this.onSubmitNewTodo.bind(this);
  }

  onChangeNewTodoTitle(e) {
    this.setState({
      ...this.state,
      title: e.target.value,
    });
  }

  onChangeNewTodoDescription(e) {
    this.setState({
      ...this.state,
      description: e.target.value,
    });
  }

  onSubmitNewTodo() {
    this.handleAddNewTodo(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }

  render() {
    return (
      <div className="form">
        <h2 style={{ textAlign: "center", margin: 0 }}>Input Form</h2>
        <label>Todo title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onChangeNewTodoTitle}
        />
        <br />
        <label>Todo description</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.onChangeNewTodoDescription}
        />
        <button onClick={this.onSubmitNewTodo}>Submit</button>
      </div>
    );
  }
}
