require('dotenv').load();
const express = require('express');
const s3imageRouter = require('./routes/s3imageRouter');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api', s3imageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});