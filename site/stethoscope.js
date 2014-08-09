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
  
}


