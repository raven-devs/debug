/**
 * in `tsconfig.json` set compilerOptions.target = "ES6", compilerOptions.lib = ["ES2022", "DOM"]
 * and remove compilerOptions.module, restart IDE
 *
 * npm run build
 *
 * go to Run and Debug panel, select `client-file` config and start the debugger.
 */

const message = 'Hello World!';
console.log('Hi there!');
document.body.innerHTML = message;
