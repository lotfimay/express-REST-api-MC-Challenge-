require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.log('ERRORR'))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json());

const superHerosRouter = require('./routes/superheros');

app.use('/superheros', superHerosRouter);

app.listen(3000, () => {
    console.log('listening on port 3000...');
})