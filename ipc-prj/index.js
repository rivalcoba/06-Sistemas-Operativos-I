import { fork } from "child_process";

export function ipcExample() {
  const child = fork("./ipc-prj/child.js");

  // Enviar mensaje al proceso hijo
  child.send({ hello: "world" });

  // Recibir mensajes del proceso hijo
  child.on("message", (message) => {
    console.log("Message from child:", message);
    // Finalizar el proceso hijo
    child.kill();
  });
}
