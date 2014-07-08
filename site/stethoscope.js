if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to stethoscope.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

Meteor.methods({
  createHealthCheckResult: function (data) {
    console.log('data was posted');
    return {"status":"ok"};
  }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("started");
  });
}
