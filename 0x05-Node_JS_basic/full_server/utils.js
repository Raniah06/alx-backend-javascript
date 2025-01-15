const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = {};
      const lines = data.split('\n').filter((line) => line);
      lines.shift(); // Remove the header line

      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (students[field]) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }
      }
      resolve(students);
    });
  });
}

module.exports = readDatabase;
