process.on('message', (message)=>{
    // Imprimimos mensaje recibido
    console.log(`🎅 💌  ➡️  👦: ${message.message}`)
    // Respondemos mensaje al padre
    process.send({message: '🎆 And a happy new year 🎆'});
});