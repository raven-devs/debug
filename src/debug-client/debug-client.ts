/**
 * Toggle Auto Attach: With Flag
 *
 * in `tsconfig.json` set compilerOptions.target = "ES6", compilerOptions.lib = ["ES2022", "DOM"],
 * remove compilerOptions.module, restart IDE
 * and
 * npm run build
 * and
 * go to Run and Debug panel, select `client-file` config and start the debugger.
 */

const message = 'Hello World!';
console.log('Hi there!');
document.body.innerHTML = message;
