// ================== 
// Instructions
// ================== 
var splashText = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 20,
	fontFamily: 'Lato',
	fontWeight: '500',
	blendMode: 'xor',
	content: "\nHello, and welcome to the\nTimeline Creation Tool!\nTake a look at the input\nfields above this area.\n\nInput a START YEAR\nand an END YEAR.\n",
	fillColor: {
		hue: Math.random() * 360,
		saturation: 0.5,
		brightness: 1
	},
	onMouseMove: function() {
		splashText.fillColor.hue += 1;
	}
});

// ================== 
// LAYER 01
// ================== 
var splashLayer = new Layer([splashText]);
	splashText.fitBounds(view.bounds)
	splashLayer.activate();



// ================== 
// Variables
// ================== 
var clickNum = 0;
var clickOne = 0;
// ==============
var width = view.size.width;
var height = view.size.height;
var center = view.center;
var top = view.bounds.top;
var left = view.bounds.left;
var right = view.bounds.right;
var bottom = view.bounds.bottom;

// // ======================================================================



// ================== 
// Constructors
// ================== 
function InputDate(startYearStringVar, endYearStringVar) {
	this.startYearString = startYearStringVar;
	this.endYearString = endYearStringVar;
	this.startYear = parseInt(startYearStringVar);
	this.endYear = parseInt(endYearStringVar);
	this.dateRange = this.endYear - this.startYear;
}

function InputEvent(eventNameVar, eventStartStringVar, eventEndStringVar) {
	this.eventName = eventNameVar;
	this.eventStartString = eventStartStringVar;
	this.eventEndString = eventEndStringVar;
	this.eventStart = parseInt(eventStartStringVar);
	this.eventEnd = parseInt(eventEndStringVar);
	this.eventRange = this.eventEnd - this.eventStart;
}



// ================== 
// Global Paper Basics
// ================== 
var path = new Path({
	strokeColor: '#d9534f',
	strokeWidth: 3
});

var guidePathTop = new Path({
	strokeColor: '#d9534f',
	strokeWidth: 3
});

var guidePathBottom = new Path({
	strokeColor: '#d9534f',
	strokeWidth: 3
});

var style = {
	strokeColor: [0.3],
	strokeWidth: 2,
	fontSize: 20
};


// ================== 
// Functions
// ================== 
function checkInputDate() {
	var startYearString = inputDate.startYearString;
	var endYearString = inputDate.endYearString;
	var startYear = inputDate.startYear;
	var endYear = inputDate.endYear;


	switch (true) {
		case (startYear >= endYear):
			reportError({
				message: 'START YEAR should come before END YEAR.',
				add: $('.start-year'),
				remove: $('.end-year')
			});
			break;
		case (startYearString.trim() === ""):
			reportError({
				message: 'Need START YEAR.',
				add: $('.start-year'),
				remove: $('.end-year')
			});
			break;
		case (endYearString.trim() === ""):
			reportError({
				message: 'Need END YEAR.',
				add: $('.end-year'),
				remove: $('.start-year')
			});
			break;
		case (startYear < 1000):
			reportError({
				message: 'Year needs to match YYYY',
				add: $('.start-year'),
				remove: $('.end-year')
			});
			break;
		case (endYear < 1000):
			reportError({
				message: 'Year needs to match YYYY',
				add: $('.end-year'),
				remove: $('.start-year')
			});
			break;
		default:
			$('.input-dates, .input-events').addClass('activated');
			splashLayer.visible = false;
			console.log('default switch fired, you did real good there grasshopper');
			clearError()
			paper.view.draw()
			renderGuide()
	} // end switch
} // end function checkInputDate(){}

function checkInputEvent() {
	var eventStartString = inputEvent.eventStartString;
	var eventEndString = inputEvent.eventEndString;
	var eventStart = inputEvent.eventStart;
	var eventName = inputEvent.eventName;
	var eventEnd = inputEvent.eventEnd;
	var endYear = inputDate.endYear;

	switch (true) {
		case (eventName.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'Please enter a name of your new Event.',
				add: $('.event-name'),
				remove: $('.event-start, .event-end')
			});
			break;
		case (eventEnd < 1000):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'END needs to match YYYY.',
				add: $('.event-end'),
				remove: $('.event-start, .event-name')
			});
			break;
		case (eventStartString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'Need event START year.',
				add: $('.event-start'),
				remove: $('.event-end, .event-name')
			});
			break;
		case (eventEndString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'Need event END year.',
				add: $('.event-end'),
				remove: $('.event-start, .event-name')
			});
			break;
		case (eventEnd > endYear):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'END should be before the graph\'s end year.',
				add: $('.event-end'),
				remove: $('.event-start, .event-name')
			});
			break;
		case (eventStart < 1000):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'START needs to match YYYY.',
				add: $('.event-start'),
				remove: $('.event-end, .event-name')
			});
			break;
		case (eventStart < inputDate.startYear):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'START should be after the graph\'s start year.',
				add: $('.event-start'),
				remove: $('.event-end, .event-name')
			});
			break;
		case (eventStart > eventEnd):
			$(this).data('clickNum', clickNum -= 20);
			reportError({
				message: 'START needs be before END',
				add: $('.event-start'),
				remove: $('.event-end, .event-name')
			});
			break;
		default:
			clearError();
			renderEventName();
	} // end switch
} // end function checkInputEvent(){

function reportError(error) {
	$('.notification-text').html(error.message).addClass('activated');
	error.add.addClass('has-error');
	error.remove.removeClass('has-error');
}

function clearError() {
	$('.notification-text').html('').removeClass('activated');
	$('.has-error').removeClass('has-error');
}

// /////////////////
// /////////////////
// /////////////////

function clickNums() {
	if (!clickNum) clickNum = +52;
	$(this).data('clickNum', clickNum += 20);
} // end function clickNums(){}
function clicksOne() {
	if (!clickOne) clickOne = 0;
	$(this).data('clickOne', clickOne += 1);

	if (clickOne === ((clickOne + 1) / 2) > (height - 104) / 20) {
		$('.notification-text').html(clickOne + ' is the total number of points that this graph can display.');
		$('.add').prop( "disabled", true);
		// $('.notification-text').html('START YEAR should come before END YEAR.');
		$('.notification-text').addClass('activated');
	}

} // function clicksOne(){}

// /////////////////
// /////////////////
// /////////////////

function renderGuide() {
	var dateRange = inputDate.dateRange;

	guidePathTop.add([left, (top + 50)]);
	for (var i = 1; i < dateRange; i++) {
		var point = new Point(width / dateRange * i, (top + 50));
		guidePathTop.add(point);
		} // end for (){}
	guidePathTop.add([right, (top + 50)]);

	guidePathBottom.add([left, (bottom - 50)]);
	for (var i = 1; i < dateRange; i++) {
		var point = new Point(width / dateRange * i, (bottom - 50));
		guidePathBottom.add(point);
		} // end for (){}
	guidePathBottom.add([right, (bottom - 50)]);


	guidePathLayer = new Layer([guidePathBottom, guidePathTop])
	paper.view.draw();
	renderGuideText();
} // end function initializePath() {}

function renderGuideText(){
	var startYear = inputDate.startYear;
	var dateRange = inputDate.dateRange;

	var counter = startYear;
	for (var i = 1; i < dateRange; i++) {
		var guideText = new PointText({
			point: [width / dateRange * i, (top + 8)],
			content: (counter += 1),
			fillColor: 'white'
		})
		guideText.rotate(300);
	 guideText.position.x -= 14;
	 guideText.position.y += 25;
	} // end for (){}

	var counter = startYear;
	for (var i = 1; i < dateRange; i++) {
		var guideText = new PointText({
			point: [width / dateRange * i, (bottom - 50)],
			content: (counter += 1),
			fillColor: 'white'
		})
		guideText.rotate(300);
	 guideText.position.x -= 14;
	 guideText.position.y += 25;
	} // end for (){}

	guideTextLayer = new Layer([guideText])
	paper.view.draw();
	renderReferencePaths()
	// initializeReferencePaths();
}

function renderReferencePaths(){
	var dateRange = inputDate.dateRange;
	
	for (var i = 1; i < dateRange; i++) {
		var from = new Point(width / dateRange * i, top + 52);
		var to = new Point(width / dateRange * i, bottom - 52);
		var referencePath = new Path.Line(from, to);
		referencePath.style = style;
		// referencePath.strokeColor = 'black'
	} // end for (){}
	referencePathsLayer = new Layer(referencePath);
	paper.view.draw();
}

// /////////////////
// /////////////////
// /////////////////
function renderEventName(){
	var eventName = inputEvent.eventName;

	var eventNameText = new PointText(5, (bottom - clickNum));
		eventNameText.content = eventName;
		eventNameText.fillColor = 'white';
		eventNameText.position.y += 14;

	eventNameLayerBG = new Layer()
	var eventNameReferenceBG = new Rectangle(
		new Point(0, (bottom - clickNum)),
		new Size(eventNameText.bounds.width + 7, 20)
	);
	var pathBG = new Path.Rectangle(eventNameReferenceBG);
		pathBG.fillColor = '#333333';
		// pathBG.fillColor = 'green';
	eventNameLayerBG.activate()

	var eventReferencePath = new Path();
		eventReferencePath.add(new Point(eventNameText.bounds.width, bottom - clickNum) + 10);
		eventReferencePath.add(new Point(right, bottom - clickNum) + 10);
		eventReferencePath.fillColor = "white";
		eventReferencePath.strokeColor = [0.5];
		eventReferencePath.strokeWidth = 1;
		eventReferencePath.dashArray = [5, 5];

	eventNameLayer = new Layer(eventNameText)
	renderData();
}

function renderData(){
	var eventRange = inputEvent.eventRange;
	var eventStart = inputEvent.eventStart;
	var dateRange = inputDate.dateRange;
	var startYear = inputDate.startYear;

	console.log('renderData fired');
	if (eventRange < 1) {
		var eventRect = new Path.Circle({
			center: [(width / dateRange) * (eventStart - startYear), ((bottom - clickNum) + 7)],
			radius: 10
			})
			eventRect.fillColor = {
				hue: Math.random() * 360,
				saturation: 0.5,
				brightness: 1
			}
		console.log('Fin')
		paper.view.draw()
	} else {
		var eventRect = new Rectangle(
			new Point((width / dateRange) * (eventStart - startYear), (bottom - clickNum)),
			new Size(((width / dateRange) * eventRange), 20)
		);
		var eventRectPath = new Path.Rectangle(eventRect);
			eventRectPath.fillColor = {
				hue: Math.random() * 360,
				saturation: 1,
				brightness: 1
			};
		console.log('Fin')
		eventRectLayer = new Layer(eventRectPath)
		paper.view.draw()
	}
}




// ================== 
// Buttons
// ================== 
$('.go').click(function() {
	var startYearString = $('.startYear').val();
	var endYearString = $('.endYear').val();
	inputDate = new InputDate(startYearString, endYearString);
	console.log(inputDate)
	checkInputDate()

})

$('.add').click(function() {
	var eventName = $('.event-name-input').val();
	var eventStartString = $('.event-start-input').val();
	var eventEndString = $('.event-end-input').val();

	inputEvent = new InputEvent(eventName, eventStartString, eventEndString)
	// console.log(inputEvent.eventName)
	checkInputEvent()

	clickNums()
	clicksOne()
	console.log("clickOne:", clickOne, ", clickNum:", clickNum);
	if (clickOne === (view.size.height - 104) / 20){
		$('.notification-text').html(clickOne + ' is the total number of points that this graph can display.');
		$('.add').prop( "disabled", true);
		// $('.notification-text').html('START YEAR should come before END YEAR.');
		$('.notification-text').addClass('activated');
	}
	// console.log(view.size.height - 104) / 20)
	// console.log(project.layers)
	// console.log(project.activeLayer)
	console.log(foo)
})

$('.scifi').click(function(){
	// guidePathLayer.visible = false;
	// guideTextLayer.visible = false;
	// referencePathsLayer.visible = false;
	// eventNameLayerBG.visible = false;
	// eventNameLayer.visible = false;
	// eventRectLayer.visible = false;

})