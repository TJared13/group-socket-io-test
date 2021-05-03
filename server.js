require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {SERVER_PORT, MONGODB_URL} = process.env;

const app = express();
app.use(express.json());
app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http);

//socket.io
io.on('connection', socket => {
    console.log(socket.id + ' connected.')

    socket.on('disconnect', () => {
        console.log(socket.id + ' disconnected.')
    })
})


//Routes
app.use('/api', require('./routes/productRouter'));
app.use('/api', require('./routes/commentRouter'));


//Connection to mongodb
const URI = MONGODB_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to mongodb')
});


//Listen server
const PORT = SERVER_PORT || 5000;

http.listen(PORT, () => {
    console.log('Server is running on port', SERVER_PORT)
});