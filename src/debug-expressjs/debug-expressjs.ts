import express from 'express';

/**
 * make sure you are NOT runnnig an express server on port 3000
 * go to Run and Debug panel, select `expressjs-ts` config and start the debugger (see output in the Debug Console)
 */

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
