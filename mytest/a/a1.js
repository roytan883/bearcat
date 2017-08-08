var G = require('../../lib/bearcat').G;

exp = function(){
  console.log("a1:[Constructor]");
};
exp.prototype.fn1 = function(){
  console.log("a1:[fn1]");
  G('a:a2').fn1()
};
exp.prototype.fn2 = function(){
  console.log("a1:[fn2]");
};
module.exports = exp;