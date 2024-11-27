import { childProcesses } from './projects/child-processes.js'
import { ipc } from './projects/ipc.js'
import { processState} from './projects/process-state.js'

console.log("🌟 PROGRAMA DE PROCESOS 🌟");

let option = process.argv[2];

switch (option) {
    case "1":
        childProcesses();
        break;
    case "2":
        ipc();
        break;
    case "3":
        processState();
        break;
    default:
        console.log("🥲 Opcion invalida.");
        break;
}