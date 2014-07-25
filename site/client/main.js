

Template.hello.greeting = function () {
  return "Welcome to stethoscope.";
};


Meteor.subscribe("messages");

Template.ajaxResponse.environments = function(){
  return Environments.find();
};

Template.ajaxResponse.tests = function(){
  //var env = Environments.findOne(this._id);
  //need to look at why this is failing to find the tests based on the environment passed in.
  return Tests.find({$and:[{environment:this._id}]});
};
