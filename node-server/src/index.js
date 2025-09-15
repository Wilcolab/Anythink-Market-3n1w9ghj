const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (typeof text !== 'string' || !text.trim()) {
        return res.status(400).json({ message: 'Task text is required' });
    }
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});