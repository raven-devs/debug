import express from 'express';

/**
 * Toggle Auto Attach: With Flag
 *
 * make sure express server is not running
 * and
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
