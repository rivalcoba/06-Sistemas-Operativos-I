export function resourcesStateExample() {
  // Obtener información del proceso actual
  console.log(`Process ID: ${process.pid}`);
  console.log(`Memory usage:`, process.memoryUsage());
  console.log(`CPU time:`, process.cpuUsage());

  // Monitorear eventos del proceso
  process.on("exit", (code) => {
    console.log(`Process exiting with code: ${code}`);
  });

  process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err);
    process.exit(1);
  });
}
