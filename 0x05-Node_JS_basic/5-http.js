const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const dbPath = process.argv[2];

    if (!dbPath) {
      res.statusCode = 400;
      res.end('Database file is missing');
      return;
    }

    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Failed to read the database file');
        return;
      }

      const students = data.split('\n').filter(line => line.trim() !== '').map(line => line.split(','));
      const studentCount = students.length;

      const csStudents = students.filter(student => student[1] === 'CS').map(student => student[0]);
      const sweStudents = students.filter(student => student[1] === 'SWE').map(student => student[0]);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${studentCount}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
