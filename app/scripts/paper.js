// ================== 
// Variables
// ================== 
var specs = {
	width: view.size.width,
	height: view.size.height,
	center: view.center,
	top: view.bounds.top,
	left: view.bounds.left,
	right: view.bounds.right,
	bottom: view.bounds.bottom
}

var inputDate = {
	startYearString: "Not Set",
	endYearString: "Not Set", 
	startYear: 0,
	endYear: 0,
	dateRange: 0,
	convert: function(start, end) {
		this.startYear = parseInt(this.startYearString);
		this.endYear = parseInt(this.endYearString);
	},
} // ???

var inputEvent = {
	eventName: $('.dataPoint-name-input').val(),
	eventStartString: $('.dataPoint-start-input').val(),
	eventEndString: $('.dataPoint-end-input').val(),
	eventStart: 0,
	eventEnd: 0,
	eventRange: 0,
	convert: function(start, end) {
		this.eventStart = parseInt(this.eventStartString);
		this.eventEnd = parseInt(this.eventEndString);
		this.eventRange = 
	}
} // ???

parseIntInput()

function parseIntInput(){
	console.log(inputEvent)
}

console.log(specs)

var path = new Path({
	strokeColor: [0.8], // Aka 80% Black
	strokeCap: 'square'
});

var referencePath = new Path({
	strokeColor: [0.8],
	strokeCap: 'square'
});

var style = {
	fillColor: 'red',
	strokeColor: [0.8],
	strokeWidth: 2,
	fontSize: 20
};

function tellMe(width, height, callback) {
	console.log(width, height)
}

function tellMeMore() {}