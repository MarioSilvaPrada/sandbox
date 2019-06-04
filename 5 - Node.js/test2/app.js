// const logger = require('./module');

// logger('Node JS');



// // Operation System Module 
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`);

// Event Module

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg) {
    console.log('Listenner call', arg)
})

// Raise an event
emitter.emit('messageLogged', {id: 1224, url: 'http://'})

