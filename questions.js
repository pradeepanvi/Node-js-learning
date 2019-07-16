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
}

ask();