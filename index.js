/*
console.log("Hello world");
let hello = "Hello world from Node JS";
console.log(hello);

console.log(__dirname);
console.log(__filename);

const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);

//Standard Output in Node
process.stdout.write("Hello ");
process.stdout.write("world \n\n\n");
*/
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preffered programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();