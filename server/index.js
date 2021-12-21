import bodyParser from 'body-parser'
import express from 'express'

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())

 app.get('/', (request, response) => {
    response.json("Hello from server!");
  });



// GET all reviews
 app.get('/reviews', (request, response) => {
  try {response.status(201).json()
}
catch (err) {
  response.status(400).json({ message: 'Sorry, could not fetch reviews'})
}
}); 



  //POST a new review
  app.post('/reviews', async (request, response) => {
    try {
      response.status(201).json()
    } 
      catch (err) {
      response.status(400).json({ message: 'Sorry, could not save review to the database'})
    }
  });
 

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});