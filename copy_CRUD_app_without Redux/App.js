// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5000/items');
    setItems(response.data);
  };

  const addItem = async () => {
    if (name.trim()) {
      const response = await axios.post('http://localhost:5000/items', { name });
      setItems([...items, response.data]);
      setName('');
    }
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter((item) => item._id !== id));
  };

  const editItem = (item) => {
    setEditingItem(item);
    setName(item.name);
  };

  const updateItem = async () => {
    if (editingItem && name.trim()) {
      const response = await axios.put(`http://localhost:5000/items/${editingItem._id}`, { name });
      setItems(items.map((item) => (item._id === editingItem._id ? response.data : item)));
      setName('');
      setEditingItem(null);
    }
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      {editingItem ? (
        <button onClick={updateItem}>Update Item</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
