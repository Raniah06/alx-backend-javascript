import { readDatabase } from '../utils';

class StudentsController {
  // Get all students, categorized by field
  static getAllStudents(req, res) {
    readDatabase(req.query.database)
      .then((data) => {
        res.status(200).send('This is the list of our students');
        
        // Loop through each field and display students' information
        Object.keys(data).forEach((field) => {
          const studentsInField = data[field];
          const studentNames = studentsInField.map(({ firstname }) => firstname);
          res.write(`Number of students in ${field}: ${studentsInField.length}. List: ${studentNames.join(', ')}\n`);
        });
        res.end();
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }

  // Get students by major (CS or SWE)
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    // Ensure valid major parameter
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(req.query.database)
      .then((data) => {
        const studentsInMajor = data[major] || [];
        const studentNames = studentsInMajor.map(({ firstname }) => firstname);
        res.status(200).send(`List: ${studentNames.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
