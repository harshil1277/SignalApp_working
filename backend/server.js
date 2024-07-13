const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');

const app = express();


const PORT = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('API is running.... Properly');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});    

app.listen(PORT, console.log(`Server running on port ${PORT}`));
