const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];

  if (!dbPath) {
    res.status(400).send('Database file is missing');
    return;
  }

  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Failed to read the database file');
      return;
    }

    const students = data.split('\n').filter(line => line.trim() !== '').map(line => line.split(','));
    const studentCount = students.length;

    const csStudents = students.filter(student => student[1] === 'CS').map(student => student[0]);
    const sweStudents = students.filter(student => student[1] === 'SWE').map(student => student[0]);

    res.status(200).send(`This is the list of our students\nNumber of students: ${studentCount}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  });
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
