const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) throw new Error('Cannot load the database');

    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;