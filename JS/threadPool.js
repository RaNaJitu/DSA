const fs = require("fs");
const { pbkdf2 } = require("crypto");
// process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();

//1st step to run
// setTimeout(() => console.log('Set Timeout is running f1!'), 0);

// setImmediate(() => console.log('Set Immediate is running f1!'));

// console.log('Top-level code is running!');

fs.readFile("test.txt", "utf-8", () => {
    console.log("IO Polling Finished  !");

    // setTimeout(() => console.log("Set Timeout is running f2!"), 0);
    // setTimeout(() => console.log("Set Timeout is running f3!"), 5000);

    // setImmediate(() => console.log("Set Immediate is running f2!"));

    //   //!cpu intensive tasks
    pbkdf2("password1", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 1 Done", Date.now() - start); // '3745e48...08d59ae'
    });

    pbkdf2("password2", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 2 Done", Date.now() - start); // '3745e48...08d59ae'
    });

    pbkdf2("password3", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 3 Done", Date.now() - start); // '3745e48...08d59ae'
    });

    pbkdf2("password4", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 4 Done", Date.now() - start); // '3745e48...08d59ae'
    });

    pbkdf2("password5", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 5 Done", Date.now() - start); // '3745e48...08d59ae'
    });

    pbkdf2("password6", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 6 Done", Date.now() - start); // '3745e48...08d59ae'
    });
    pbkdf2("password7", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 7 Done", Date.now() - start); // '3745e48...08d59ae'
    });
    pbkdf2("password8", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
          console.log("Password 8 Done", Date.now() - start); // '3745e48...08d59ae'
    });
    pbkdf2("password9", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
        console.log("Password 9 Done", Date.now() - start); // '3745e48...08d59ae'
    });
});

// pbkdf2('secret', 'salt', 100000, 1024, 'sha512', (err, derivedKey) => {
//   console.log('Password outside 1 Done', Date.now() - start);  // '3745e48...08d59ae'
//   // if (err) throw err;
//   // console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae
// });

console.log("Top-level code is running!");

// const fs = require('node:fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });
