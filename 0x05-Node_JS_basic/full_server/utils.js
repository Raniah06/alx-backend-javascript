import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject('Error reading the database file');
      }

      const students = data.trim().split('\n').map((line) => line.split(','));
      const result = {
        CS: [],
        SWE: [],
      };

      students.forEach(([firstname, field]) => {
        if (field === 'CS' || field === 'SWE') {
          result[field].push({ firstname });
        }
      });

      resolve(result);
    });
  });
}
