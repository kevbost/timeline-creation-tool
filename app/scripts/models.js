'use strict';

var Scifi = Parse.Object.extend({
	className: 'Scifi'
});

var ScifiCollection = Parse.Collection.extend({
	model: Scifi
});