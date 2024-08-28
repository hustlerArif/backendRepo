import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTask.id ? { ...task, text: newTask } : task
      )
    );
    setIsEditing(false);
    setNewTask("");
    setCurrentTask(null);
  };

  const startEditTask = (task) => {
    setIsEditing(true);
    setNewTask(task.text);
    setCurrentTask(task);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple ToDo App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={isEditing ? handleUpdateTask : handleAddTask}>
        {isEditing ? "Update Task" : "Add Task"}
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            {task.text}
            <button
              onClick={() => startEditTask(task)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
