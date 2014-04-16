var lib = process.env.BEARCAT_COV ? 'lib-cov' : 'lib';

var ApplicationContext = require('../../' + lib + '/context/applicationContext');
var should = require('should');

describe('applicationContext', function() {
	describe('simple', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car');

			done();
		});
	});

	describe('simple_inject', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_inject/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car wheel');

			done();
		});
	});

	describe('simple_meta', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_meta/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car');

			done();
		});
	});

	describe('simple_meta_merge', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_meta_merge/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car' + 100);

			done();
		});
	});

	describe('simple_inject_meta', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_inject_meta/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car wheel');

			done();
		});
	});

	describe('simple_args_value', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_args_value/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car 100');

			done();
		});
	});

	describe('simple_args_type', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_args_type/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car', 200);
			var r = car.run();
			r.should.exist;
			r.should.eql('car 200');

			done();
		});
	});

	describe('simple_prototype', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_prototype/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car 1');

			var another_car = applicationContext.getBean('car');
			r = car.run();
			r.should.exist;
			r.should.eql('car 2');

			done();
		});
	});

	describe('simple_init_method', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_init_method/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car 1');

			done();
		});
	});

	describe('simple_destroy_method', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_destroy_method/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.refresh();

			var car = applicationContext.getBean('car');
			var r = car.run();
			r.should.exist;
			r.should.eql('car');

			applicationContext.on('destroyed', function() {
				done();
			});

			applicationContext.destroy();

			var isActive = applicationContext.isActive();
			isActive.should.be.false;
		});
	});

	describe('simple_async_init', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_async_init/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.on('finishRefresh', function() {
				var car = applicationContext.getBean('car');
				var r = car.run();
				r.should.exist;
				r.should.eql('car 1');

				done();
			})
			applicationContext.refresh();
		});
	});

	describe('simple_factory_bean', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_factory_bean/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.on('finishRefresh', function() {
				var car = applicationContext.getBean('car');
				var r = car.run();
				r.should.exist;
				r.should.eql('car 0');

				done();
			})
			applicationContext.refresh();
		});
	});

	describe('simple_module_inject', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_module_inject/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.on('finishRefresh', function() {
				var car = applicationContext.getBean('car');
				var r = car.run();
				r.should.exist;
				r.should.eql('car wheel');

				done();
			})
			applicationContext.refresh();
		});
	});

	describe('simple_parent_bean', function() {
		it('should get bean right', function(done) {
			var simplepath = require.resolve('../../examples/simple_parent_bean/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);
			applicationContext.on('finishRefresh', function() {
				var bus = applicationContext.getBean('bus');
				var r = bus.run();
				r.should.exist;
				r.should.eql('bus 100');

				done();
			})
			applicationContext.refresh();
		});
	});

	describe('getBeanByMeta', function() {
		it('should getBeanByMeta right', function(done) {
			var simplepath = require.resolve('../../examples/simple/context.json');
			var paths = [simplepath];

			var applicationContext = new ApplicationContext(paths);

			applicationContext.refresh();

			var CarM = function() {

			}

			CarM.prototype.run = function(num) {
				console.log('mcar' + num);
				return 'mcar' + num;
			}

			CarM.prototype.dyInit = function() {

			}

			CarM.prototype.a = 1;
			var mcar = applicationContext.getBeanByMeta({
				id: "mcar",
				func: CarM
			});

			var r = mcar.run(100);
			r.should.eql('mcar' + 100);

			// mcar.dyInit();

			var acar = applicationContext.getBeanByMeta({
				id: "acar"
			});

			done();
		});
	});
});