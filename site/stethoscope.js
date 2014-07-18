Messages = new Meteor.Collection("messages");


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to stethoscope.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
      { 
     	console.log("You pressed the button and did something");
  	   } 
    }
  });
  
  Meteor.subscribe("messages");
  
  Template.ajaxResponse.messages = function(){
	return Messages.find();
  };
    
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("app started");
    //clear the old messages
    Messages.remove({});
  });
  
  
	Meteor.methods({
  		createHealthCheckResult: function (data) {
  			Messages.insert({msg: data.data, msgdate: new Date(), server: data.server});
    		console.log('message posted, count is:' + Messages.find().count());
    		return {"status":"ok"};
  		}
	});

  
}
