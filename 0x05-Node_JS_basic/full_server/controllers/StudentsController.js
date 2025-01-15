import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase();
      let responseText = 'This is the list of our students\n';
      Object.keys(database).forEach((field) => {
        const students = database[field].map((student) => student.firstname).join(', ');
        responseText += `Number of students in ${field}: ${database[field].length}. List: ${students}\n`;
      });
      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const database = await readDatabase();
      const students = database[major].map((student) => student.firstname).join(', ');
      res.status(200).send(`List: ${students}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
