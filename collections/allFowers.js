var app=app || {};
//Collection is a group of models
app.FlowersCollection=Backbone.Collection.extend({
//Look at app.singleFlower Model
model:app.singleFlower

});
app.EuropeanFlower=Backbone.Collection.extend({

model:app.singleFlower

});

//in order to use collection first we have to create an instance of collections and add model instances to it
