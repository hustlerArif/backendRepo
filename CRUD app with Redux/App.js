// src/App.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItems,
  addItem,
  deleteItem,
  editItem,
  updateItem,
} from './redux/actions/itemActions';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemState.items);
  const editingItem = useSelector((state) => state.itemState.editingItem);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddItem = () => {
    if (name.trim()) {
      dispatch(addItem(name));
      setName('');
    }
  };

  const handleUpdateItem = () => {
    if (editingItem && name.trim()) {
      dispatch(updateItem(editingItem._id, name));
      setName('');
    }
  };

  const handleEditItem = (item) => {
    dispatch(editItem(item));
    setName(item.name);
  };

  return (
    <div className="App">
      <h1>CRUD App with Redux</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      {editingItem ? (
        <button onClick={handleUpdateItem}>Update Item</button>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleEditItem(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
