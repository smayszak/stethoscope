/*environmentSchemaObject = {
	_id: {
		type: String,
		optional: true
	},
	name: {
		type: String,
		optional: true
	},
	createdAt: {
		type: Date,
		optional: true
	}
};

Environments = new Meteor.Collection("Environments",{
	schema: new SimpleSchema(environmentSchemaObject)
});
*/
Environments = new Meteor.Collection("Environments");
