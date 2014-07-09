"use strict";

var AppRouter = Parse.Router.extend({
	routes: {
		"" : "home"
	},

	home: function() {
		console.log('%cHello Kevin! \nThe router was sent home.\nEnjoy your stay!','color:rgba(0, 0, 0, .5)');
		// paperView = new PaperView();
		// appView = new AppView();
	}
})