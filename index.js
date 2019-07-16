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

//dir path
const path = require("path");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);

//util path
const path = require("path");
const util = require("util");

util.log(path.basename(__filename));
util.log("^ The name of the current file");

//check memory size with v8
const path = require("path");
const util = require("util");
const v8 = require("v8");

util.log(v8.getHeapStatistics());

//both are same
const path = require("path");
const { log } = require("util");
const { getHeapStatistics} = require("v8");

log(getHeapStatistics());

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = [
  "What is your name? ",
  "What do you live? ",
  "What are you going to do with node js? "
]

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answer.push(answer);
    if(answers.length < questions.length){
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  }
  rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});

const name = require("./myModule");

console.log(name);

//use counter
const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());
*/
//both are working
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());