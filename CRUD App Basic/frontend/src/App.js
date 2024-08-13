import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
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

  const createItem = async () => {
    const response = await axios.post('http://localhost:5000/items', { name });
    setItems([...items, response.data]);
    // console.log(response.data)
    setName('');
  };

  const updateItem = async (id) => {
    const response = await axios.patch(`http://localhost:5000/items/${id}`, { name });
    setItems(items.map(item => (item._id === id ? response.data : item)));
    setName('');
    setEditingItem(null);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateItem(editingItem._id);
    } else {
      createItem();
    }
  };

  return (
    <div>
      <h1>Simple CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{editingItem ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => { setName(item.name); setEditingItem(item); }}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
