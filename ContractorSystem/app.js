const express = require('express');
const app = express();

const contractorRouter = require('./routes/contractor');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/contractors', contractorRouter);

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`)
})