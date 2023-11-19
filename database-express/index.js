const express = require('express');
const app = express();

const PORT = 6001;
const HOST = 'localhost';

const courseRouter = require('./routes/courses');


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/courses', courseRouter);


app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});