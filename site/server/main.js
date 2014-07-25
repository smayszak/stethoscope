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
		createHealthCheckResult: function (data) {
      console.log(data);
      if(!data.success)
      {
        throw new Meteor.Error("400", "The successfull element is required.");
      }
    
      if(Environments.find({name: data.server}).count()===0)
      {
        Environments.insert({name:data.server});
        console.log("failed to find: " + data.server);
      }

      //console.log(Environments.findOne({name:data.server})._id);
      Tests.insert({successfull: data.success, createdate: new Date(), environment: Environments.findOne({name:data.server})._id});
      console.log('Environments posted, count is:' + Environments.find().count());
      return {"status":"ok"};
      
		}


});
