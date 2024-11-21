// Importamos las funciones necesarias del módulo child_process
// spawn: Lanza un comando como proceso hijo y permite streaming de datos
// exec: Ejecuta un comando en shell y bufferea la salida
// fork: Crea un nuevo proceso Node.js y establece un canal IPC
import { spawn, exec, fork } from "child_process";

export function childProcessExample() {
  // Crear un proceso hijo usando spawn
  // spawn es útil para comandos largos con mucha salida de datos
  // 'ls -l' listará los archivos del directorio actual
  const childProcess = spawn("ls", ["-l"]);

  // Manejamos la salida estándar (stdout) del proceso hijo
  // Los datos se reciben como streams de bytes
  childProcess.stdout.on("data", (data) => {
    console.log(`Output: ${data}`);
  });

  // Manejamos los errores (stderr) del proceso hijo
  // Importante para detectar y registrar problemas
  childProcess.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
  });

  // Evento 'close' se dispara cuando el proceso hijo termina
  // El código de salida indica si el proceso terminó exitosamente (0) o con error
  childProcess.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
}
