const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning-Spree API running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('Learning-Spree API running on port', port);
});