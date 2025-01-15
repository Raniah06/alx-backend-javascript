import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.trim().split('\n').slice(1);
    const students = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    resolve(students);
  });
});

export default readDatabase;
