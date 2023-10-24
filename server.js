const express = require('express');
const fetch = import('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/data', async(req, res)=>{
    try{
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
    }catch(error){
        res.status(500).json({error: 'Ошибка при получении данных.'})
    }
});

app.listen(port, ()=>{
    console.log('Сервер запущен по адресу https://localhost.${port}');
});