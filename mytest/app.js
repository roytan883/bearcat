var bearcat = require('../lib/bearcat');
// var example_dir = 'simple'; // change this to run your examples
var example_dir = 'complex_function_annotation';

var contextPath = require.resolve('./context.json'); // to run simple example

bearcat.createApp([contextPath]);
bearcat.start(function() {
	// var car = bearcat.getBean('a:a1'); // get bean
  // var r = car.fn1(); // call the method
  
  let a1 = bearcat.getBean('a:a1');
  a1.fn1()
});