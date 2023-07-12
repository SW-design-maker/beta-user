const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRouter);

const start = async () => {
  await mongoose
    .connect('mongodb+srv://4gat4sss4:4gat4sss4@cluster0.d42bizo.mongodb.net')
    .then(() => console.log('db ok'))
    .catch(() => console.log('db bad'));
  app.listen(8080, () => console.log('started'));
};

start();
