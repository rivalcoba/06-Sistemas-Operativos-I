import { fork } from 'child_process'

export function ipc(){
    console.log("=== 🗨️  Comunicación entre Procesos 🗨️  ===");

    // 1. Creando un subproceso de Node
    const child = fork('./projects/child.js');

    // 2. Registrando eventos
    child.on('message', (message)=>{
        console.log(`👦 💌  ➡️  🎅: ${message.message}`);
    });

    // Enviando un mensaje al proceso hijo
    child.send({message: '❄️ Merry Christmas ❄️'});
}