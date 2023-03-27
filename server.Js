const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('index.html', (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write('File not found!');
        } else {
          res.write(data);
        }
        res.end();
      });
    }
    if (req.url === '/') {
      // Code pour renvoyer le contenu du fichier HTML
    } else if (req.url === '/style.css') {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('style.css', (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write('File not found!');
        } else {
          res.write(data);
        }
        res.end();
      });
    } else if (req.url === '/app.js') {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('app.js', (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write('File not found!');
        } else {
          res.write(data);
        }
        res.end();
      });
    } else {
      res.writeHead(404);
      res.write('File not found!');
      res.end();
    }
});

  
server.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
  