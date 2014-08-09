environmentAdd = function(data){
	//do a check to see if we have the environment in our database already.
	//add if not.
	if(Environments.find({name: data}).count()===0)
	{
        Environments.insert({name:data, createdAt: new Date()});
        console.log("failed to find environment " + data + " so it was added");
	}
};
