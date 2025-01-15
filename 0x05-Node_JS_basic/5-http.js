const http = require('http');
const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line);
      if (lines.length === 0) {
        reject(new Error('Database is empty'));
        return;
      }

      const fields = lines[0].split(','); // Header line
      const students = lines.slice(1).map(line => line.split(','));
      const groups = {};

      students.forEach((student) => {
        const field = student[fields.indexOf('field')].trim();
        if (!groups[field]) groups[field] = [];
        groups[field].push(student[fields.indexOf('firstname')].trim());
      });

      let result = `Number of students: ${students.length}`;
      for (const [field, names] of Object.entries(groups)) {
        result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      resolve(result);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];
    if (!dbFile) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database file not provided');
      return;
    }

    countStudents(dbFile)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
