// =======================================================================
console.log('%cCanvas width is ' + view.size.width, 'font-size:20px;background-color:orange')
console.log('%cCanvas height is ' + view.size.height, 'font-size:20px;background-color:orange')
// =======================================================================
// VARIABLES
// =======================================================================
var grayDarker 		=	'#222';
var grayDark 		=	'#333';
var gray 			=	'#555';
var grayLight 		=	'#777';
var grayLighter 	=	'#eee';

var brandPrimary 	=	'#428bca';
var brandSuccess 	=	'#5cb85c';
var brandInfo 		=	'#5bc0de';
var brandWarning 	=	'#f0ad4e';
var brandDanger 	=	'#d9534f';

// =======================================================================
// Load Canvas
// =======================================================================
paper.view.center = view.center;



// =======================================================================
// Draw the Splash Animation
// =======================================================================
var star = new Path.Circle(new Point(view.center), 100);
	star.style = {fillColor: 'yellow', strokeColor: null};

	var moonGroup1 = new Path.Circle(new Point(view.center), 200);
	// moonGroup1.style = {strokeColor: 'black'}
	var moonGroup1a = new Path.Circle(new Point(view.center + 800), 25);
		moonGroup1a.style = {
			fillColor: 'rgb(86, 75, 146)',
			strokeColor: null};

	var moonGroup2 = new Path.Circle(new Point(view.center), 200);
	// moonGroup2.style = {strokeColor: 'black'}
	var moonGroup2a = new Path.Circle(new Point(view.center + 100), 5);
		moonGroup2a.style = {
			fillColor: 'rgb(200, 192, 62)',
			strokeColor: null};

	var moonGroup3 = new Path.Circle(new Point(view.center), 200);
	// moonGroup2.style = {strokeColor: 'black'}
	var moonGroup3a = new Path.Circle(new Point(view.center - 200), 5);
		moonGroup3a.style = {
			fillColor: 'rgb(168, 121, 84)',
			strokeColor: null};

		var group1 = new Group([moonGroup1, moonGroup1a])
		var group2 = new Group([moonGroup2, moonGroup2a])
		var group3 = new Group([moonGroup3, moonGroup3a])

		var point1 = moonGroup1.center;
		// var point2 = copy.bounds.bottomLeft;

		function onFrame(event){
			group1.rotate(0.5, point1)
			group2.rotate(2, point1)
			group3.rotate(1, point1)
			// group.fillColor.hue = Math.random() * 50.5°;
		}

// =======================================================================
// Draw canvas elements onClick of $('.go')
// =======================================================================
$('.go').click(function(){

	var path = new Path({
		strokeColor: [0.8], // 80% black:
		strokeCap: 'square',
		// fullySelected: true
	});

	var referencePath = new Path({
		strokeColor: [0.8], // 80% black:
		strokeCap: 'square',
		// fullySelected: true
	});

	var style = {
		fillColor: 'red',
		strokeColor: [0.8],
		strokeWidth: 2,
		fontSize: 20
	};
// =======================================
// Take date inputs and draw the timeline
// =======================================
	$('.dateRange').addClass('activated');
	$('.dataPoint').addClass('activated');
	project.clear();
	startYearString = $('.startYear').val();
	endYearString = $('.endYear').val();

	var startYear = parseInt(startYearString);
	var endYear = parseInt(endYearString);
	var dateRange = (endYear - startYear);

// =======================================================================
console.log('%cThe span of dates being viewed is ' + (dateRange - 1) + ' years.', 'font-size:20px;color:green');
console.log('%cStartYear is ' + startYear, 'font-size:20px;color:green')
// =======================================================================
	// // OLD SOLUTION
	// for (var a = 0; a <= dateRange + 1; a++) {
	// 		// var d = new Point(i / dateRange, 1) * (view.size -= 50);
	// 			date = path.add(new Point(a / dateRange, 1) * (view.size -=55));
	// 			var dateList = new PointText(new Point(a / dateRange, 1) * (view.size -= 50));
	// 				dateList.content = (startYear += 1);
	// 				// dateList.style = style;
	// 				// dateList.fontSize = 500 / dateRange;
	// 				dateList.rotate(270);
	// 				// console.log(date.segment);
	// };
	// for (var b = 0; b <= dateRange; b++) {
	// 	var dataPointRect = new Rectangle(view.size / b, 10);
	// 	var dataPointPath = new Path.Rectangle(dataPointRect);
	// 		dataPointPath.style = style;
	// 	// console.log(dataPointPath.position);
	// };

	// // MASON'S SOLUTION
	// for (var i = 0; i < 10; i++) {
	// 		var dateList = new PointText(new Point(view.size / i, 200));
	// 		dateList.content = (i);
	// 		dateList.style = style;
	// 		dateList.rotate(270)
	// }


	// // NEW SOLUTION
	var width, height, center;
	var points = 10;
	var smooth = true;
	var path = new Path();
	var referencePath = new Path();
	var mousePos = view.center / 2;
	var pathHeight = mousePos.y;
		// path.fillColor = 'black';
		path.strokeWidth = 3;
		path.strokeColor = brandDanger;
		initializePath();

	function initializePath() {
		center = view.center;
		width = view.size.width;
		height = view.size.height / 2
		path.segments = [];
		path.add([view.bounds.left,(view.bounds.bottom - 50)]);
		for (var i = 1; i < dateRange; i++) {
			var point = new Point(width / dateRange * i, (view.bounds.bottom - 50));
			path.add(point);
		}
			path.add([view.bounds.right,(view.bounds.bottom - 50)]);
			// path.fullySelected = true;
			initializePointText();
	}

	function initializePointText(){
		var counter = startYear;
			for (var i = 1; i < dateRange; i++) {
				var dateList = new PointText(width / dateRange * i, (view.bounds.bottom - 50));
					dateList.content = (counter += 1);
					dateList.fillColor = 'white';
					dateList.rotate(300);
					dateList.position.x -=14;
					dateList.position.y +=25;
				}
					initializeReferencePath();
	}

	function initializeReferencePath() {
		for (var i = 1; i < dateRange; i++) {
		var from = new Point(width / dateRange * i, 0);
		var to = new Point(width / dateRange * i,(view.bounds.bottom - 50));
			var referencePath = new Path.Line(from, to);
				referencePath.style = style;
				referencePath.strokeColor = 'black';
				// referencePath.strokeWidth = '5';
			}
	}

// =========================
// Redraw canvas after click
// =========================
	paper.view.draw();



// =======================================================================
// Add new dataPoint to graph
// =======================================================================
	$('.add').click(function(){
		width = view.size.width;

		// console.clear();
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');
		dataPointStartString = $('.dataPoint-start-input').val();
		dataPointEndString = $('.dataPoint-end-input').val();
		var style = {
			fillColor: 'red',
			strokeColor: 'black',
			strokeWidth: 2,
			fontSize: 20
		};

		var dataPointStart	= parseInt(dataPointStartString);
		var dataPointEnd	= parseInt(dataPointEndString);
		var dataPointRange	= dataPointEnd - dataPointStart;


//    .-')     ('-.     ('-.        .-. .-')    ('-.                         (`\ .-') /`   
//   ( OO ). _(  OO)  _(  OO)       \  ( OO ) _(  OO)                         `.( OO ),'   
//  (_)---\_|,------.(,------.       ;-----.\(,------.,--.     .-'),-----. ,--./  .--.     
//  /    _ | |  .---' |  .---'       | .-.  | |  .---'|  |.-')( OO'  .-.  '|      |  |     
//  \  :` `. |  |     |  |           | '-' /_)|  |    |  | OO )   |  | |  ||  |   |  |,    
//   '..`''.||  '--. (|  '--.        | .-. `.(|  '--. |  |`-' \_) |  |\|  ||  |.'.|  |_)   
//  .-._)   \|  .--'  |  .--'        | |  \  ||  .--'(|  '---.' \ |  | |  ||         |     
//  \       /|  `---. |  `---.       | '--'  /|  `---.|      |   `'  '-'  '|   ,'.   |     
//   `-----' `------' `------'       `------' `------'`------'     `-----' '--'   '--'     
                                                                                   

		var dataPointRangeCounter = dataPointRange;
		var dataPointRect = new Rectangle(
							new Point(width / dateRange * (dateRange / dataPointRange), (view.bounds.bottom - 100)), 
							new Size(((width / dateRange) * dataPointRange), 10)
						);
			var path = new Path.Rectangle(dataPointRect);
				path.fillColor = {
				hue: Math.random() * 360,
				saturation: 1,
				brightness: 1
				};


//    .-')     ('-.     ('-.           ('-.    .-. .-')                    (`-.     ('-.   
//   ( OO ). _(  OO)  _(  OO)         ( OO ).-.\  ( OO )                 _(OO  )_ _(  OO)  
//  (_)---\_|,------.(,------.        / . --. / ;-----.\ .-'),-----. ,--(_/   ,. (,------. 
//  /    _ | |  .---' |  .---'        | \-.  \  | .-.  |( OO'  .-.  '\   \   /(__/|  .---' 
//  \  :` `. |  |     |  |          .-'-'  |  | | '-' /_)   |  | |  | \   \ /   / |  |     
//   '..`''.||  '--. (|  '--.        \| |_.'  | | .-. `.\_) |  |\|  |  \   '   /,(|  '--.  
//  .-._)   \|  .--'  |  .--'         |  .-.  | | |  \  | \ |  | |  |   \     /__)|  .--'  
//  \       /|  `---. |  `---.        |  | |  | | '--'  /  `'  '-'  '    \   /    |  `---. 
//   `-----' `------' `------'        `--' `--' `------'     `-----'      `-'     `------' 


//     _              _   _   _                                  _   _     _       
//    / \   _ __   __| | | |_| |__   ___ _ __    ___  ___  ___  | |_| |__ (_)___ _ 
//   / _ \ | '_ \ / _` | | __| '_ \ / _ | '_ \  / __|/ _ \/ _ \ | __| '_ \| / __(_)
//  / ___ \| | | | (_| | | |_| | | |  __| | | | \__ |  __|  __/ | |_| | | | \__ \_ 
// /_/   \_|_| |_|\__,_|  \__|_| |_|\___|_| |_| |___/\___|\___|  \__|_| |_|_|___(_)
// This is my breakdown of the data i cant figure out. (ie: x)
// ================================================================================================
	// var foo = new Rectangle(new Point(x,y), new Size(width, height))
	// var foo = new Rectangle(new Point( x, view.bounds.bottom - 100 ), new Size(width, 10))
	// var foo = new Rectangle(new Point( x, view.bounds.bottom - 100 ), new Size(((width / dateRange)*datePointRange), 10))
// ================================================================================================                                                                                






// ================================================================================================
		console.log('%cData Start = ' + dataPointStart, 'font-size:20px;background-color:yellow');
		console.log('%cData End = ' + dataPointEnd, 'font-size:20px;background-color:yellow');
		console.log('%cDifference = ' + dataPointRange, 'font-size:20px;background-color:yellow;');
// ================================================================================================
// =================================================
		// // CLEAR INPUT FIELDS FOR NEW DATAPOINT
		// $('.dataPoint-start-input').val('');
		// $('.dataPoint-end-input').val('');
// =================================================
// =========================
// Redraw canvas after click
// =========================
	paper.view.draw();

	});
});


// =======================================================================
	function onResize(event) {
		// Resize the red circle to fill the bounds of the view:
		// rectangle.fitBounds(view.bounds, true);
		// paper.view.update();
	}
// =======================================================================