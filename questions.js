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

//After all question's answers
process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`
  Thank you for your answers.
  Go ${activity} ${name} you can write ${lang} code later !!!
  `)
})