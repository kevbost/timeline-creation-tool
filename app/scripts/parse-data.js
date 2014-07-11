'use strict';
// ===============================================
//                       _      _            ___   
//   _ __ ___   ___   __| | ___| |___       ( _ )  
//  | '_ ` _ \ / _ \ / _` |/ _ \ / __|      / _ \/\
//  | | | | | | (_) | (_| |  __/ \__ \     | (_>  <
//  |_| |_| |_|\___/ \__,_|\___|_|___/      \___/\/
//             _ _           _   _                 
//    ___ ___ | | | ___  ___| |_(_) ___  _ __  ___ 
//   / __/ _ \| | |/ _ \/ __| __| |/ _ \| '_ \/ __|
//  | (_| (_) | | |  __/ (__| |_| | (_) | | | \__ \
//   \___\___/|_|_|\___|\___|\__|_|\___/|_| |_|___/
//                                                 
var Scifi = Parse.Object.extend({
	className: 'Scifi'
	});

var ScifiCollection = Parse.Collection.extend({
	model: Scifi,
	query: (new Parse.Query(Scifi))
		.equalTo("start", "2009")
		// .greaterThan("start", "2009")
	});

// var query = new Parse.Query(TestObject);
// 	query.equalTo("temperature", "hot");
// 	query.greaterThan("degreesF", 100);
// 	var collection = query.collection();

// =========================================
// Test for paperjs
var PaperView = Parse.View.extend({
				tagName: 'canvas',
				className: 'myCanvas',
				attributes: {resize: true},

				initialize: function(){
					paper.install(window);
					this.tester()
				},

				tester: function(){
					console.log(paper)
					var star = new Path.Circle(new Point(100, 100));
					// star.style = {fillColor: 'orange', strokeColor: null};
				}
});

// =========================================
//     _                    _               
//    /_\  _ __  _ __/\   /(_) _____      __
//   //_\\| '_ \| '_ \ \ / / |/ _ \ \ /\ / /
//  /  _  \ |_) | |_) \ V /| |  __/\ V  V / 
//  \_/ \_/ .__/| .__/ \_/ |_|\___| \_/\_/  
//        |_|   |_|                         
var AppView = Parse.View.extend({
	
	tagName: 'canvas',
	className: 'myCanvas',

	initialize: function(){
		this.fetchData();
	},

	fetchData: function(){
	// Collection of Scifi Objects.
		var collection = new ScifiCollection();
	// COMPARATOR
		// collection.comparator = function(object) {
		// 	return object.get("start");
		// };

		collection.fetch({
			success: function(collection, error) {
				collection.each(function(category) {
					console.log("Yeah, they're loaded dawg")
					// console.log("Name: " + " " + category.attributes.name + "\nStart: " + category.attributes.start + "\nEnds: " + " " + category.attributes.end);
				})
			}, // success:
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			} // error:

		}).then(function(){
			// console.log(collection.length)
		}) // collection.fetch({})
	}, // fetchData: function(){}



	modifyEntireCollection: function(){
		var SciFi = Parse.Object.extend({
				className: 'Scifi'
			});
		var scifi = new Scifi()

		// var collection = 
		var query = new Parse.Query(Scifi);
		query.exists("objectId");
		query.find({
			success: function(results) {
				// var start = results.start
				console.log("Successfully retrieved " + results.length + " results.");
				// Do something with the returned Parse.Object values
				for (var i = 0; i < results.length; i++) { 
					var object = results[i];
					var startDateString = object.get('start')
					var endDateString = object.get('end')
					var startYear = parseInt(startDateString);
					var endYear = parseInt(endDateString);
					object.set('range', endYear - startYear)
					object.save(null, {
						success: function(object) {
							// Execute any logic that should take place after the object is saved.
							console.log('New object created with objectId: ' + object.id);
						}
					});
				}

			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});
	}
// 
}) // var AppView = Parse.View.extend({})