const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Ossai Cherish Nneka <https://github.com/Cherish13>
 */

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const header = lines.shift().split(',');
      const students = lines.map(line => line.split(','));

      const studentsCount = students.length;
      console.log(`Number of students: ${studentsCount}`);

      const fields = {};
      students.forEach(student => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      Object.keys(fields).forEach(field => {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      });

      return 'Done!';
    });
}

module.exports = countStudents;