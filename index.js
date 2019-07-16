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

//Standard Input in Node
const answers = [];
process.stdin.on("data", data => {
  answers.push(data.toString().trim());
  if(answers.length < question.length){
    ask(answers.length);
  } else {
    process.exit();
  }
})

const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);


const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);  
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);  
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
*/


//add Progress with setInterval
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);