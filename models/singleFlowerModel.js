//Namespace for my application
var app=app || {};
//Namespace is done so that there is no conflict in naming a variable later

app.singleFlower=Backbone.Model.extend({
//default means when i dont specify any images in the flower

defaults:
{


	color:"pink",
	img:"placeholder.jpg"
}
//initialize function is called when an backbone model instance  is created
//Watching for changes
//initialize()-watches for changes
//set() change  or add new properties
//get() find a specific model property
//on() triggers the changes --- bakbone event method

/*
{
	console.log("A model instance named"+this.get("name")+"has been created with price"+this.get("price"));


	this.on("change",function()
	{

console.log("Something in our model has changed");

	});
	this.on('change:price',function()
	{

		console.log("the price for the "+this.get("name")+"has been changed to "+this.get("price"));
		

	})
}
*/

});