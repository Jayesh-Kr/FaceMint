import express from 'express';
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/mintNFT', (req,res) => {
    
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

