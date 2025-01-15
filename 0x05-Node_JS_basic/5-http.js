const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX Student!\n');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(({ numStudents, fields }) => {
        let response = 'This is the list of our students\n';
        response += `Number of students: ${numStudents}\n`;
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message + '\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
