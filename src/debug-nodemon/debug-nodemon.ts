import express from 'express';

/**
 * make sure you are NOT runnnig an express server
 * and
 * NODE_ENV=development npx nodemon --watch ./src --ext js,ts,json,graphql --exec 'node --inspect-brk=0.0.0.0:9229 --require=ts-node/register src/debug-nodemon/debug-nodemon.ts'
 * and
 * go to Run and Debug panel, select `nodejs-attach` config and start the debugger (see output in the Debug Console)
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
