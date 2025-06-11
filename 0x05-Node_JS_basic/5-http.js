const http = require('http');
const { countStudents } = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const DB_FILE = './database.csv';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'content-type': 'text/plain' });

    countStudents(DB_FILE)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cannot load the database');
  }
});

app.listen(port, hostname, () => {

});

module.exports = app;
