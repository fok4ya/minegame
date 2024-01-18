const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.route('/saveWorld')
  .get((req, res) => {
    // Handle GET requests if needed
  })
  .post((req, res) => {
    const jsonData = req.body;
    fs.writeFile('./world.json', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error('Error saving the world:', err);
        res.status(500).send('Error saving the world');
      } else {
        console.log('World saved successfully');
        res.send('World saved successfully');
      }
    });
  });

app.post('/saveWorld', (req, res) => {
  const jsonData = req.body;
  fs.writeFile('./world.json', JSON.stringify(jsonData), (err) => {
    if (err) {
      console.error('Error saving the world:', err);
      res.status(500).send('Error saving the world');
    } else {
      console.log('World saved successfully');
      res.send('World saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
