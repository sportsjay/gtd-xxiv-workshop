import React, { useEffect, useState } from "react";
import "./TodoComponent.css";

export default function TodoComponent(props) {
  // Get props
  const idx = props.idx;
  const title = props.title;
  const description = props.description;
  const onDeleteFunction = props.onDeleteFunction;
  const onUpdateFunction = props.onUpdateFunction;

  const [todoData, setTodoData] = useState({
    newTitle: title,
    newDescription: description,
  });

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {}, [title, description]);

  // Set update mode
  function setUpdate() {
    setIsUpdating(!isUpdating);
  }

  // Handle title changes
  function onChangeTitle(e) {
    setTodoData({
      ...todoData,
      newTitle: e.target.value,
    });
  }

  // Handle description changes
  function onChangeDescription(e) {
    setTodoData({
      ...todoData,
      newDescription: e.target.value,
    });
  }

  // Handle update submit
  function onSubmitUpdate() {
    const newData = {
      title: todoData.newTitle,
      description: todoData.newDescription,
    };
    onUpdateFunction(idx, newData);
    setUpdate();
  }

  return (
    <div className="list">
      <div>
        {!isUpdating ? (
          <React.Fragment>
            <strong>{todoData.newTitle}</strong>
            <p>{todoData.newDescription}</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              type="text"
              value={todoData.newTitle}
              onChange={onChangeTitle}
            />
            <br />
            <input
              type="text"
              value={todoData.newDescription}
              onChange={onChangeDescription}
            />
            <br />
            <button onClick={onSubmitUpdate}>Update</button>
          </React.Fragment>
        )}
      </div>
      <section className="editbutton">
        <button onClick={onDeleteFunction}>Delete</button>
        <button onClick={setUpdate}>Update</button>
      </section>
    </div>
  );
}
