//setTimeout
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);

//setInterval
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

//add clearInterval
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
