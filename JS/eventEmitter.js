/**
//*  What EventEmitter Is

EventEmitter is a synchronous publish–subscribe mechanism in Node.js.

//*Key points:
  
Listeners are registered using on

Events are triggered using emit

When an event is emitted, all listeners run immediately

Listeners execute in the order they were registered

EventEmitter does not use the event loop unless you add async code

//!Execution Stages (Very Important)

You can think of EventEmitter in four clear stages:
Stage 1: Initialization
//? const eventEmitter = new EventEmitter();
//? A new EventEmitter instance is created
//? Internally, Node creates an empty map:
Stage 2: Listener Registration
Stage 3: Synchronous Code Execution
Stage 4: Additional Listener Registration
Stage 5: Event Emission (Critical Stage)

 */

import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (data) => {
  console.log(data, '-FIRST');
});

console.log('Statement A');

eventEmitter.on('myEvent', (data) => {
  console.log(data, '-SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');
console.log('Statement B');

//Statement A //Statement B //FIRST //SECOND //Emitted Statement