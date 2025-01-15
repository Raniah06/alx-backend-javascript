const express = require('express');
const fs = require('fs');
const app = express();

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    
    if (students.length === 0) {
      reject(new Error('No students found'));
      return;
    }

    const fields = {};
    for (const student of students) {
      const values = student.split(',');
      if (values.length >= 4) {
        const field = values[3];
        const firstName = values[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }

    resolve({ numStudents: students.length, fields });
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(({ numStudents, fields }) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${numStudents}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;
