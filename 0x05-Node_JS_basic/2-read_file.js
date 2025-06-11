const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines[0].split(',');
    const firstNameIndex = header.indexOf('firstname');
    const fieldIndex = header.indexOf('field');

    const fieldslist = {};

    for (let i = 1; i < lines.length; i += 1) {
      const parts = lines[i].split(',');

      const name = parts[firstNameIndex];
      const field = parts[fieldIndex];

      if (!fieldslist[field]) {
        fieldslist[field] = [];
      }

      fieldslist[field].push(name);
    }

    const total = Object.values(fieldslist).reduce((accu, curr) => accu + curr.length, 0);
    console.log(`Number of students: ${total}`);

    for (const [field, names] of Object.entries(fieldslist)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
