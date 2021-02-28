var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log('connection sucessful.');
  eventEmitter.emit('data_received');
}

// connection is a reserved name for a built-in event.
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
  console.log('data received successfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");

