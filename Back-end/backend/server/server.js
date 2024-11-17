require('dotenv').config();
const express = require('express');
const app = express();
const pool = require("../db");
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
