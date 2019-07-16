//normal name calling
const name = require("./myModule");

console.log(name);

//use counter
const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

//both are working
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());
