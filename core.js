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
