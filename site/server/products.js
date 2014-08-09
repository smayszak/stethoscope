
productAdd = function(data){
	//do a check to see if we have the product in our database already.
	//add if not.
	if(Products.find({name: data}).count()===0)
	{
		Products.insert({name: data});
		console.log("failed to find product " + data + " so it will be added");
		console.log(Products.find({name: data}).count());
	}
};