/**
 * Toggle Auto Attach: With Flag
 *
 * NODE_ENV=development node --inspect src/debug-nodejs/debug-nodejs-js
 * or
 * go to Run and Debug panel, select `nodejs-js` config and start the debugger.
 */

function doSmth() {
  const { NODE_ENV, MONGODDB_USER, MONGODB_PASSWORD } = process.env;
  console.log({ NODE_ENV, MONGODDB_USER, MONGODB_PASSWORD });

  const a = 2;
  const b = 3;
  const c = a + b;
  console.log('c', c);

  for (let i = 0; i < 10; i++) {
    console.log('i', i);
  }
}

doSmth();
