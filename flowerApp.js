var redRoses=new app.singleFlower({

name:"Red Roses",
price:40,
color:"red",
img:"redRoses.jpg",
link:"redRose"
});

var rainbowRoses=new app.singleFlower({

name:"ranibow roses",
price:30,
color:"oranges",
link:"rainbowRose"
});

var heirloomRoses=new app.singleFlower({
name:"heirloom Roses",
price:100,
img:"heirloomRoses.jpg",
link:"heirloomRose"

});

var TantalizingTulips=new app.singleFlower({
price:80,
color:"red"


});
var Flwurdelis=new app.singleFlower({
price:75,
color:"blue"

});

//Not working Collection will check it later
//The order in which js files are loaded is very important other wise something will go wrong

var flowerGroup=new app.FlowersCollection([
		redRoses,rainbowRoses,heirloomRoses
	]);


console.log(flowerGroup.toJSON());

//change the price to trigger on change function in initialize function
var europegroup=new app.EuropeanFlower([
TantalizingTulips,Flwurdelis

	]);
TantalizingTulips.set("Country","Holland");
console.log(europegroup.toJSON());
console.log(heirloomRoses.toJSON());



var flowerGroupView=new app.allFlowersView({collection:flowerGroup});
$('#allFlowers').html(flowerGroupView.render().el);