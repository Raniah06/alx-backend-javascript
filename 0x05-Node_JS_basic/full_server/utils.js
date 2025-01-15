import fs from 'fs';

export function readDatabase() {
  const filePath = process.argv[2];  // Dynamically use the passed filename
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
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
