// ================== 
// Instructions
// ================== 
var splashText = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 20,
	// fontFamily: 'Lato',
	fontWeight: '500',
	blendMode: 'xor',
	content: "\nHello, and welcome to the\nTimeline Visualization Tool!\nTake a look at the input\nfields above this area.\n\nInput a START YEAR\nand an END YEAR.\n",
	fillColor: {
		hue: Math.random() * 360,
		saturation: 0.5,
		brightness: 1
	},
	onMouseMove: function() { splashText.fillColor.hue += 1; }
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
	startYearString: undefined,
	endYearString: undefined,
	startYear: 0,
	endYear: 0,
	dateRange: 0,
	convert: function() {
		this.startYear = parseInt(this.startYearString);
		this.endYear = parseInt(this.endYearString);
		this.dateRange = this.endYear - this.startYear;
			console.log('startYear:', this.startYear)
			console.log('endYear:', this.endYear)
			console.log('dateRange:', this.dateRange)
		checkInputDate();
	}
}

var inputEvent = {
	eventName: undefined,
	eventStartString: undefined,
	eventEndString: undefined,
	eventStart: 0,
	eventEnd: 0,
	eventRange: 0,
	convert: function() {
		this.eventStart = parseInt(this.eventStartString);
		this.eventEnd = parseInt(this.eventEndString);
		this.eventRange = this.eventEnd - this.eventStart;
			console.log('eventName:', this.eventName)
			console.log('eventStart:', this.eventStart)
			console.log('eventEnd:', this.eventEnd)
			console.log('eventRange:', this.eventRange)
		checkInputEvent();
	}
}

// ================== 
// Global Paper Basics
// ================== 
var path = new Path({
	strokeColor: [0.8], // Aka 80% Black
	strokeCap: 'square'
});

var referencePath = new Path({
	strokeColor: [0.8],
	strokeCap: 'square'
});

// ================== 
// Functions
// ================== 
function checkInputDate() {
	var startYearString	= inputDate.startYearString;
	var endYearString	= inputDate.endYearString;
	var startYear		= inputDate.startYear;
	var endYear			= inputDate.endYear;
	switch (true) {
		case (startYear >= endYear):
			$('.notification-text').html('START YEAR should come before END YEAR.');
			$('.notification-text').addClass('activated');
			$('.start-year, .end-year').addClass('has-error');
		break;
		case (startYearString.trim() === ""):
			$('.notification-text').html('Need START YEAR.');
			initialStartHasError();
		break;
		case (endYearString.trim() === ""):
			$('.notification-text').html('Need END YEAR.');
			initialEndHasError();
		break;
		case (startYear < 1000):
			$('.notification-text').html('Year needs to match YYYY');
			initialStartHasError();
		break;
		case (endYear < 1000):
			$('.notification-text').html('Year needs to match YYYY');
			initialEndHasError();
		break;
		default:
			$('.notification-text, .start-year, .end-year').removeClass('activated');
			$('.input-dates, .input-events').addClass('activated');
			splashLayer.visible = false;
			paper.view.draw()
			console.log('default switch fired, you did good grasshopper')
	} // end switch
} // end function checkInitialInputs(){}
function initialStartHasError() {
	$('.notification-text').addClass('activated');
	$('.start-year').addClass('has-error');
	$('.end-year').removeClass('has-error');
} // end function initialStartHasError(){}
function initialEndHasError() {
	$('.notification-text').addClass('activated');
	$('.end-year').addClass('has-error');
	$('.start-year').removeClass('has-error');
} // end function initialEndHasError (){}
function clickNums() {
	if (!clickNum) clickNum = +52;
	$(this).data('clickNum', clickNum += 20);
} // end function clickNums(){}
function clicksOne() {
	if (!clickOne) clickOne = 0;
	$(this).data('clickOne', clickOne += 1);
} // function clicksOne(){}



function checkInputEvent(){
	var eventStartString	= inputEvent.eventStartString;
	var eventEndString		= inputEvent.eventendString;
	var eventStart			= inputEvent.eventStart;
	var eventName			= inputEvent.eventName;
	var eventEnd			= inputEvent.eventEnd;

	switch (true) {
		case (eventName.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('Please enter a name of your new data point.');
			eventNameHasError();
		break;
		case (eventEnd < 1000):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('END needs to match YYYY');
			eventEndHasError();
		break;
		case (eventStartString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('Need beginning year.');
			eventStartHasError();
		break;
		case (inputEvent.eventEndString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('Need END year.');
			eventEndHasError();
		break;
		case (eventEnd > inputDate.endYear):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('END should be before the graph\'s end year.');
			eventEndHasError();
		break;
		case (eventStart < 1000):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('Year needs to match YYYY');
			eventStartHasError();
		break;
		case (eventStart < inputDate.startYear):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('START should be after the graph\'s start year.');
			eventStartHasError();
		break;
		case (eventStart > eventEnd):
			$(this).data('clickNum', clickNum -= 20);
			$('.notification-text').html('START needs to be a year before END');
			eventStartHasError();
			$('.event-end').addClass('has-error');
		break;
		default:
			$('.notification-text').removeClass('activated');
			$('.event-start, .event-name, .event-end').removeClass('has-error');
			console.log('default switch fired, you did good grasshopper')
			renderData();
	} // end switch
} // end function checkInputEvent(){
function eventNameHasError(){
	$('.notification-text').addClass('activated');
	$('.event-name').addClass('has-error');
	$('.event-start, .event-end').removeClass('has-error');
} // end function nameHasError(){
function eventStartHasError(){
	$('.notification-text').addClass('activated');
	$('.event-start').addClass('has-error');
	$('.event-name, .event-end').removeClass('has-error');
} // end function eventStartHasError(){
function eventEndHasError(){
	$('.notification-text').addClass('activated');
	$('.event-end').addClass('has-error');
	$('.event-name, .event-start').removeClass('has-error');
} // end function eventEndHasError(){

function renderData() {
	if(inputEvent.eventRange < 1) {
	var eventRect = new Path.Circle({
		center: [(specs.width / inputDate.dateRange) * (inputEvent.eventStart - inputDate.startYear), ((specs.bottom - clickNum) + 7)],
		radius: 10,
		fillColor: {
			hue: Math.random() * 360,
			saturation: 0.5,
			brightness: 1 }
		})
	} else {
	var dataPointRect = new Rectangle(
		new Point((specs.width / inputDate.dateRange) * (inputEvent.eventStart - inputDate.startYear), (specs.bottom - clickNum)),
		new Size(((specs.width / inputDate.dateRange) * inputEvent.eventRange), 20)
	);
	var path = new Path.Rectangle(dataPointRect);
	path.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
	};
	// end path.fillColor = 'white';
}
}

// ================== 
// Buttons
// ================== 
$('.go').click(function() {
	// variables
	inputDate.startYearString = $('.startYear').val();
	inputDate.endYearString = $('.endYear').val();
	inputDate.convert();
})
$('.add').click(function() {
	// varables
	inputEvent.eventName = $('.event-name-input').val();
	inputEvent.eventEndString = $('.event-end-input').val();
	inputEvent.eventStartString = $('.event-start-input').val();
	inputEvent.convert();
	console.log("inputEvent is", inputEvent)
	
	clickNums()
	clicksOne()
	console.log("clickOne:", clickOne, ", clickNum:", clickNum);

	// console.log(inputEvent)
	// console.log(project.activeLayer)
})








// function consoleLog() {
// 	console.log(inputDate)
// 	console.log(project.activeLayer)
// }

// var fs = require('fs')
// var myNumber = undefined

// function addOne(callback) {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }

// function logMyNumber() {
//   console.log(myNumber)
// }

// addOne(logMyNumber)