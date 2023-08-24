import express from 'express';

const PORT = 3000;
const app = express();

app.get('/hello', (req, res) => {
  const message = 'Hello World!';
  const code = 200;
  res.status(code).send(message);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
