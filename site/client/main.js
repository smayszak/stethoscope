

Template.hello.greeting = function () {
  return "Welcome to stethoscope.";
};

Template.ajaxResponse.environments = function(){
  return Environments.find();
};


Template.ajaxResponse.tests = function(){
  return Tests.find({$and:[{environment:this._id}]});
};



Template.enviro.environments = function(){
  return Environments.find();
};

Template.enviro.rendered = function()
{
	//this.autorun(function(){

		alert($("h3").html());
	//}.bind(this));

	// NEW in 0.8.3, use this.computation=Deps.autorun and
	// this.computation.stop() in destroyed callback otherwise
	/*this.autorun(function(){
		
		Deps.afterFlush(function(){
			// here you are guaranteed that any DOM modification implied by the
			// each loop is finished, so you can manipulate it using jQuery
			this.$("h3").css("border", "3px solid red");
			alert("done");
		}.bind(this));
	}.bind(this));*/
};