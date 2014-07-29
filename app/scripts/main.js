//           ______   ______   __  __                        
//  /'\_/`\ /\  _  \ /\__  _\ /\ \/\ \         __            
// /\      \\ \ \L\ \\/_/\ \/ \ \ `\\ \       /\_\     ____  
// \ \ \__\ \\ \  __ \  \ \ \  \ \ , ` \      \/\ \   /',__\ 
//  \ \ \_/\ \\ \ \/\ \  \_\ \__\ \ \`\ \  __  \ \ \ /\__, `\
//   \ \_\\ \_\\ \_\ \_\ /\_____\\ \_\ \_\/\_\ _\ \ \\/\____/
//    \/_/ \/_/ \/_/\/_/ \/_____/ \/_/\/_/\/_//\ \_\ \\/___/ 
//                                            \ \____/       
//                                             \/___/        
Parse.initialize("kIv6nAYjGwfyFF9yozhchl8NC6jVcpViAvQZt8eU", "iax0nms3DbkYo4YG7EjWqAtOWbrn1PDxl6k67rLa");

var appView;
var scifi;
var paperView;
var inputDate;
var inputEvent;

new AppRouter();
Parse.history.start();

// =======================================================================
	paper.install(window);
// =======================================================================
	window.onload = function() {
    paper.setup('myCanvas');
    $( document ).ready(function() {
    console.log( "ready!" );
    paper.install(window);
var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
paper.setup(canvas);
// ================== 
// Instructions
// ================== 
var splashText = new PointText({
  point: view.center,
  justification: 'center',
  fontSize: 20,
  // fontFamily: 'Lato',
  // fontWeight: '500',
  content: "\nTIMELINE CREATION TOOL\n\nInput a START YEAR\nand an END YEAR.\n",
  fillColor: {
    hue: Math.random() * 360,
    saturation: 0.5,
    brightness: 1
  },
  onMouseDown: function() {
    splashText.fillColor = {
      hue: Math.random() * 360,
      saturation: 1,
      brightness: 1
    };
  },
  onMouseMove: function() {
    splashText.fillColor.hue += 1;
  }
});

renderBG()

// ==================
// Background
// ==================
function renderBG(){
  var BG = new Rectangle(0, 0, view.bounds.width, view.bounds.height);
  var fillBG = new Path.Rectangle(BG);
    fillBG.fillColor = '#333333';
}

// ==================
// ORBIT
// ==================

var tracking = false;

function loadOrbitVariables(){
  var yellow = 'rgba(200, 192, 62, 1)';

  star = new Path.Circle(new Point(view.center), 100);
  star.style = {
    fillColor: yellow,
    strokeColor: null };

  var starPoint = star.position;
  console.log(starPoint);

  var moonGroup1 = new Path.Circle(new Point(starPoint), 122);
  // moonGroup1.style = {strokeColor: 'black'};
  var moonGroup1a = new Path.Circle(new Point(starPoint + 85), 5);
  moonGroup1a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup2 = new Path.Circle(new Point(starPoint), 142);
  // moonGroup2.style = {strokeColor: 'black'};
  var moonGroup2a = new Path.Circle(new Point(starPoint + 100), 5);
  moonGroup2a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup3 = new Path.Circle(new Point(starPoint), 172);
  // moonGroup3.style = {strokeColor: 'black'};
  var moonGroup3a = new Path.Circle(new Point(starPoint + 120), 5);
  moonGroup3a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup4 = new Path.Circle(new Point(starPoint), 200);
  // moonGroup4.style = {strokeColor: 'black'};
  var moonGroup4a = new Path.Circle(new Point(starPoint + 140), 10);
  moonGroup4a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup5 = new Path.Circle(new Point(starPoint), 232);
  // moonGroup5.style = {strokeColor: 'black'};
  var moonGroup5a = new Path.Circle(new Point(starPoint + 165), 5);
  moonGroup5a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup6 = new Path.Circle(new Point(starPoint), 280);
  // moonGroup6.style = {strokeColor: 'black'};
  var moonGroup6a = new Path.Circle(new Point(starPoint + 200), 5);
  moonGroup6a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup7 = new Path.Circle(new Point(starPoint), 360);
  // moonGroup7.style = {strokeColor: 'black'};
  var moonGroup7a = new Path.Circle(new Point(starPoint + 255), 25);
  moonGroup7a.style = { fillColor: yellow, strokeColor: null };
  var moonGroup8 = new Path.Circle(new Point(starPoint), 450);
  // moonGroup8.style = {strokeColor: 'black'};
  var moonGroup8a = new Path.Circle(new Point(starPoint + 325), 35);
  moonGroup8a.style = { fillColor: yellow, strokeColor: null };
  var moonPositionCenter = moonGroup1.center
  var point1 = moonGroup1.center;
  var group1 = new Group([moonGroup1, moonGroup1a]);
  var group2 = new Group([moonGroup2, moonGroup2a]);
  var group3 = new Group([moonGroup3, moonGroup3a]);
  var group4 = new Group([moonGroup4, moonGroup4a]);
  var group5 = new Group([moonGroup5, moonGroup5a]);
  var group6 = new Group([moonGroup6, moonGroup6a]);
  var group7 = new Group([moonGroup7, moonGroup7a]);
  var group8 = new Group([moonGroup8, moonGroup8a]); 

  view.onFrame = function(event) {
    group1.rotate(3, point1);
    group2.rotate(2.5, point1);
    group3.rotate(2.1, point1);
    group4.rotate(1.8, point1);
    group5.rotate(1.4, point1);
    group6.rotate(1, point1);
    group7.rotate(0.8, point1);
    group8.rotate(0.6, point1);
  }

  if (tracking === true) {
    project.activeLayer.onMouseDrag = function(event) {
      star.visible = false;
      point1 = event.point;
      // console.log(event.point);
    }
    // console.log(event.point)
  }
}

// ================== 
// LAYER 01
// ================== 
var splashLayer = new Layer([splashText]);
  splashText.fitBounds(view.bounds)
  paper.view.draw()
  splashLayer.activate();



// ================== 
// Variables
// ================== 
var clickNum = 72;
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
      renderData()
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
  if (!clickNum) clickNum = 52;
  $(this).data('clickNum', clickNum += 20);
} // end function clickNums(){}
function clicksOne() {
  if (!clickOne) clickOne = 0;
  $(this).data('clickOne', clickOne += 1);

  if (clickOne === ((clickOne + 1) / 2) > (height - 80) / 20) {
    $('.notification-text').html(clickOne + ' is the total number of points that this graph can display.');
    $('.add').prop( "disabled", true);
    // $('.notification-text').html('START YEAR should come before END YEAR.');
    $('.notification-text').addClass('activated');
  }
}




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
}




function renderReferencePaths(){
  var dateRange = inputDate.dateRange;
  
  for (var i = 1; i < dateRange; i++) {
    var from = new Point(width / dateRange * i, top + 52);
    var to = new Point(width / dateRange * i, bottom - 52);
    var referencePath = new Path.Line(from, to);
    referencePath.style = style;
    referencePath.strokeColor = 'black'
  } // end for (){}
  referencePathsLayer = new Layer(referencePath);
  paper.view.draw();
}

// /////////////////\\\\\\\\\\\\\\\\
// /////////////////\\\\\\\\\\\\\\\\
// /////////////////\\\\\\\\\\\\\\\\




function renderEventName(){
  var eventName = inputEvent.eventName;

  var eventNameText = new PointText(5, (bottom - clickNum) + 1);
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
      // var blends = ['normal', 'multiply', 'screen', 'overlay', 'soft-light', 'hard-light', 'color-dodge', 'color-burn', 'darken', 
      //        'lighten', 'difference', 'exclusion', 'hue', 'saturation', 'luminosity', 'color', 'add', 'subtract', 'average', 
      //        'pin-light', 'negation', 'source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 
      //        'destination-out', 'destination-atop', 'lighter', 'darker', 'copy', 'xor']
    pathBG.blendMode = 'hard-light'
  eventNameLayerBG.activate()

  var eventReferencePath = new Path();
    eventReferencePath.add(new Point(eventNameText.bounds.width, bottom - clickNum) + 10);
    eventReferencePath.add(new Point(right, bottom - clickNum) + 10);
    eventReferencePath.fillColor = "white";
    eventReferencePath.strokeColor = [0.5];
    eventReferencePath.strokeWidth = 1;
    eventReferencePath.dashArray = [5, 5];
    eventReferencePath.blendMode = 'hard-light'

  eventNameLayer = new Layer(eventNameText)
  paper.view.draw()
}




function renderData(){
  var eventRange = inputEvent.eventRange;
  var eventStart = inputEvent.eventStart;
  var dateRange = inputDate.dateRange;
  var startYear = inputDate.startYear;

  if (eventRange < 1) {
    var eventRect = new Path.Circle({
      center: [(width / dateRange) * (eventStart - startYear), ((bottom - clickNum) + 10)],
      radius: 10
      })
      eventRect.fillColor = {
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1
      }
    eventRectLayer = new Layer(eventRect);
    paper.view.draw();
    renderEventName();
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
    eventRectLayer = new Layer(eventRectPath);
    paper.view.draw();
    renderEventName();
  }
}




// ================== 
// Buttons
// ================== 
$('.go').click(function() {
  project.clear();
  var startYearString = $('.startYear').val();
  var endYearString = $('.endYear').val();
  inputDate = new InputDate(startYearString, endYearString);
  // console.log(inputDate)
  checkInputDate()
});

$('.add').click(function() {
  var eventName = $('.event-name-input').val();
  var eventStartString = $('.event-start-input').val();
  var eventEndString = $('.event-end-input').val();

  inputEvent = new InputEvent(eventName, eventStartString, eventEndString)
  checkInputEvent()

  clickNums()
  clicksOne()
  console.log("clickOne:", clickOne, ", clickNum:", clickNum);
  // console.log((view.size.height - 84) / 20)
  if (clickOne === (view.size.height - 104) / 20){
    $('.notification-text').html(clickOne + ' is the total number of points that this graph can display.');
    $('.add').prop( "disabled", true);
    $('.notification-text').addClass('activated');
  }
});

$('.scifi').click(function(){
  project.clear();
  renderBG()
  paper.view.draw();

  tracking = false;
  var startYearString = $('.startYear').val('1986');
  var endYearString = $('.endYear').val('2014');
  
  $('.go').click();

  for (i = 0; i < scifi.results.length; i++){
    var eventName = $('.event-name-input').val(scifi.results[i].name);
    var eventStartString = $('.event-start-input').val(scifi.results[i].start);
    var eventEndString = $('.event-end-input').val(scifi.results[i].end);

    $('.add').click();
  }
  paper.view.draw();
});

$('.orbit').click(function(){
  project.clear();
  renderBG();

  tracking = true;
  loadOrbitVariables();

  paper.view.draw();
});
});

	};

  $('.navbar-brand').click(function(){
    window.location.reload();
  });

  $('.scifi').click(function(){
    $('.navbar-toggle').click();
  });

  $('.orbit').click(function(){
    paper.project.clear();
    $('.navbar-toggle').click();
    $('.orbitCanvasClass').removeClass("activated");
  })


// =======================================================================
	$('.save').click(function(){
		myCanvas.toBlob(function(blob) {
			saveAs(blob, "pretty image.png");
		});
	});
// Click the go button automatically for testing
// =======================================================================
setTimeout(function() {
		// $( ".go" ).click();
}, 500);


// Load Font w/ Javascript
WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();