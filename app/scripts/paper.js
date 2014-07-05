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




// ADD NEW DATA POINT
// =======================================================================
	$('.add').click(function(){
// =============================================
	width = view.size.width;
// Set clickNum to 50, and each time $('.add') is clicked, +50 to clickNum
clickNums()
	function clickNums () {
		clickNum = $(this).data('clickNum');
			if (!clickNum) clickNum = 50;
				$(this).data('clickNum', clickNum += 20);
		checkInputs()
	}
// =============================================

	function checkInputs() {


		// console.clear();
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');

			dataPointName 			= $('.dataPoint-name-input').val();
			dataPointStartString 	= $('.dataPoint-start-input').val();
			dataPointEndString 		= $('.dataPoint-end-input').val();
				dataPointStart		= parseInt(dataPointStartString);
				dataPointEnd		= parseInt(dataPointEndString);
				dataPointRange		= dataPointEnd - dataPointStart;
				checkName()

		function checkName () {
			if(dataPointName.trim() == "") { // note the trim for eliminating empty spaces
				alert('Please enter a name of your new data point.');
				// return;
				} else { checkInputs() }
			}

		// function checkStart () {
		// 	if(dataPointStartString.trim() == "") {
		// 		alert('Need beginning year.');
		// 		// return;
		// 		} else if(dataPointStart < 1000) {
		// 			alert('Year needs to match YYYY')
		// 			} else if(dataPointStart < startYear) {
		// 				alert('START should be after the graph\'s start year.')
		// 				} else if(dataPointStart > dataPointEnd) {
		// 					alert('START needs to be a year before END')
		// 					} else { checkEnd() }
		// 		}

		// function checkEnd () {
		// 	if(dataPointEndString.trim() == "") {
		// 		alert('Need ending year.');
		// 		// return;
		// 		} else if(dataPointEnd < 1000) {
		// 			alert('END needs to match YYYY')
		// 			} else if(dataPointEnd > endYear) {
		// 				alert('END should be before the graph\'s end year.')
		// 				} else { renderData() }
		// 			}

		function checkInputs(){
			switch (true)
				{
				// Check Start Input
				// =============================================
				case (dataPointStartString.trim() == ""):
				alert('Need beginning year.');
				$(this).data('clickNum', clickNum -= 20);
				break;
					case (dataPointStart < 1000):
					alert('Year needs to match YYYY');
					$(this).data('clickNum', clickNum -= 20);
					break;
						case (dataPointStart < startYear):
						alert('START should be after the graph\'s start year.');
						$(this).data('clickNum', clickNum -= 20);
						break;
							case (dataPointStart > dataPointEnd):
							alert('START needs to be a year before END');
							$(this).data('clickNum', clickNum -= 20);
							break;
				// =============================================

				// Check End Input
				// =============================================
				case (dataPointEndString.trim() == ""):
				alert('Need ending year.');
				$(this).data('clickNum', clickNum -= 20);
				break;
					case (dataPointEnd < 1000):
					alert('END needs to match YYYY');
					$(this).data('clickNum', clickNum -= 20);
					break;
						case (dataPointEnd > endYear):
						alert('END should be before the graph\'s end year.');
						$(this).data('clickNum', clickNum -= 20);
						break;
							// case ():
							// // statement
							// break;
				// =============================================
				default: 
				renderData();
				}
			}
		}





	// function dataInputs () {
		function renderData(){
		console.log(clickNum)


		// Use clickNum to change Y location of data point
		// =============================================
		var dataPointRangeCounter = dataPointRange;
		var dataPointRect = new Rectangle(
							new Point((width / dateRange) * (dataPointStart - startYear), (view.bounds.bottom - clickNum)), 
							new Size(((width / dateRange) * dataPointRange), 14)
							);

							var path = new Path.Rectangle(dataPointRect);
								path.fillColor = {
								hue: Math.random() * 360,
								saturation: 1,
								brightness: 1
								};

		var dataPointNameListing = new PointText(0, (view.bounds.bottom - clickNum));
			dataPointNameListing.content = dataPointName;
			dataPointNameListing.fillColor = 'white';
			// dataPointNameListing.rotate(300);
			// dataPointNameListing.position.x -=14;
			dataPointNameListing.position.y +=11;

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
// Redraw canvas after click
// =========================
	paper.view.draw();
// =========================
		}
	// }
	});
});


// =======================================================================
	function onResize(event) {
		// Resize the red circle to fill the bounds of the view:
		// rectangle.fitBounds(view.bounds, true);
		// paper.view.update();
	}
// =======================================================================

//    .-')     ('-.     ('-.        .-. .-')    ('-.                         (`\ .-') /`   
//   ( OO ). _(  OO)  _(  OO)       \  ( OO ) _(  OO)                         `.( OO ),'   
//  (_)---\_|,------.(,------.       ;-----.\(,------.,--.     .-'),-----. ,--./  .--.     
//  /    _ | |  .---' |  .---'       | .-.  | |  .---'|  |.-')( OO'  .-.  '|      |  |     
//  \  :` `. |  |     |  |           | '-' /_)|  |    |  | OO )   |  | |  ||  |   |  |,    
//   '..`''.||  '--. (|  '--.        | .-. `.(|  '--. |  |`-' \_) |  |\|  ||  |.'.|  |_)   
//  .-._)   \|  .--'  |  .--'        | |  \  ||  .--'(|  '---.' \ |  | |  ||         |     
//  \       /|  `---. |  `---.       | '--'  /|  `---.|      |   `'  '-'  '|   ,'.   |     
//   `-----' `------' `------'       `------' `------'`------'     `-----' '--'   '--'     
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
