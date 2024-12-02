/*
Investigar para que sirve:
- spawn:
- exec:
- fork: 
*/
import { spawn, exec, fork } from 'child_process'


export function childProcesses(){
    console.log("=== 👦 Creacion de Child Processes 👦 ===");
    console.log("📢 Creando un child process");
    const childProcess = spawn('ls',['-l']);

    // Manejando eventos en mi child process
    childProcess.stdout.on('data', (data) => {
        console.log(`✍️ Output: ${data}`)
    } );
    
    // Manejando errores
    childProcess.stderr.on('data', (data) => {
        console.log(`🚨 Output: ${data}`)
    });

    // Evento close
    childProcess.on('close', (code) => {
        console.log(`➡️ Proceso terminado con el código: ${code}`)
    });
}