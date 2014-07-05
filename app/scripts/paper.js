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

		var group1 = new Group([moonGroup1, moonGroup1a]);
		var group2 = new Group([moonGroup2, moonGroup2a]);
		var group3 = new Group([moonGroup3, moonGroup3a]);

		var point1 = moonGroup1.center;
		// var point2 = copy.bounds.bottomLeft;

		function onFrame(event){
			group1.rotate(0.5, point1);
			group2.rotate(2, point1);
			group3.rotate(1, point1);
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
		var to = new Point(width / dateRange * i,(view.bounds.bottom - 50));
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
			if (!clickNum) clickNum = 50;
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
			dataPointNameListing.position.y +=11;
		// ================================================================================================
			console.log('%cData Start = ' + dataPointStart, 'font-size:20px;background-color:yellow');
			console.log('%cData End = ' + dataPointEnd, 'font-size:20px;background-color:yellow');
			console.log('%cDifference = ' + dataPointRange, 'font-size:20px;background-color:yellow;');
		// ================================================================================================
		// CLEAR INPUT FIELDS FOR NEW DATAPOINT
		// =================================================
			$('.dataPoint-name-input').val('');
			$('.dataPoint-start-input').val('');
			$('.dataPoint-end-input').val('');
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
