//   ______  ______             ____     __     ______   __  __   ____                           
//  /\__  _\/\__  _\   /'\_/`\ /\  _`\  /\ \   /\__  _\ /\ \/\ \ /\  _`\                         
//  \/_/\ \/\/_/\ \/  /\      \\ \ \L\_\\ \ \  \/_/\ \/ \ \ `\\ \\ \ \L\_\                       
//     \ \ \   \ \ \  \ \ \__\ \\ \  _\L \ \ \  __\ \ \  \ \ , ` \\ \  _\L                       
//      \ \ \   \_\ \__\ \ \_/\ \\ \ \L\ \\ \ \L\ \\_\ \__\ \ \`\ \\ \ \L\ \                     
//       \ \_\  /\_____\\ \_\\ \_\\ \____/ \ \____//\_____\\ \_\ \_\\ \____/                     
//        \/_/  \/_____/ \/_/ \/_/ \/___/   \/___/ \/_____/ \/_/\/_/ \/___/                      
//           ____     ____     ____     ______   ______  ______   _____    __  __                
//          /\  _`\  /\  _`\  /\  _`\  /\  _  \ /\__  _\/\__  _\ /\  __`\ /\ \/\ \               
//          \ \ \/\_\\ \ \L\ \\ \ \L\_\\ \ \L\ \\/_/\ \/\/_/\ \/ \ \ \/\ \\ \ `\\ \              
//           \ \ \/_/_\ \ ,  / \ \  _\L \ \  __ \  \ \ \   \ \ \  \ \ \ \ \\ \ , ` \             
//            \ \ \L\ \\ \ \\ \ \ \ \L\ \\ \ \/\ \  \ \ \   \_\ \__\ \ \_\ \\ \ \`\ \            
//             \ \____/ \ \_\ \_\\ \____/ \ \_\ \_\  \ \_\  /\_____\\ \_____\\ \_\ \_\           
//              \/___/   \/_/\/ / \/___/   \/_/\/_/   \/_/  \/_____/ \/_____/ \/_/\/_/           
//                 ______  _____    _____    __                                                  
//                /\__  _\/\  __`\ /\  __`\ /\ \                                                 
//                \/_/\ \/\ \ \/\ \\ \ \/\ \\ \ \                                                
//                   \ \ \ \ \ \ \ \\ \ \ \ \\ \ \  __                                           
//                    \ \ \ \ \ \_\ \\ \ \_\ \\ \ \L\ \                                          
//                     \ \_\ \ \_____\\ \_____\\ \____/                                          
//                      \/_/  \/_____/ \/_____/ \/___/                                           
//           _          _                   _          _            _                   _        _        
//          /\ \       / /\                /\ \       /\ \         /\ \                /\ \     / /\      
//         /  \ \     / /  \              /  \ \     /  \ \       /  \ \               \ \ \   / /  \     
//        / /\ \ \   / / /\ \            / /\ \ \   / /\ \ \     / /\ \ \              /\ \_\ / / /\ \__  
//       / / /\ \_\ / / /\ \ \          / / /\ \_\ / / /\ \_\   / / /\ \_\            / /\/_// / /\ \___\ 
//      / / /_/ / // / /  \ \ \        / / /_/ / // /_/_ \/_/  / / /_/ / /   _       / / /   \ \ \ \/___/ 
//     / / /__\/ // / /___/ /\ \      / / /__\/ // /____/\    / / /__\/ /   /\ \    / / /     \ \ \       
//    / / /_____// / /_____/ /\ \    / / /_____// /\____\/   / / /_____/    \ \_\  / / /  _    \ \ \      
//   / / /      / /_________/\ \ \  / / /      / / /______  / / /\ \ \  _   / / /_/ / /  /_/\__/ / /      
//  / / /      / / /_       __\ \_\/ / /      / / /_______\/ / /  \ \ \/\_\/ / /__\/ /   \ \/___/ /       
//  \/_/       \_\___\     /____/_/\/_/       \/__________/\/_/    \_\/\/_/\/_______/     \_____\/        
//                                                                                                        
//                                                                                               
// =======================================================================
console.log('%cCanvas width is ' + view.size.width, 'font-size:20px;background-color:orange');
console.log('%cCanvas height is ' + view.size.height, 'font-size:20px;background-color:orange');
// =======================================================================
// VARIABLES
// =======================================================================

// var AsciiLARRY3D		=	true;
// var AsciiIMPOSSIBLE	=	true;
// var AsciiSLANT		=	true;
// var AsciiBULB		=	true;
// var AsciiLEAN		=	true;
// var AsciiMODULAR		=	true;

// =======================================================================
// Load Canvas
// =======================================================================
	// paper.view.center = view.center;

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
// Draw the Splash Animation
// =======================================================================
var star = new Path.Circle(new Point(view.center), 100);
	star.style = {fillColor: 'yellow', strokeColor: null};

	var moonGroup1 = new Path.Circle(new Point(view.center), 200);
	// moonGroup1.style = {strokeColor: 'black'}
	var moonGroup1a = new Path.Circle(new Point(view.center + 800), 25);
		moonGroup1a.style = {
			fillColor: 'rgb(86, 75, 146)',
			// fillColor: 'transparent',
			strokeColor: null};

	// new moonGroup1
	var moonGroup2 = new Path.Circle(new Point(view.center), 200);
	// moonGroup2.style = {strokeColor: 'black'}
	var moonGroup2a = new Path.Circle(new Point(view.center + 100), 5);
		moonGroup2a.style = {
			fillColor: 'rgb(200, 192, 62)',
			// fillColor: 'white',
			strokeColor: null};

	var moonGroup3 = new Path.Circle(new Point(view.center), 200);
	// moonGroup3.style = {strokeColor: 'black'}
	var moonGroup3a = new Path.Circle(new Point(view.center - 200), 5);
		moonGroup3a.style = {
			fillColor: 'rgb(69, 0, 245)',
			// fillColor: 'white',
			strokeColor: null};

	var moonGroup4 = new Path.Circle(new Point(view.center), 200);
	// moonGroup4.style = {strokeColor: 'black'}
	var moonGroup4a = new Path.Circle(new Point(view.center + 200), 5);
		moonGroup4a.style = {
			fillColor: 'rgb(18, 121, 4)',
			// fillColor: 'white',
			strokeColor: null};

	var moonGroup5 = new Path.Circle(new Point(view.center), 200);
	// moonGroup5.style = {strokeColor: 'black'}
	var moonGroup5a = new Path.Circle(new Point(view.center + 140), 5);
		moonGroup5a.style = {
			fillColor: 'rgb(168, 101, 54)',
			// fillColor: 'white',
			strokeColor: null};

	var moonGroup6 = new Path.Circle(new Point(view.center), 200);
	// moonGroup6.style = {strokeColor: 'black'}
	var moonGroup6a = new Path.Circle(new Point(view.center + 300), 10);
		moonGroup6a.style = {
			fillColor: 'rgb(168, 11, 54)',
			// fillColor: 'white',
			strokeColor: null};

	var moonGroup7 = new Path.Circle(new Point(view.center), 250);
	// moonGroup2.style = {strokeColor: 'black'}
	var moonGroup7a = new Path.Circle(new Point(view.center - 400), 10);
		moonGroup7a.style = {
			fillColor: 'rgb(168, 11, 255)',
			// fillColor: 'white',
			strokeColor: null};

		// var group1 = new Group([moonGroup1, moonGroup1a]);
		var group2 = new Group([moonGroup2, moonGroup2a]);
		var group3 = new Group([moonGroup3, moonGroup3a]);
		var group4 = new Group([moonGroup4, moonGroup4a]);
		var group5 = new Group([moonGroup5, moonGroup5a]);
		var group6 = new Group([moonGroup6, moonGroup6a]);
		var group7 = new Group([moonGroup7, moonGroup7a]);

		var point1 = moonGroup1.center;
		// var point2 = copy.bounds.bottomLeft;

		function onFrame(event){
			// group1.rotate(0.5, point1);
			group2.rotate(3, point1);
			group3.rotate(1, point1);
			group4.rotate(1, point1);
			group5.rotate(1.5, point1);
			group6.rotate(0.8, point1);
			group7.rotate(0.6, point1);
			// group.fillColor.hue = Math.random() * 50.5°;
		}

// =======================================================================
//         ____   ____   ___  _       __                  
//        / __ \ / __ \ /   || |     / /                  
//       / / / // /_/ // /| || | /| / /                   
//      / /_/ // _, _// ___ || |/ |/ /                    
//     /_____//_/ |_|/_/  |_||__/|__/                     
//    ______ ____ __  ___ ______ __     ____ _   __ ______
//   /_  __//  _//  |/  // ____// /    /  _// | / // ____/
//    / /   / / / /|_/ // __/  / /     / / /  |/ // __/   
//   / /  _/ / / /  / // /___ / /___ _/ / / /|  // /___   
//  /_/  /___//_/  /_//_____//_____//___//_/ |_//_____/   
//                                                          
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

	startYearString = $('.startYear').val();
	endYearString = $('.endYear').val();
	var startYear = parseInt(startYearString);
	var endYear = parseInt(endYearString);
	var dateRange = (endYear - startYear);

	checkInitialInputs()

	// =====================================
	//          ___ _           __       
	//         / _/(_)____ ___ / /_      
	//        / _// // __/(_-</ __/      
	//       /_/ /_//_/  /___/\__/    __ 
	//      ___ _    __ (_)/ /_ ____ / / 
	//     (_-<| |/|/ // // __// __// _ \
	//    /___/|__,__//_/ \__/ \__//_//_/
	//   ____ ___ _ ___ ___              
	//  / __// _ `/(_-</ -_)             
	//  \__/ \_,_//___/\__/              
	//                                   
	function checkInitialInputs(){
		switch (true) {
			case (startYear >= endYear):
				$('.notification-text').html('START YEAR should come before END YEAR.')
				$('.notification-text').addClass('activated');
				$('.start-year').addClass('has-error');
				$('.end-year').addClass('has-error');
			break;

			case (startYearString.trim() == ""):
				$('.notification-text').html('Need START YEAR.')
				// $('.notification-text').addClass('activated');
				// $('.start-year').addClass('has-error');
				// $('.end-year').removeClass('has-error');
				initialStartHasError();
			break;

			case (endYearString.trim() == ""):
				$('.notification-text').html('Need END YEAR.')
				// $('.notification-text').addClass('activated');
				// $('.end-year').addClass('has-error');
				// $('.start-year').removeClass('has-error');
				initialEndHasError();
			break;

			case (startYear < 1000):;
				$('.notification-text').html('Year needs to match YYYY')
				// $('.notification-text').addClass('activated');
				// $('.start-year').addClass('has-error');
				// $('.end-year').removeClass('has-error');
				initialStartHasError();
			break;

			case (endYear < 1000):
				$('.notification-text').html('Year needs to match YYYY')
				// $('.notification-text').addClass('activated');
				// $('.end-year').addClass('has-error');
				// $('.start-year').removeClass('has-error');
				initialEndHasError();
			break;

			default:
			$('.notification-text').removeClass('activated');
			$('.start-year').removeClass('has-error');
			$('.end-year').removeClass('has-error');
			initializePath();
		}
	}

	function initialStartHasError (){
		$('.notification-text').addClass('activated');
		$('.start-year').addClass('has-error');
		$('.end-year').removeClass('has-error');
	}

	function initialEndHasError (){
		$('.notification-text').addClass('activated');
		$('.end-year').addClass('has-error');
		$('.start-year').removeClass('has-error');
	}


	// =======================================================================
	console.log('%cThe span of dates being viewed is ' + (dateRange - 1) + ' years.', 'font-size:20px;color:green');
	console.log('%cStartYear is ' + startYear, 'font-size:20px;color:green')
	// =======================================================================
	var width, height, center;

	// NEW SOLUTION
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
		var path = new Path();
		var referencePath = new Path();
			path.strokeWidth = 3;
			path.strokeColor = '#d9534f';

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
		var to = new Point(width / dateRange * i,(view.bounds.bottom - 52));
			var referencePath = new Path.Line(from, to);
				referencePath.style = style;
				referencePath.strokeColor = 'black';
				// referencePath.strokeWidth = '5';
			}
	}
	// =======================================================================
	//                         __                  
	//      ____ ___  ____ ___/ /____ ___ _ _    __
	//     / __// -_)/___// _  // __// _ `/| |/|/ /
	//    /_/   \__/      \_,_//_/   \_,_/ |__,__/ 
	//   ____ ___ _ ___  _  __ ___ _ ___           
	//  / __// _ `// _ \| |/ // _ `/(_-<           
	//  \__/ \_,_//_//_/|___/ \_,_//___/           
	//                                             
	// =========================
	// Redraw canvas after click
	// =========================
	paper.view.draw();


// =======================================================================
//		     ____   ____   ___  _       __                                       
//		    / __ \ / __ \ /   || |     / /                                       
//		   / / / // /_/ // /| || | /| / /                                        
//		  / /_/ // _, _// ___ || |/ |/ /                                         
//		 /_____//_/ |_|/_/  |_||__/|__/                                          
//      ____   ___   ______ ___       ____   ____   ____ _   __ ______ _____
//     / __ \ /   | /_  __//   |     / __ \ / __ \ /  _// | / //_  __// ___/
//    / / / // /| |  / /  / /| |    / /_/ // / / / / / /  |/ /  / /   \__ \ 
//   / /_/ // ___ | / /  / ___ |   / ____// /_/ /_/ / / /|  /  / /   ___/ / 
//  /_____//_/  |_|/_/  /_/  |_|  /_/     \____//___//_/ |_/  /_/   /____/  
//                                                                          
// ADD NEW DATA POINT
// =======================================================================
	$('.add').click(function(){
	// =============================================
	//                            __ 
	//      ____ ___  __ __ ___  / /_
	//     / __// _ \/ // // _ \/ __/
	//     \__/ \___/\_,_//_//_/\__/ 
	//         __ _       __         
	//   ____ / /(_)____ / /__ ___   
	//  / __// // // __//  '_/(_-<   
	//  \__//_//_/ \__//_/\_\/___/   
	//                               
	// Set clickNum to 50, and each time $('.add') is clicked, +50 to clickNum
	clickNums()
	function clickNums () {
		clickNum = $(this).data('clickNum');
		console.log(clickNum)
		if (!clickNum) clickNum = -19;
		$(this).data('clickNum', clickNum += 20);
		checkInputs();
	}

	// ====================================================
	//       _                   __                      
	//      (_)___   ___  __ __ / /_                     
	//     / // _ \ / _ \/ // // __/                     
	//    /_//_//_// .__/\_,_/ \__/                      
	//            /_/ __ _     __       __   _           
	//   _  __ ___ _ / /(_)___/ /___ _ / /_ (_)___   ___ 
	//  | |/ // _ `// // // _  // _ `// __// // _ \ / _ \
	//  |___/ \_,_//_//_/ \_,_/ \_,_/ \__//_/ \___//_//_/
	//                                                   
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
			// Use clickNum to change Y location of data point
			// =============================================
			if(dataPointName.trim() == "") { // note the trim for eliminating empty spaces
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('Please enter a name of your new data point.');
					$('.notification-text').addClass('activated');
					$('.data-point-name').addClass('has-error');
					$('.data-point-start').removeClass('has-error');
					$('.data-point-end').removeClass('has-error');
				} else { 
					checkInputs();
					$('.data-point-name').removeClass('has-error');
				}
			}

		// =====================================
		//                                      __
		//         ___ ___  ____ ___   ___  ___/ /
		//        (_-</ -_)/ __// _ \ / _ \/ _  / 
		//       /___/\__/ \__/ \___//_//_/\_,_/  
		//      ___ _    __ (_)/ /_ ____ / /      
		//     (_-<| |/|/ // // __// __// _ \     
		//    /___/|__,__//_/ \__/ \__//_//_/     
		//   ____ ___ _ ___ ___                   
		//  / __// _ `/(_-</ -_)                  
		//  \__/ \_,_//___/\__/                   
		//
		function checkInputs(){
			switch (true)
				{
				// =========================================================
				// Check End Input First, because of a bug if start is first
				// =========================================================
				case (dataPointEnd < 1000):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('END needs to match YYYY');
					endHasError();
				break;

				case (dataPointEndString.trim() == ""):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('Need END year.')
					endHasError();
				break;

				case (dataPointEnd > endYear):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('END should be before the graph\'s end year.');
					endHasError();
				break;
				// =========================================================
				// Check Start Input
				// =========================================================
				case (dataPointStartString.trim() == ""):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('Need beginning year.');
					startHasError();
				break;

				case (dataPointStart < 1000):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('Year needs to match YYYY');
					startHasError();
				break;

				case (dataPointStart < startYear):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('START should be after the graph\'s start year.');
					startHasError()
				break;

				case (dataPointStart > dataPointEnd):
				$(this).data('clickNum', clickNum -= 20);
					$('.notification-text').html('START needs to be a year before END');
					startHasError();
					$('.data-point-end').addClass('has-error');
				break;
				// case ():
				// // statement
				// break;
				// =============================================
				default:
					$('.notification-text').removeClass('activated');
					$('.data-point-start').removeClass('has-error');
					$('.data-point-name').removeClass('has-error');
					$('.data-point-end').removeClass('has-error');
					renderData();
				}
			}
		}

			// ========================================================
			// Functions for adding and removing classes for validation
			// ========================================================
			function startHasError (){
				$('.notification-text').addClass('activated');
				$('.data-point-start').addClass('has-error');
				$('.data-point-name').removeClass('has-error');
				$('.data-point-end').removeClass('has-error');
			}

			function endHasError (){
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
		function renderData(){
		$('.notification-text').removeClass('activated');
		console.log(clickNum)
		width = view.size.width;
		var dataPointRangeCounter = dataPointRange;
		var dataPointRect = new Rectangle(
							new Point((width / dateRange) * (dataPointStart - startYear), (view.bounds.top + clickNum)),
							new Size(((width / dateRange) * dataPointRange), 20)
							);

							var path = new Path.Rectangle(dataPointRect);
								path.fillColor = {
									hue: Math.random() * 360,
									saturation: 1,
									brightness: 1
								};
								path.fillColor = 'white';

		var dataPointNameListing = new PointText(0, (view.bounds.top + clickNum));
			dataPointNameListing.content = dataPointName;
			dataPointNameListing.fillColor = 'white';
			dataPointNameListing.position.y +=11;
		// ================================================================================================
			console.log('%cName = ' + dataPointName, 'font-size:20px;background-color:yellow');
			console.log('%cStart = ' + dataPointStart, 'font-size:20px;background-color:yellow');
			console.log('%cEnd = ' + dataPointEnd, 'font-size:20px;background-color:yellow');
			console.log('%cDifference = ' + dataPointRange, 'font-size:20px;background-color:yellow;');
		// ================================================================================================
		// CLEAR INPUT FIELDS FOR NEW DATAPOINT
		// =================================================
			// $('.dataPoint-name-input').val('');
			// $('.dataPoint-start-input').val('');
			// $('.dataPoint-end-input').val('');
		// =================================================
		// Redraw canvas after click
		// =========================
			paper.view.draw();
		// =========================
		}
	});
});

// =======================================================================
	function onResize(event) {
		// Resize the red circle to fill the bounds of the view:
		// rectangle.fitBounds(view.bounds, true);
		// paper.view.update();
	}
// =======================================================================


//   ____    ____    ______   ____    __  __  ____     ____                            
//  /\  _`\ /\  _`\ /\__  _\ /\  _`\ /\ \/\ \/\  _`\  /\  _`\                          
//  \ \,\L\_\ \ \/\_\/_/\ \/ \ \ \L\_\ \ `\\ \ \ \/\_\\ \ \L\_\                        
//   \/_\__ \\ \ \/_/_ \ \ \  \ \  _\L\ \ , ` \ \ \/_/_\ \  _\L                        
//     /\ \L\ \ \ \L\ \ \_\ \__\ \ \L\ \ \ \`\ \ \ \L\ \\ \ \L\ \                      
//     \ `\____\ \____/ /\_____\\ \____/\ \_\ \_\ \____/ \ \____/                      
//      \/_____/\/___/  \/_____/ \/___/  \/_/\/_/\/___/   \/___/                       
//           ____    ______   ____    ______  ______   _____   __  __                  
//          /\  _`\ /\__  _\ /\  _`\ /\__  _\/\__  _\ /\  __`\/\ \/\ \                 
//          \ \ \L\_\/_/\ \/ \ \ \/\_\/_/\ \/\/_/\ \/ \ \ \/\ \ \ `\\ \                
//           \ \  _\/  \ \ \  \ \ \/_/_ \ \ \   \ \ \  \ \ \ \ \ \ , ` \               
//            \ \ \/    \_\ \__\ \ \L\ \ \ \ \   \_\ \__\ \ \_\ \ \ \`\ \              
//             \ \_\    /\_____\\ \____/  \ \_\  /\_____\\ \_____\ \_\ \_\             
//              \/_/    \/_____/ \/___/    \/_/  \/_____/ \/_____/\/_/\/_/             
//                 ______  ______            ____    __     ______   __  __  ____      
//                /\__  _\/\__  _\   /'\_/`\/\  _`\ /\ \   /\__  _\ /\ \/\ \/\  _`\    
//                \/_/\ \/\/_/\ \/  /\      \ \ \L\_\ \ \  \/_/\ \/ \ \ `\\ \ \ \L\_\  
//                   \ \ \   \ \ \  \ \ \__\ \ \  _\L\ \ \  __\ \ \  \ \ , ` \ \  _\L  
//                    \ \ \   \_\ \__\ \ \_/\ \ \ \L\ \ \ \L\ \\_\ \__\ \ \`\ \ \ \L\ \
//                     \ \_\  /\_____\\ \_\\ \_\ \____/\ \____//\_____\\ \_\ \_\ \____/
//                      \/_/  \/_____/ \/_/ \/_/\/___/  \/___/ \/_____/ \/_/\/_/\/___/ 
//                                                                                     
//                                                                                      

$('.scifi').click(function(){
		if (scifi.results.length > 27) {
	  		// $('#myCanvas').css('max-height', "1300px")
	  		// $( "#myCanvas" ).prop( "height", "1300" );
	  		// $( "#myCanvas" ).addClass( "activated" );
	  		// view.size.height = 1300;
	  	}
		// 27 media events is the current cap limit
		startYearString = $('.startYear').val('1985');
		endYearString = $('.endYear').val('2017');
		var startYear = parseInt(startYearString);
		var endYear = parseInt(endYearString);
		var dateRange = (endYear - startYear);
	$( ".go" ).click();
	  // comparator: function( Photo ) { return Photo.get('_id')}
		for (i = 0; i < scifi.results.length; i++) {
			// TVname = events.media.tv[i].name
			// TVstart = events.media.tv[i].start
			// TVend = events.media.tv[i].end
			TVname = scifi.results[i].name
			TVstart = scifi.results[i].start
			TVend = scifi.results[i].end
			dataPointName 			= $('.dataPoint-name-input').val(TVname);
			dataPointStartString 	= $('.dataPoint-start-input').val(TVstart);
			dataPointEndString 		= $('.dataPoint-end-input').val(TVend);
		$('.add').click()
			$('.dataPoint-name-input').val('');
			$('.dataPoint-start-input').val('');
			$('.dataPoint-end-input').val('');
		}
		console.log(view.size.width)
			  	paper.view.draw();
			  	paper.view.update();

})















