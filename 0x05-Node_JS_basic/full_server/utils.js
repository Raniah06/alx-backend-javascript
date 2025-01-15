import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    const studentsByField = {};

    lines.forEach((line) => {
      const [firstname, field] = line.split(',');
      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    return studentsByField;
  } catch (error) {
    return Promise.reject('Cannot load the database');
  }
};
