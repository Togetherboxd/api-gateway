const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/authentication', proxy('http://localhost:3001'));

app.use('/friends', proxy('http://localhost:3002'));

app.use('/notifications', proxy('http://localhost:3004'));

app.use('/posts', proxy('http://localhost:3009'));

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from API" })
});

const server = app.listen(3003, () => {
    console.log('API gateway is listening to port 3003')
});

module.exports = { app, server };