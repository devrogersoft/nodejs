const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Path to the JSON file
const dataPath = path.join(__dirname, 'students.json');

// Helper function to read data from the JSON file
function readData() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}

// Helper function to write data to the JSON file
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}

// GET all students
app.get('/students', (req, res) => {
  const students = readData();
  res.json(students);
});

// GET a single student by ID
app.get('/students/:id', (req, res) => {
  const students = readData();
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// POST a new student
app.post('/students', (req, res) => {
  const students = readData();
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course,
  };
  students.push(newStudent);
  writeData(students);
  res.status(201).json(newStudent);
});

// PUT (Update) a student by ID
app.put('/students/:id', (req, res) => {
  const students = readData();
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex !== -1) {
    students[studentIndex] = { id: parseInt(req.params.id), ...req.body };
    writeData(students);
    res.json(students[studentIndex]);
  } else {
    res.status(404).send('Student not found');
  }
});

// DELETE a student by ID
app.delete('/students/:id', (req, res) => {
  let students = readData();
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex !== -1) {
    students = students.filter(s => s.id !== parseInt(req.params.id));
    writeData(students);
    res.send('Student deleted');
  } else {
    res.status(404).send('Student not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
