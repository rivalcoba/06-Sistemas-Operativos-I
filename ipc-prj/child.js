process.on('message', (message) => {
  console.log('Message from parent:', message);
  // Enviar respuesta al padre
  process.send({ received: true });
});