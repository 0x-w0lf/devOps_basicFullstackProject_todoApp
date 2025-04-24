import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5050/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async () => {
    if (!newTask.trim()) return;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTask }),
    });

    const task = await res.json();
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const toggleCompleted = async (id) => {
    const res = await fetch(`${API_URL}/toggle/${id}`, { method: "PUT" });
    const updated = await res.json();

    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t))
    );
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>📝 ToDo App</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={createTask}>Agregar</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span
              onClick={() => toggleCompleted(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.name}
            </span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

