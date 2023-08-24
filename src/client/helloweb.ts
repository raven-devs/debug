/**
 * in `tsconfig.json` set compilerOptions.target = "ES6", compilerOptions.lib = ["ES2022", "DOM"]
 * and remove compilerOptions.module
 *
 * go to Run and Debug panel, select `Chrome` config and start the debugger.
 */

const message = 'Hello Web';
console.log('Hi there!');
document.body.innerHTML = message;
