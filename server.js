const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Массив для хранения сообщений
let messages = [];

// Получение сообщений
app.get('/messages', (req, res) => {
    res.json({ messages });
});

// Отправка нового сообщения
app.post('/messages', (req, res) => {
    const { user, message } = req.body;
    if (user && message) {
        messages.push({ user, message });
        res.status(201).json({ user, message });
    } else {
        res.status(400).json({ error: 'Bad Request' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
