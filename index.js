const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Greetings, ${name}!`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
