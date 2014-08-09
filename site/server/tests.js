testAdd = function(data){
	Tests.insert({successful: data.success, createdate: new Date(),
	environment: Environments.findOne({name:data.server})._id, runtime: data.runtime,
	testname: data.testname, product: Products.findOne({name: data.product})._id});
	console.log('Test posted, count is:' + Tests.find().count());
};