var environmentList;

Meteor.startup(function () {
  // code to run on server at startup
  console.log("app started");
  //clear the old messages
  Products.remove({});
  Tests.remove({});
  Environments.remove({});
  console.log("existing data removed");
});
  
  
Meteor.methods({
	saveHealthCheckResult: function (data) {
      console.log(data);
      if(!data.success)
      {
        throw new Meteor.Error("400", "The success element is required.");
      }
    
      environmentAdd(data.server);

      //do a check to see if the product exists in our database.
      productAdd(data.product);

      //console.log(Environments.findOne({name:data.server})._id);
      testAdd(data);
      return {"status":"ok"};
      
		}


});

