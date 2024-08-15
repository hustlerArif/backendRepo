// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/test12', { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(cors());
// app.use(express.json());

// const itemsRouter = require('./routes/items');
// app.use('/items', itemsRouter);

// app.listen(5000, () => console.log('Server started on port 5000'));


// //localhost:5000/items  
// //localhost:5000/items/id

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test12', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('Item', itemSchema);

// Routes

// Get all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Create a new item
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

// Update an item
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.json({ message: 'Item deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
