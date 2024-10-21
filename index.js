const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
