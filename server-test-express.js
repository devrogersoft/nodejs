const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(customJsonParser); // Middleware to parse JSON request bodies

app.post('/data', authenticate, (req, res) => {
    res.send(`Received data: ${JSON.stringify(req.body)}`);
});


app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});


function customJsonParser(req, res, next) {
    let rawData = '';
      req.on('data', (chunk) => {
      rawData += chunk;
    });
  
    req.on('end', () => {
      try {
        req.body = JSON.parse(rawData); 
        next(); 
      } catch (err) {
        res.status(400).send('Invalid JSON, Please send a valid JSON');
      }
    });
  
    req.on('error', (err) => {
      res.status(500).send('Server Error');
    });
  }

  function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    if (token === '123456789') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  