//normal exports
module.exports = "Alex";

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
  inc,
  dec,
  getCount
}