const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((students) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(students).sort((a, b) => a.localeCompare(b));

        fields.forEach((field) => {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        res.status(200).send(output.trim());
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((students) => {
        if (!students[major]) {
          res.status(200).send('List:');
          return;
        }
        res.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => res.status(500).send(err.message));
  }
}

module.exports = StudentsController;
