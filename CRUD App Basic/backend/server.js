const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test12', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.listen(5000, () => console.log('Server started on port 5000'));


//localhost:5000/items