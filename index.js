import { childProcessExample } from './01-child-process.js';
import { resourcesStateExample } from './02-resources-state.js';
import { ipcExample } from './ipc-prj/index.js';

// 2. Obtener solo los argumentos personalizados (excluyendo node y file path)
const args = process.argv.slice(2);

let key = args[0];

console.log(key);

switch (key) {
  case "1":
    console.log("option one");
    childProcessExample();
    break;
  case "2":
    console.log("option two");
    ipcExample();
    break;
  case "3":
    console.log("option three");
    resourcesStateExample();
    break;

  default:
    console.log("default option");
    break;
}
