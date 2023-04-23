import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: 'local.env'
});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

