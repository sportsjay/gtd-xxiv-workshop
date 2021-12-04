import React, { useEffect, useState } from "react";

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
    <div
      style={{
        margin: 10,
        padding: 10,
        width: "50%",
        height: "max-content",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "lightgreen",
      }}
    >
      <div style={{ width: "70%" }}>
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
      <section style={{ width: "30%" }}>
        <button onClick={onDeleteFunction}>Delete</button>
        <button onClick={setUpdate}>Update</button>
      </section>
    </div>
  );
}
