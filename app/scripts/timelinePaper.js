//   __                            ___                             
//  /\ \__  __                    /\_ \    __                      
//  \ \ ,_\/\_\    ___ ___      __\//\ \  /\_\    ___      __      
//   \ \ \/\/\ \ /' __` __`\  /'__`\\ \ \ \/\ \ /' _ `\  /'__`\    
//    \ \ \_\ \ \/\ \/\ \/\ \/\  __/ \_\ \_\ \ \/\ \/\ \/\  __/    
//     \ \__\\ \_\ \_\ \_\ \_\ \____\/\____\\ \_\ \_\ \_\ \____\   
//      \/__/ \/_/\/_/\/_/\/_/\/____/\/____/ \/_/\/_/\/_/\/____/   
//           ____                                                  
//          /\  _`\                                   __           
//          \ \ \L\ \ __     _____      __   _ __    /\_\    ____  
//           \ \ ,__/'__`\  /\ '__`\  /'__`\/\`'__\  \/\ \  /',__\ 
//            \ \ \/\ \L\.\_\ \ \L\ \/\  __/\ \ \/ __ \ \ \/\__, `\
//             \ \_\ \__/.\_\\ \ ,__/\ \____\\ \_\/\_\_\ \ \/\____/
//              \/_/\/__/\/_/ \ \ \/  \/____/ \/_/\/_/\ \_\ \/___/ 
//                             \ \_\                 \ \____/      
//                              \/_/                  \/___/       
// =======================================================================
// Load Canvas
// =============================================================

// ============================================
//   _____   ____    ____    ______  ______   
//  /\  __`\/\  _`\ /\  _`\ /\__  _\/\__  _\  
//  \ \ \/\ \ \ \L\ \ \ \L\ \/_/\ \/\/_/\ \/  
//   \ \ \ \ \ \ ,  /\ \  _ <' \ \ \   \ \ \  
//    \ \ \_\ \ \ \\ \\ \ \L\ \ \_\ \__ \ \ \ 
//     \ \_____\ \_\ \_\ \____/ /\_____\ \ \_\
//      \/_____/\/_/\/ /\/___/  \/_____/  \/_/
//                                            
// ============================================

// var yellow = 'rgba(200, 192, 62, 1)'

// 	var star = new Path.Circle(new Point(view.center), 100);
// 	star.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var starPoint = star.position
// 	console.log(starPoint)

// 	var moonGroup1 = new Path.Circle(new Point(starPoint), 122);
// 	// moonGroup1.style = {strokeColor: 'black'};
// 	var moonGroup1a = new Path.Circle(new Point(starPoint + 85), 5);
// 	moonGroup1a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup2 = new Path.Circle(new Point(starPoint), 142);
// 	// moonGroup2.style = {strokeColor: 'black'};
// 	var moonGroup2a = new Path.Circle(new Point(starPoint + 100), 5);
// 	moonGroup2a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup3 = new Path.Circle(new Point(starPoint), 172);
// 	// moonGroup3.style = {strokeColor: 'black'};
// 	var moonGroup3a = new Path.Circle(new Point(starPoint + 120), 5);
// 	moonGroup3a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup4 = new Path.Circle(new Point(starPoint), 200);
// 	// moonGroup4.style = {strokeColor: 'black'};
// 	var moonGroup4a = new Path.Circle(new Point(starPoint + 140), 10);
// 	moonGroup4a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup5 = new Path.Circle(new Point(starPoint), 232);
// 	// moonGroup5.style = {strokeColor: 'black'};
// 	var moonGroup5a = new Path.Circle(new Point(starPoint + 165), 5);
// 	moonGroup5a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup6 = new Path.Circle(new Point(starPoint), 280);
// 	// moonGroup6.style = {strokeColor: 'black'};
// 	var moonGroup6a = new Path.Circle(new Point(starPoint + 200), 5);
// 	moonGroup6a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup7 = new Path.Circle(new Point(starPoint), 360);
// 	// moonGroup7.style = {strokeColor: 'black'};
// 	var moonGroup7a = new Path.Circle(new Point(starPoint + 255), 25);
// 	moonGroup7a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var moonGroup8 = new Path.Circle(new Point(starPoint), 450);
// 	// moonGroup8.style = {strokeColor: 'black'};
// 	var moonGroup8a = new Path.Circle(new Point(starPoint + 325), 35);
// 	moonGroup8a.style = {
// 		fillColor: yellow,
// 		strokeColor: null
// 	};

// 	var point1 = moonGroup1.center;

// 	var group1 = new Group([moonGroup1, moonGroup1a]);
// 	var group2 = new Group([moonGroup2, moonGroup2a]);
// 	var group3 = new Group([moonGroup3, moonGroup3a]);
// 	var group4 = new Group([moonGroup4, moonGroup4a]);
// 	var group5 = new Group([moonGroup5, moonGroup5a]);
// 	var group6 = new Group([moonGroup6, moonGroup6a]);
// 	var group7 = new Group([moonGroup7, moonGroup7a]);
// 	var group8 = new Group([moonGroup8, moonGroup8a]);

// 	function onFrame(event) {
// 		group1.rotate(3, point1);
// 		group2.rotate(2.5, point1);
// 		group3.rotate(2.1, point1);
// 		group4.rotate(1.8, point1);
// 		group5.rotate(1.4, point1);
// 		group6.rotate(1, point1);
// 		group7.rotate(0.8, point1);
// 		group8.rotate(0.6, point1);
// 	}

// =======================================================================
//         _____  ____   __     ___    _____  __  __               
//        / ___/ / __ \ / /    /   |  / ___/ / / / /               
//        \__ \ / /_/ // /    / /| |  \__ \ / /_/ /                
//       ___/ // ____// /___ / ___ | ___/ // __  /                 
//      /____//_/    /_____//_/  |_|/____//_/ /_/                  
//      ___     _   __ ____ __  ___ ___   ______ ____ ____   _   __
//     /   |   / | / //  _//  |/  //   | /_  __//  _// __ \ / | / /
//    / /| |  /  |/ / / / / /|_/ // /| |  / /   / / / / / //  |/ / 
//   / ___ | / /|  /_/ / / /  / // ___ | / /  _/ / / /_/ // /|  /  
//  /_/  |_|/_/ |_//___//_/  /_//_/  |_|/_/  /___/ \____//_/ |_/   
//                                                         
// =======================================================================
// Text
// =======================================================================
// Create a centered text item at the center of the view:
var splashText = new PointText({
	point: view.bounds.topCenter,
	justification: 'center',
	fontSize: 20,
	// fontFamily: 'Lato',
	fontWeight: '500',
	blendMode: 'xor',
	fillColor: {
		hue: Math.random() * 360,
		saturation: 0.5,
		brightness: 1
	},
	content: "\n   Hello, welcome to the   \nTimeline Creation Tool!\nTake a look at the input\nfields above this area.\n\nInput a START YEAR\nand an END YEAR.\n"
});
splashText.position.y += 50;
splashText.fitBounds(view.bounds);

// =======================================================================
// Set the events to keep the instructions where the mouse points
// =======================================================================
function onMouseDown(event) {
	splashText.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
	};
}

function onMouseMove(event) {
	// point1 = event.point;
	// splashText.position = event.point;
	splashText.fillColor.hue += 1;
}

// =======================================================================
//       __     __  _                      _      _ 
//     _/ /   _/_/ ( )      ____ _  ____  ( )    | |
//    / __/  / /   |/      / __ `/ / __ \ |/     / /
//   (_  )  / /        _  / /_/ / / /_/ /       / / 
//  /  _/  / /        (_) \__, /  \____/      _/_/  
//  /_/    |_|           /____/              /_/    
//
// =======================================================================
// Draw canvas elements onClick of $('.go')
// =======================================================================
$('.go').click(function() {
	project.clear();
	// =================================================
	// Click Global Variables
	// =================================================
	var width, height, center, top, left, right, bottom;
	width = view.size.width;
	height = view.size.height;
	center = view.center;
	top = view.bounds.top;
	left = view.bounds.left;
	right = view.bounds.right;
	bottom = view.bounds.bottom;
	// =================================================
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

	// =======================================
	// Take date inputs and draw the timeline
	// =======================================
	startYearString = $('.startYear').val();
	endYearString = $('.endYear').val();
	var startYear = parseInt(startYearString);
	var endYear = parseInt(endYearString);
	var dateRange = (endYear - startYear);

	// ===================================================
	//                  __ __                    
	//      ____ ___   / // /___ _ ___   ___ ___ 
	//     / __// _ \ / // // _ `// _ \ (_-</ -_)
	//     \__/ \___//_//_/ \_,_// .__//___/\__/ 
	//       __       __        /_/ __           
	//   ___/ /___ _ / /_ ___  ___ /__ \          
	//  / _  // _ `// __// -_)(_-<  /__/          
	//  \_,_/ \_,_/ \__/ \__//___/ (_)            
	//                                           
	if (dateRange > 10) {
		// collapseDates();
		checkInitialInputs();
	} else {
		checkInitialInputs();
	}

	// =====================================
	//     ___ _           __     _                   __  
	//    / _/(_)____ ___ / /_   (_)___   ___  __ __ / /_ 
	//   / _// // __/(_-</ __/  / // _ \ / _ \/ // // __/ 
	//  /_/ /_//_/  /___/\__/  /_//_//_// .__/\_,_/ \__/  
	//                                /_/                
	//                __ _     __       __   _           
	//   _  __ ___ _ / /(_)___/ /___ _ / /_ (_)___   ___ 
	//  | |/ // _ `// // // _  // _ `// __// // _ \ / _ \
	//  |___/ \_,_//_//_/ \_,_/ \_,_/ \__//_/ \___//_//_/
	//                                                   
	function checkInitialInputs() {
		switch (true) {
			case (startYear >= endYear):
				$('.notification-text').html('START YEAR should come before END YEAR.');
				$('.notification-text').addClass('activated');
				$('.start-year').addClass('has-error');
				$('.end-year').addClass('has-error');
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
				$('.notification-text').removeClass('activated');
				$('.start-year').removeClass('has-error');
				$('.end-year').removeClass('has-error');
				initializePath();
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

	// =================================
	//             ____                 
	//   _______  / / /__ ____  ___ ___ 
	//  / __/ _ \/ / / _ `/ _ \(_-</ -_)
	//  \__/\___/_/_/\_,_/ .__/___/\__/ 
	//           __     /_/             
	//       ___/ /__ _/ /____ ___      
	//      / _  / _ `/ __/ -_|_-<      
	//      \_,_/\_,_/\__/\__/___/      
	//                                  
	function collapseDates() {
		initializeCollapsedPath()
	}

	// ==============================================================
	//     ______ ____   __     __     ___     ____  _____  ______
	//    / ____// __ \ / /    / /    /   |   / __ \/ ___/ / ____/
	//   / /    / / / // /    / /    / /| |  / /_/ /\__ \ / __/   
	//  / /___ / /_/ // /___ / /___ / ___ | / ____/___/ // /___   
	//  \____/ \____//_____//_____//_/  |_|/_/    /____//_____/   
	//      ____   ___   ______ ______ _____                      
	//     / __ \ /   | /_  __// ____// ___/                      
	//    / / / // /| |  / /  / __/   \__ \                       
	//   / /_/ // ___ | / /  / /___  ___/ /                       
	//  /_____//_/  |_|/_/  /_____/ /____/                        
	//    ______ ______ _____ ______                              
	//   /_  __// ____// ___//_  __/                              
	//    / /  / __/   \__ \  / /                                 
	//   / /  / /___  ___/ / / /                                  
	//  /_/  /_____/ /____/ /_/                                   
	//      ______ __  __ _   __ ______ ______ ____ ____   _   __ 
	//     / ____// / / // | / // ____//_  __//  _// __ \ / | / / 
	//    / /_   / / / //  |/ // /      / /   / / / / / //  |/ /  
	//   / __/  / /_/ // /|  // /___   / /  _/ / / /_/ // /|  /   
	//  /_/     \____//_/ |_/ \____/  /_/  /___/ \____//_/ |_/    
	//                                                            
	function initializeCollapsedPath() {
		// =======================================
		// Clear the Splash Animation
		// =======================================
		project.clear();
		// =======================================
		// Replace initial inputs with new inputs
		// =======================================
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');
		// =========================================
		// Take date range inputs, draw the timeline
		// =========================================
		var path = new Path();
		var referencePath = new Path();
		path.strokeWidth = 3;
		path.strokeColor = '#d9534f';
		path.add([left, (bottom - 50)]);
		for (var i = 1; i < dateRange; i++) {
			var dateRange = dateRange / 2;
			var point = new Point(width / dateRange * i, (bottom - 50));
			path.add(point);
		} // for (){}
		path.add([right, (bottom - 50)]);
		initializeCollapsedPointText();
	} // end function initializePath() {}

	function initializeCollapsedPointText() {
		var counter = startYear;
		for (var i = 1; i < dateRange; i++) {
			var dateList = new PointText({
				point: [width / dateRange * i, (bottom - 50)],
				content: (counter += 2),
				fillColor: 'white',
				rotate: 300,
			})
			dateList.position.x -= 14;
			dateList.position.y += 25;
			console.log('hi')
			// var dateList = new PointText(width / dateRange * i, (bottom - 50));
			// 	dateList.content = (counter += 2);
			// 	dateList.fillColor = 'white';
			// 	dateList.rotate(300);
			// 	dateList.position.x -=14;
			// 	dateList.position.y +=25;
		} // end for (){}
		initializeCollapsedReferencePath();
	} // end function initializePointText(){}

	function initializeCollapsedReferencePath() {
		for (var i = 1; i < dateRange; i += 2) {
			var from = new Point(width / dateRange * i, 0);
			var to = new Point(width / dateRange * i, bottom - 52);
			var referencePath = new Path.Line(from, to);
			referencePath.style = style;
			referencePath.strokeColor = 'black';
		} // end for (){}
	} // end function initializeReferencePath(){}
	//      ______ _   __ ____                                    
	//     / ____// | / // __ \                                   
	//    / __/  /  |/ // / / /                                   
	//   / /___ / /|  // /_/ /                                    
	//  /_____//_/ |_//_____/                                     
	//     ______ ____   __     __     ___     ____  _____  ______
	//    / ____// __ \ / /    / /    /   |   / __ \/ ___/ / ____/
	//   / /    / / / // /    / /    / /| |  / /_/ /\__ \ / __/   
	//  / /___ / /_/ // /___ / /___ / ___ | / ____/___/ // /___   
	//  \____/ \____//_____//_____//_/  |_|/_/    /____//_____/   
	//      ____   ___   ______ ______ _____                      
	//     / __ \ /   | /_  __// ____// ___/                      
	//    / / / // /| |  / /  / __/   \__ \                       
	//   / /_/ // ___ | / /  / /___  ___/ /                       
	//  /_____//_/  |_|/_/  /_____/ /____/                        
	//                                                            
	// ==================================================================

	// =================================
	//                       __       
	//      _______ ___  ___/ /__ ____
	//     / __/ -_) _ \/ _  / -_) __/
	//    /_/  \__/_//_/\_,_/\__/_/   
	//       __     __                
	//   ___/ /__ _/ /____ _          
	//  / _  / _ `/ __/ _ `/          
	//  \_,_/\_,_/\__/\_,_/           
	//                                
	function initializePath() {
		// =======================================
		// Clear the Splash Animation
		// =======================================
		project.clear();
		// =======================================
		// Replace initial inputs with new inputs
		// =======================================
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');
		// =======================================
		// Take date inputs and draw the timeline
		// =======================================
		var path = new Path({
			strokeColor: '#d9534f',
			strokeWidth: 3
		});

		var topPath = new Path({
			strokeColor: '#d9534f',
			strokeWidth: 3
		});

		topPath.add([left, (top + 50)]);
		for (var i = 1; i < dateRange; i++) {
			var point = new Point(width / dateRange * i, (top + 50));
			topPath.add(point);
		} // end for (){}
		topPath.add([right, (top + 50)]);
		// initializePointText();

		path.add([left, (bottom - 50)]);
		for (var i = 1; i < dateRange; i++) {
			var point = new Point(width / dateRange * i, (bottom - 50));
			path.add(point);
		} // end for (){}
		path.add([right, (bottom - 50)]);
		initializePointText();
	} // end function initializePath() {}

	function initializePointText() {
		var counter = startYear;

		for (var i = 1; i < dateRange; i++) {
			var dateList = new PointText({
				point: [width / dateRange * i, (top + 8)],
				content: (counter += 1),
				fillColor: 'white'
			})
			dateList.rotate(300)
			dateList.position.x -= 14;
			dateList.position.y += 25;
		} // end for (){}

		var counter = startYear;
		for (var i = 1; i < dateRange; i++) {
			var dateList = new PointText({
				point: [width / dateRange * i, (bottom - 50)],
				content: (counter += 1),
				fillColor: 'white'
			})
			dateList.rotate(300)
			dateList.position.x -= 14;
			dateList.position.y += 25;
		} // end for (){}
		initializeReferencePaths();
	} // end function initializePointText(){}

	function initializeReferencePaths() {
		for (var i = 1; i < dateRange; i++) {
			var from = new Point(width / dateRange * i, top + 52);
			var to = new Point(width / dateRange * i, bottom - 52);
			var referencePath = new Path.Line(from, to);
			referencePath.style = style;
			referencePath.strokeColor = 'black';
		} // end for (){}
	} // end function initializeReferencePaths(){}
	paper.view.draw();



	// ============================================================
	//       __     __  _                   __       __  _      _ 
	//     _/ /   _/_/ ( )     ____ _  ____/ /  ____/ / ( )    | |
	//    / __/  / /   |/     / __ `/ / __  /  / __  /  |/     / /
	//   (_  )  / /        _ / /_/ / / /_/ /  / /_/ /         / / 
	//  /  _/  / /        (_)\__,_/  \__,_/   \__,_/        _/_/  
	//  /_/    |_|                                         /_/    
	//
	// ============================================================
	// Draw new event elements on click of $('.add')
	// =============================================
	$('.add').click(function() {
		//         __ _       __                           __           
		//   ____ / /(_)____ / /__   ____ ___  __ __ ___  / /_ ___  ____
		//  / __// // // __//  '_/  / __// _ \/ // // _ \/ __// -_)/ __/
		//  \__//_//_/ \__//_/\_\   \__/ \___/\_,_//_//_/\__/ \__//_/   
		//                                                              
		// =======================================================================
		// Set clickNum to 52, and each time $('.add') is clicked, +50 to clickNum
		// =======================================================================
		function clickNums() {
			clickNum = $(this).data('clickNum');
			if (!clickNum) clickNum = +52;
			$(this).data('clickNum', clickNum += 20);
		} // end function clickNums(){}
		// =======================================
		// Set a seperate counter to count just +1
		// =======================================
		function clicksOne() {
			clickOne = $(this).data('clickOne');
			if (!clickOne) clickOne = 0;
			$(this).data('clickOne', clickOne += 1);
			// =================================================
			// if statement for putting a cap on allowed events.
			// =================================================
			// if (((clickOne + 1) / 2) === 27) {
			// 	alert('27 individual events is the most that this graph can display');
			// 	$('.add').prop( "disabled", true);
			// }
			// =================================================
			// if statement for putting a cap on allowed events.
			// =================================================
			if (((clickOne + 1) / 2) > (view.size.height - 104) / 20) {
				$('.notification-text').html(clickOne + ' is the total number of points that this graph can display.');
				$('.add').prop( "disabled", true);
				// $('.notification-text').html('START YEAR should come before END YEAR.');
				$('.notification-text').addClass('activated');
			}
			// ===================================
		} // function clicksOne(){}
		clicksOne();
		clickNums();
		checkInputs();
		clicksOne();

		console.log("clickOne:", ((clickOne + 1) / 2) - 0.5);
		console.log("clickNum:", clickNum);

		// ====================================================
		//                                 __   _                   __ 
		//    ___ ___  ____ ___   ___  ___/ /  (_)___   ___  __ __ / /_
		//   (_-</ -_)/ __// _ \ / _ \/ _  /  / // _ \ / _ \/ // // __/
		//  /___/\__/ \__/ \___//_//_/\_,_/  /_//_//_// .__/\_,_/ \__/ 
		//                __ _     __       __   _   /_/               
		//   _  __ ___ _ / /(_)___/ /___ _ / /_ (_)___   ___           
		//  | |/ // _ `// // // _  // _ `// __// // _ \ / _ \          
		//  |___/ \_,_//_//_/ \_,_/ \_,_/ \__//_/ \___//_//_/          
		//                                                             
		function checkInputs() {

			//console.clear();
			$('.dateRange').addClass('activated');
			$('.dataPoint').addClass('activated');
			dataPointName = $('.dataPoint-name-input').val();
			dataPointStartString = $('.dataPoint-start-input').val();
			dataPointEndString = $('.dataPoint-end-input').val();
			dataPointStart = parseInt(dataPointStartString);
			dataPointEnd = parseInt(dataPointEndString);
			dataPointRange = dataPointEnd - dataPointStart;
			checkName();

			function checkName() {
				// Use clickNum to change Y location of data point
				// =============================================
				if (dataPointName.trim() === "") { // note the trim for eliminating empty spaces
					$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('Please enter a name of your new data point.');
					$('.notification-text').addClass('activated');
					$('.data-point-name').addClass('has-error');
					$('.data-point-start').removeClass('has-error');
					$('.data-point-end').removeClass('has-error');
				} else {
					checkInputSwitch();
					$('.data-point-name').removeClass('has-error');
				} // end else{}
			} // end function checkName(){}

			function checkInputSwitch() {
				switch (true) {
					// =========================================================
					// Check End Input First, because of a bug if start is first
					// =========================================================
					// end input
					case (dataPointEnd < 1000):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('END needs to match YYYY');
						endHasError();
						break;

						// start input
					case (dataPointStartString.trim() === ""):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('Need beginning year.');
						startHasError();
						break;

						// end input
					case (dataPointEndString.trim() === ""):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('Need END year.');
						endHasError();
						break;

						// end input
					case (dataPointEnd > endYear):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('END should be before the graph\'s end year.');
						endHasError();
						break;

						// start input
					case (dataPointStart < 1000):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('Year needs to match YYYY');
						startHasError();
						break;

						// start input
					case (dataPointStart < startYear):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('START should be after the graph\'s start year.');
						startHasError();
						break;

						// start input
					case (dataPointStart > dataPointEnd):
						$(this).data('clickNum', clickNum -= 20);
						$('.notification-text').html('START needs to be a year before END');
						startHasError();
						$('.data-point-end').addClass('has-error');
						break;

						// =============================================
					default:
						$('.notification-text').removeClass('activated');
						$('.data-point-start').removeClass('has-error');
						$('.data-point-name').removeClass('has-error');
						$('.data-point-end').removeClass('has-error');
						renderData();
				} // end switch
			} // end function checkInputSwitch(){}
		} // end function checkInputs(){}

		// ========================================================
		// Functions for adding and removing classes for validation
		// ========================================================
		function startHasError() {
			$('.notification-text').addClass('activated');
			$('.data-point-start').addClass('has-error');
			$('.data-point-name').removeClass('has-error');
			$('.data-point-end').removeClass('has-error');
		}

		function endHasError() {
			$('.notification-text').addClass('activated');
			$('.data-point-end').addClass('has-error');
			$('.data-point-name').removeClass('has-error');
			$('.data-point-start').removeClass('has-error');
		}

		// ========================================================
		//                         __                             
		//      ____ ___  ___  ___/ /___  ____   ___  ___  _    __
		//     / __// -_)/ _ \/ _  // -_)/ __/  / _ \/ -_)| |/|/ /
		//    /_/   \__//_//_/\_,_/ \__//_/    /_//_/\__/ |__,__/ 
		//       __       __          ___         _       __      
		//   ___/ /___ _ / /_ ___ _  / _ \ ___   (_)___  / /_     
		//  / _  // _ `// __// _ `/ / ___// _ \ / // _ \/ __/     
		//  \_,_/ \_,_/ \__/ \_,_/ /_/    \___//_//_//_/\__/      
		//                                                        
		function renderData() {
			$('.notification-text').removeClass('activated');
			var dataPointRangeCounter = dataPointRange;

			// ================================================================================================
			// dataPoint Name
			// ================================================================================================
			var dataPointNameListing = new PointText(5, (bottom - clickNum));
				dataPointNameListing.content = dataPointName;
				dataPointNameListing.fillColor = 'white';
				dataPointNameListing.position.y += 14;

			// ================================================================================================
			// dataPoint Background
			// ================================================================================================
			var dataPointNameListingLayerBG = new Layer();
			var dataPointNameListingBG = new Rectangle(
				new Point(0, (bottom - clickNum)),
				new Size(dataPointNameListing.bounds.width + 7, 20)
			);
			var path = new Path.Rectangle(dataPointNameListingBG);
				path.fillColor = '#333333';
				// path.fillColor = 'green';
				dataPointNameListingLayerBG.activate()



			// ================================================================================================
			// dataPoint Reference Path Dashed
			// ================================================================================================
			var dataPointReference = new Path();
				dataPointReference.add(new Point(dataPointNameListing.bounds.width + 10, bottom - clickNum) + 10);
				dataPointReference.add(new Point(right, bottom - clickNum) + 10);
				dataPointReference.fillColor = "white";
				dataPointReference.strokeColor = [0.5];
				dataPointReference.strokeWidth = 3;
				dataPointReference.dashArray = [10, 4];


			// ================================================================================================
			// dataPoint Event
			// ================================================================================================
			if (dataPointRange < 1) {
				var dataPointRect = new Path.Circle({
					center: [(width / dateRange) * (dataPointStart - startYear), ((bottom - clickNum) + 10)],
					radius: 10,
					fillColor: "orange"
				})
				dataPointRect.fillColor = {
					hue: Math.random() * 360,
					saturation: 1,
					brightness: 1
				};
				// end dataPointRect.fillColor = 'white';
			} else {
				var dataPointRect = new Rectangle(
					new Point((width / dateRange) * (dataPointStart - startYear), (bottom - clickNum)),
					new Size(((width / dateRange) * dataPointRange), 20)
				);
				var path = new Path.Rectangle(dataPointRect);
				path.fillColor = {
					hue: Math.random() * 360,
					saturation: 1,
					brightness: 1
				};
				// end path.fillColor = 'white';
			}

			var dataPointNameListingLayer = new Layer(dataPointNameListing);

			// ==================================== 
			// CONSOLE.LOG DATA ENTRIES
			// ================================================================================================
			// console.log('%cName = ' + dataPointName, 'font-size:14px;background-color:yellow');
			// console.log('%cStart = ' + dataPointStart, 'font-size:14px;background-color:yellow');
			// console.log('%cEnd = ' + dataPointEnd, 'font-size:14px;background-color:yellow');
			// console.log('%cDifference = ' + dataPointRange, 'font-size:14px;background-color:yellow;');
			// ================================================================================================
			// CLEAR INPUT FIELDS FOR NEW DATAPOINT
			// =================================================
			// $('.dataPoint-name-input').val('');
			// $('.dataPoint-start-input').val('');
			// $('.dataPoint-end-input').val('');
			// =================================================
			// REDRAW CANVAS ON CLICK OF $('.add')
			// ======================================
			paper.view.draw();
			// ===================
		} // end function renderData(){}
	}); // end $('.add').click(function(){})
}); // end $('.go').click(function(){})
// ====================
// End click functions
// ===============================================================================


// ===============================================================================
//   ____    ____    ______   ____    ______                                     
//  /\  _`\ /\  _`\ /\__  _\ /\  _`\ /\__  _\                                    
//  \ \,\L\_\ \ \/\_\/_/\ \/ \ \ \L\_\/_/\ \/                                    
//   \/_\__ \\ \ \/_/_ \ \ \  \ \  _\/  \ \ \                                    
//     /\ \L\ \ \ \L\ \ \_\ \__\ \ \/    \_\ \__                                 
//     \ `\____\ \____/ /\_____\\ \_\    /\_____\                                
//      \/_____/\/___/  \/_____/ \/_/    \/_____/                                
//           ______  ______            ____    __     ______   __  __  ____      
//          /\__  _\/\__  _\   /'\_/`\/\  _`\ /\ \   /\__  _\ /\ \/\ \/\  _`\    
//          \/_/\ \/\/_/\ \/  /\      \ \ \L\_\ \ \  \/_/\ \/ \ \ `\\ \ \ \L\_\  
//             \ \ \   \ \ \  \ \ \__\ \ \  _\L\ \ \  __\ \ \  \ \ , ` \ \  _\L  
//              \ \ \   \_\ \__\ \ \_/\ \ \ \L\ \ \ \L\ \\_\ \__\ \ \`\ \ \ \L\ \
//               \ \_\  /\_____\\ \_\\ \_\ \____/\ \____//\_____\\ \_\ \_\ \____/
//                \/_/  \/_____/ \/_/ \/_/\/___/  \/___/ \/_____/ \/_/\/_/\/___/ 
//                                                                               
$('.scifi').click(function() {
	project.clear();
	// clicksOne();
	// clickNums();
	// clicksOne();
	// clickNum = 0;
	// console.log(clickOne)
	// console.log(clickNum)
	if (scifi.results.length > 40) {

		var rowHeight = 22;

		console.log('scifi.results.length', scifi.results.length)
		$('#myCanvas').css('height', rowHeight * scifi.results.length + "px")
		$( "#myCanvas" ).prop( "height", rowHeight * scifi.results.length );
		$("#myCanvas").addClass("activated");
		// raster.size = new paper.Size(view.bounds.height, view.bounds.width)
		// raster.size = paperScope.view.viewSize;
		view.bounds.size.height = rowHeight * scifi.results.length;
		console.log('view.bounds.size.height', view.bounds.size.height)
		draw()
	} else {
		draw()
	}


	// view.onResize = function() {
	// 	console.log('resizing')
	// 	// draw();
	// 	$(".go").click();
	// }

	function draw() {

		startYearString = $('.startYear').val('1987');
		endYearString = $('.endYear').val('2014');
		var startYear = parseInt(startYearString);
		var endYear = parseInt(endYearString);
		var dateRange = (endYear - startYear);
		$(".go").click();
		// comparator: function( Photo ) { return Photo.get('_id')}
		for (i = 0; i < scifi.results.length; i++) {
			// TVname = events.media.tv[i].name
			// TVstart = events.media.tv[i].start
			// TVend = events.media.tv[i].end
			TVname = scifi.results[i].name
			TVstart = scifi.results[i].start
			TVend = scifi.results[i].end
			dataPointName = $('.dataPoint-name-input').val(TVname);
			dataPointStartString = $('.dataPoint-start-input').val(TVstart);
			dataPointEndString = $('.dataPoint-end-input').val(TVend);
			$('.add').click()
			// $('.dataPoint-name-input').val('');
			// $('.dataPoint-start-input').val('');
			// $('.dataPoint-end-input').val('');
		}
		console.log(view.size.width)
		paper.view.draw();
	}
})

// ============================================
//   _____   ____    ____    ______  ______   
//  /\  __`\/\  _`\ /\  _`\ /\__  _\/\__  _\  
//  \ \ \/\ \ \ \L\ \ \ \L\ \/_/\ \/\/_/\ \/  
//   \ \ \ \ \ \ ,  /\ \  _ <' \ \ \   \ \ \  
//    \ \ \_\ \ \ \\ \\ \ \L\ \ \_\ \__ \ \ \ 
//     \ \_____\ \_\ \_\ \____/ /\_____\ \ \_\
//      \/_____/\/_/\/ /\/___/  \/_____/  \/_/
//                                            
// ============================================
$('.orbit').click(function() {
	project.clear()
	// project.activeLayer.remove()

	var yellow = 'rgba(200, 192, 62, 1)'

	var star = new Path.Circle(new Point(view.center), 100);
	star.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var starPoint = star.position
	console.log(starPoint)

	var moonGroup1 = new Path.Circle(new Point(starPoint), 122);
	// moonGroup1.style = {strokeColor: 'black'};
	var moonGroup1a = new Path.Circle(new Point(starPoint + 85), 5);
	moonGroup1a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup2 = new Path.Circle(new Point(starPoint), 142);
	// moonGroup2.style = {strokeColor: 'black'};
	var moonGroup2a = new Path.Circle(new Point(starPoint + 100), 5);
	moonGroup2a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup3 = new Path.Circle(new Point(starPoint), 172);
	// moonGroup3.style = {strokeColor: 'black'};
	var moonGroup3a = new Path.Circle(new Point(starPoint + 120), 5);
	moonGroup3a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup4 = new Path.Circle(new Point(starPoint), 200);
	// moonGroup4.style = {strokeColor: 'black'};
	var moonGroup4a = new Path.Circle(new Point(starPoint + 140), 10);
	moonGroup4a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup5 = new Path.Circle(new Point(starPoint), 232);
	// moonGroup5.style = {strokeColor: 'black'};
	var moonGroup5a = new Path.Circle(new Point(starPoint + 165), 5);
	moonGroup5a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup6 = new Path.Circle(new Point(starPoint), 280);
	// moonGroup6.style = {strokeColor: 'black'};
	var moonGroup6a = new Path.Circle(new Point(starPoint + 200), 5);
	moonGroup6a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup7 = new Path.Circle(new Point(starPoint), 360);
	// moonGroup7.style = {strokeColor: 'black'};
	var moonGroup7a = new Path.Circle(new Point(starPoint + 255), 25);
	moonGroup7a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var moonGroup8 = new Path.Circle(new Point(starPoint), 450);
	// moonGroup8.style = {strokeColor: 'black'};
	var moonGroup8a = new Path.Circle(new Point(starPoint + 325), 35);
	moonGroup8a.style = {
		fillColor: yellow,
		strokeColor: null
	};

	var point1 = moonGroup1.center;

	var group1 = new Group([moonGroup1, moonGroup1a]);
	var group2 = new Group([moonGroup2, moonGroup2a]);
	var group3 = new Group([moonGroup3, moonGroup3a]);
	var group4 = new Group([moonGroup4, moonGroup4a]);
	var group5 = new Group([moonGroup5, moonGroup5a]);
	var group6 = new Group([moonGroup6, moonGroup6a]);
	var group7 = new Group([moonGroup7, moonGroup7a]);
	var group8 = new Group([moonGroup8, moonGroup8a]);

	function onFrame(event) {
		group1.rotate(3, point1);
		group2.rotate(2.5, point1);
		group3.rotate(2.1, point1);
		group4.rotate(1.8, point1);
		group5.rotate(1.4, point1);
		group6.rotate(1, point1);
		group7.rotate(0.8, point1);
		group8.rotate(0.6, point1);
	}
})