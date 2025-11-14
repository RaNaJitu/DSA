/*
!HOW NODE JS WORK 

NODE PROCESS 
    -Init Projec
    -Top Level Code
    -Require Module
    -Event Callbacks Register

*SATRT EVENT LOOP 

!HOW EVENT LOOP WORK LOOP PHASE
    -Expired Timer Callbacks
    -I/O Polling - FS
    -setImmediate callbaks
    -closs callbacks
*/

const fs  = require('fs')

// Ensure libuv threadpool size is set before loading crypto so pbkdf2 uses it
process.env.UV_THREADPOOL_SIZE = '2' // default is 4; increase if you need more parallel crypto threads

const {
  pbkdf2,
} = require('node:crypto');

const start = Date.now()

console.log('START') // Top Level Code
setTimeout(() =>{
    console.log('set Time out f1 Running')
}, 0) // Expired Time Callbacks

setImmediate(() =>{
    console.log('set Immediate f1 Running')
}) // setImmediate Callbacks

// 
fs.readFile('test.js', 'utf-8',()=>{
    console.log('file is reading')

    setTimeout(()=> console.log('set time out f2 Running'), 0)
    setTimeout(()=> console.log('set time out f3 Running'), 5000)
    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        console.log(` ${start - Date.now()} password 1 is Done`);  // '3745e48...08d59ae'
    });

    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        console.log(`${start - Date.now()} password 2 is Done`);  // '3745e48...08d59ae'
    });

    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        console.log(`${start - Date.now()} password 3 is Done`);  // '3745e48...08d59ae'
    });

    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        console.log(` ${start - Date.now()} password 4 is Done `);  // '3745e48...08d59ae'
    });

    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        console.log(`${start - Date.now()} password 5 is Done`);  // '3745e48...08d59ae'
    });
}) // I/O Polling -FS
console.log('END')

