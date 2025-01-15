import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('./database.csv');
      res.status(200).send(
        `This is the list of our students\n` +
        Object.keys(studentsByField).sort().map((field) => {
          return `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`;
        }).join('\n')
      );
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase('./database.csv');
      if (studentsByField[major]) {
        res.status(200).send(`List: ${studentsByField[major].join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = StudentsController;
