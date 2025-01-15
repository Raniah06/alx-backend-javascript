const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
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

      console.log(`Number of students: ${students.length}`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
