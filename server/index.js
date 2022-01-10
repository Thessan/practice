import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors';
import fs from 'fs';

const reviews = './server/data.json';

const PORT = 8080;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (request, response) => {
  response.json("Hello from server!");
});



// GET all reviews
app.get('/reviews', (request, response) => {
  fs.readFile(reviews, 'utf8', (err, data) => {
    if (err) {
      response.status(400).json({ message: 'Sorry, could not fetch reviews'});
    } else if (data) {
      response.status(201).json(JSON.parse(data))
    }
  })
});

// POST a new review
// app.post('/reviews', async (request, response) => {
//   try {
//     response.status(201).json()
//   } 
//     catch (err) {
//     response.status(400).json({ message: 'Sorry, could not save review to the database'})
//   }
// });
 

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});