var environmentList;

Meteor.startup(function () {
  // code to run on server at startup
  console.log("app started");
  //clear the old messages
  Messages.remove({});
  Tests.remove();
  Environments.remove();
});
  
  
Meteor.methods({
	saveHealthCheckResult: function (data) {
      console.log(data);
      if(!data.success)
      {
        throw new Meteor.Error("400", "The successfull element is required.");
      }
    
      Meteor.environment.post(data.server);

      //do a check to see if the product exists in our database.
      if(Products.find({name: data.product}).count()===0)
      {
        Products.insert({name: data.product});
        console.log("failed to find product " + data.product + "so it will be added");
      }

      //console.log(Environments.findOne({name:data.server})._id);
      Tests.insert({successfull: data.success, createdate: new Date(), environment: Environments.findOne({name:data.server})._id, runtime: data.runtime, testname: data.testname, product: Products.findOne({name: data.product})._id});
      console.log('Environments posted, count is:' + Environments.find().count());
      return {"status":"ok"};
      
		}


});

