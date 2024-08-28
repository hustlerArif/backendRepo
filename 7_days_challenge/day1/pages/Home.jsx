import React, { useState } from "react";

function Home() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAdd = () => {
    // const addList = { id: Math.random(), todo: input };
    setList([...list, { id: Date.now(), todo: input }]);
  };

  const handleRemove = (id) => {
    // const newList = list.filter((item) => item.id !== id);
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setInput(item.todo);
    setCurrentTask(item);
  };

  const handleUpdate = () => {
    setList(
      list.map((item) =>
        item.id === currentTask.id ? { ...list, todo: input } : item
      )
    );
    setIsEditing(false);
    setInput("");
    setCurrentTask(null);
  };

  return (
    <>
      <h2> review page!</h2>
      <h4>below names will be added in journal page</h4>

      <label>Name</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button onClick={isEditing ? handleUpdate : handleAdd}>
        {isEditing ? "Update" : "Add"}
      </button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
