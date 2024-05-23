
// value is:  { add: [Function (anonymous)] }
// exports.add = (a,b) => a + b

// value is:  [Function: add]
// const add = (a, b) => a + b
// module.exports = add

// value is:  { add: [Function: add], sub: [Function: sub] }
// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// module.exports = {
//     add,
//     sub
// }

// value is:  [Function: sub]
const add = (a, b) => a + b
const sub = (a, b) => a - b
module.exports = add;
module.exports = sub;