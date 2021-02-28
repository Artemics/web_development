var fs = require("fs");

// fs.readFile is an async function.
// "any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter."
fs.readFile('data/input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");


