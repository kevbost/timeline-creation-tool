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
// 
// =======================================================================
console.log('%cCanvas width is ' + view.size.width, 'font-size:20px;background-color:orange');
console.log('%cCanvas height is ' + view.size.height, 'font-size:20px;background-color:orange');
// =======================================================================
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
// Orbit
// =======================================================================
// var yellow = 'rgba(200, 192, 62, 1)'

// var star = new Path.Circle(new Point(view.center), 100);
// 	star.style = {fillColor: yellow, strokeColor: null};

// 	var starPoint = star.position
// 	console.log(starPoint)

// 	var moonGroup1 = new Path.Circle(new Point(starPoint), 122);
// 	// moonGroup1.style = {strokeColor: 'black'};
// 	var moonGroup1a = new Path.Circle(new Point(starPoint + 85), 5);
// 		moonGroup1a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup2 = new Path.Circle(new Point(starPoint), 142);
// 	// moonGroup2.style = {strokeColor: 'black'};
// 	var moonGroup2a = new Path.Circle(new Point(starPoint + 100), 5);
// 		moonGroup2a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup3 = new Path.Circle(new Point(starPoint), 172);
// 	// moonGroup3.style = {strokeColor: 'black'};
// 	var moonGroup3a = new Path.Circle(new Point(starPoint + 120), 5);
// 		moonGroup3a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup4 = new Path.Circle(new Point(starPoint), 200);
// 	// moonGroup4.style = {strokeColor: 'black'};
// 	var moonGroup4a = new Path.Circle(new Point(starPoint + 140), 10);
// 		moonGroup4a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup5 = new Path.Circle(new Point(starPoint), 232);
// 	// moonGroup5.style = {strokeColor: 'black'};
// 	var moonGroup5a = new Path.Circle(new Point(starPoint + 165), 5);
// 		moonGroup5a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup6 = new Path.Circle(new Point(starPoint), 280);
// 	// moonGroup6.style = {strokeColor: 'black'};
// 	var moonGroup6a = new Path.Circle(new Point(starPoint + 200), 5);
// 		moonGroup6a.style = {fillColor: yellow, strokeColor: null};
	
// 	var moonGroup7 = new Path.Circle(new Point(starPoint), 360);
// 	// moonGroup7.style = {strokeColor: 'black'};
// 	var moonGroup7a = new Path.Circle(new Point(starPoint + 255), 25);
// 		moonGroup7a.style = {fillColor: yellow, strokeColor: null};

// 	var moonGroup8 = new Path.Circle(new Point(starPoint), 450);
// 	// moonGroup8.style = {strokeColor: 'black'};
// 	var moonGroup8a = new Path.Circle(new Point(starPoint + 325), 35);
// 		moonGroup8a.style = {fillColor: yellow, strokeColor: null};

// 	var point1 = moonGroup1.center;

// 	var group1 = new Group([moonGroup1, moonGroup1a]);
// 	var group2 = new Group([moonGroup2, moonGroup2a]);
// 	var group3 = new Group([moonGroup3, moonGroup3a]);
// 	var group4 = new Group([moonGroup4, moonGroup4a]);
// 	var group5 = new Group([moonGroup5, moonGroup5a]);
// 	var group6 = new Group([moonGroup6, moonGroup6a]);
// 	var group7 = new Group([moonGroup7, moonGroup7a]);
// 	var group8 = new Group([moonGroup8, moonGroup8a]);

// 	function onFrame(event){
// 		group1.rotate(3, point1);
// 		group2.rotate(2.5, point1);
// 		group3.rotate(2.1, point1);
// 		group4.rotate(1.8, point1);
// 		group5.rotate(1.4, point1);
// 		group6.rotate(1, point1);
// 		group7.rotate(0.8, point1);
// 		group8.rotate(0.6, point1);
// 	}

function onMouseMove(event) {
	// point1 = event.point;
		splashText.position = event.point;
		splashText.fillColor.hue += 0.5;
}
// =======================================================================
// Text
// =======================================================================
// Create a centered text item at the center of the view:
var splashText = new PointText({
	point: view.bounds.topCenter,
	justification: 'center',
	fontSize: 20,
	fillColor: 'yellow',
	content: "Timeline creation tool!  Take a look \nat the input fields above this area \nand input a START YEAR \nand then an END YEAR."
	});
	splashText.fillColor = {
		hue: Math.random() * 360,
		saturation: 0.5,
		brightness: 1
		};
	
	splashText.position.y += 50;
	splashText.fontFamily = 'Lato';
	splashText.fontWeight = '500';
	splashText.fitBounds(view.bounds);
	// splashText.blendMode = 'xor';
	// =======================================================================
	// Set the events to keep the instructions where the mouse points
	// =======================================================================
	// function onMouseMove(event) {
	// 	splashText.position = event.point;
	// 	splashText.fillColor.hue += 0.5;
	// }
	function onMouseDown(event){
		splashText.fillColor = {
			hue: Math.random() * 360,
			saturation: 1,
			brightness: 1
			};
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
	// =================================================
	// Global Variables
	// =================================================
	var width, height, center, top, left, right, bottom;
		width	= view.size.width;
		height	= view.size.height;
		center	= view.center;
		top		= view.bounds.top;
		left	= view.bounds.left;
		right	= view.bounds.right;
		bottom	= view.bounds.bottom;
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
	endYearString	= $('.endYear').val();
	var startYear	= parseInt(startYearString);
	var endYear		= parseInt(endYearString);
	var dateRange	= (endYear - startYear);

	// ===================================================
	//     _ ___     __     __      ___                    
	//    (_) _/ ___/ /__ _/ /____ / _ \___ ____  ___ ____ 
	//   / / _/ / _  / _ `/ __/ -_) , _/ _ `/ _ \/ _ `/ -_)
	//  /_/_/   \_,_/\_,_/\__/\__/_/|_|\_,_/_//_/\_, /\__/ 
	//        __              __                /___/      
	//       / /____  ___    / /__ ________ ____           
	//      / __/ _ \/ _ \  / / _ `/ __/ _ `/ -_) _ _      
	//      \__/\___/\___/ /_/\_,_/_/  \_, /\__(_|_|_)     
	//                                /___/                
	if (dateRange > 10) {
		// collapseDates();
		checkInitialInputs();
	} else {
		checkInitialInputs();
	}

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
		} // switch
	} // function checkInitialInputs(){}
	
	function initialStartHasError(){
		$('.notification-text').addClass('activated');
		$('.start-year').addClass('has-error');
		$('.end-year').removeClass('has-error');
	} // function initialStartHasError(){}

	function initialEndHasError (){
		$('.notification-text').addClass('activated');
		$('.end-year').addClass('has-error');
		$('.start-year').removeClass('has-error');
	} // function initialEndHasError (){}

// =============================================================================================================
console.log('%cThe span of dates being viewed is ' + (dateRange - 1) + ' years.', 'font-size:14px;color:green');
console.log('%cStartYear is ' + startYear, 'font-size:14px;color:green');
console.log('%cEndYear is ' + endYear, 'font-size:14px;color:green');
// =============================================================================================================
	
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

	// ==================================================================
	//     ,-,--.  ,--.--------.   ,---.                  ,--.--------.  
	//   ,-.'-  _\/==/,  -   , -\.--.'  \      .-.,.---. /==/,  -   , -\ 
	//  /==/_ ,_.'\==\.-.  - ,-./\==\-/\ \    /==/  `   \\==\.-.  - ,-./ 
	//  \==\  \    `--`\==\- \   /==/-|_\ |  |==|-, .=., |`--`\==\- \    
	//   \==\ -\        \==\_ \  \==\,   - \ |==|   '='  /     \==\_ \   
	//   _\==\ ,\       |==|- |  /==/ -   ,| |==|- ,   .'      |==|- |   
	//  /==/\/ _ |      |==|, | /==/-  /\ - \|==|_  . ,'.      |==|, |   
	//  \==\ - , /      /==/ -/ \==\ _.\=\.-'/==/  /\ ,  )     /==/ -/   
	//   `--`---'       `--`--`  `--`        `--`-`--`--'      `--`--`   
	//   ,--.--------.    ,----.    ,-,--.  ,--.--------.                
	//  /==/,  -   , -\,-.--` , \ ,-.'-  _\/==/,  -   , -\               
	//  \==\.-.  - ,-./==|-  _.-`/==/_ ,_.'\==\.-.  - ,-./               
	//   `--`\==\- \  |==|   `.-.\==\  \    `--`\==\- \                  
	//        \==\_ \/==/_ ,    / \==\ -\        \==\_ \                 
	//        |==|- ||==|    .-'  _\==\ ,\       |==|- |                 
	//        |==|, ||==|_  ,`-._/==/\/ _ |      |==|, |                 
	//        /==/ -//==/ ,     /\==\ - , /      /==/ -/                 
	//        `--`--``--`-----``  `--`---'       `--`--`                 

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
		// =======================================
		// Take date inputs and draw the timeline
		// =======================================
		var path = new Path();
		var referencePath = new Path();
			path.strokeWidth = 3;
			path.strokeColor = '#d9534f';

			path.segments = [];
			path.add([left,(bottom - 50)]);
			for (var i = 1; i < dateRange; i++){
				var dateRange = dateRange / 2;
				var point = new Point(width / dateRange * i, (bottom - 50));
				path.add(point);
			} // for (){}
				path.add([right,(bottom - 50)]);
				initializeCollapsedPointText();
	} // function initializePath() {}

	function initializeCollapsedPointText(){
		var counter = startYear;
		for (var i = 1; i < dateRange; i++){
			var dateList = new PointText(width / dateRange * i, (bottom - 50));
				dateList.content = (counter += 2);
				dateList.fillColor = 'white';
				dateList.rotate(300);
				dateList.position.x -=14;
				dateList.position.y +=25;
		} // for (){}
		initializeCollapsedReferencePath();
	} // function initializePointText(){}

	function initializeCollapsedReferencePath(){
		for (var i = 1; i < dateRange; i += 2){
			var from = new Point(width / dateRange * i, 0);
			var to = new Point(width / dateRange * i, bottom - 52);
				var referencePath = new Path.Line(from, to);
					referencePath.style = style;
					referencePath.strokeColor = 'black';
		} // for (){}
	} // function initializeReferencePath(){}
	//        ,----.  .-._                                               
	//     ,-.--` , \/==/ \  .-._  _,..---._                             
	//    |==|-  _.-`|==|, \/ /, /==/,   -  \                            
	//    |==|   `.-.|==|-  \|  ||==|   _   _\                           
	//   /==/_ ,    /|==| ,  | -||==|  .=.   |                           
	//   |==|    .-' |==| -   _ ||==|,|   | -|                           
	//   |==|_  ,`-._|==|  /\ , ||==|  '='   /                           
	//   /==/ ,     //==/, | |- ||==|-,   _`/                            
	//   `--`-----`` `--`./  `--``-.`.____.'                             
	//   ,--.--------.    ,----.    ,-,--.  ,--.--------.                
	//  /==/,  -   , -\,-.--` , \ ,-.'-  _\/==/,  -   , -\               
	//  \==\.-.  - ,-./==|-  _.-`/==/_ ,_.'\==\.-.  - ,-./               
	//   `--`\==\- \  |==|   `.-.\==\  \    `--`\==\- \                  
	//        \==\_ \/==/_ ,    / \==\ -\        \==\_ \                 
	//        |==|- ||==|    .-'  _\==\ ,\       |==|- |                 
	//        |==|, ||==|_  ,`-._/==/\/ _ |      |==|, |                 
	//        /==/ -//==/ ,     /\==\ - , /      /==/ -/                 
	//        `--`--``--`-----``  `--`---'       `--`--`                 
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
		var path = new Path();
		var referencePath = new Path();
			path.strokeWidth = 3;
			path.strokeColor = '#d9534f';

			path.segments = [];
			path.add([left,(bottom - 50)]);
			for (var i = 1; i < dateRange; i++){
				var point = new Point(width / dateRange * i, (bottom - 50));
				path.add(point);
			} // for (){}
				path.add([right,(bottom - 50)]);
				initializePointText();
	} // function initializePath() {}

	function initializePointText(){
		var counter = startYear;
		for (var i = 1; i < dateRange; i++){
			var dateList = new PointText(width / dateRange * i, (bottom - 50));
				dateList.content = (counter += 1);
				dateList.fillColor = 'white';
				dateList.rotate(300);
				dateList.position.x -=14;
				dateList.position.y +=25;
				dateList.font
		} // for (){}
		initializeReferencePath();
	} // function initializePointText(){}

	function initializeReferencePath(){
		for (var i = 1; i < dateRange; i++){
			var from = new Point(width / dateRange * i, 0);
			var to = new Point(width / dateRange * i, bottom - 52);
				var referencePath = new Path.Line(from, to);
					referencePath.style = style;
					referencePath.strokeColor = 'black';
		} // for (){}
	} // function initializeReferencePath(){}

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
	clicksOne();
	clickNums();
	function clickNums(){
		clickNum = $(this).data('clickNum');
		if (!clickNum) clickNum = +52;
		$(this).data('clickNum', clickNum +=20);
		checkInputs();
	} // function clickNums(){}

	clicksOne();
	// Set a seperate counter to count just ++
	function clicksOne(){
		clickOne = $(this).data('clickOne');
		if (!clickOne) clickOne = 0;
		$(this).data('clickOne', clickOne += 1);
		// if statement for putting a cap on allowed events.
		// ===================================
				// if (((clickOne + 1) / 2) === 27) {
				// 	alert('27 individual events is the most that this graph can display');
				// 	$('.add').prop( "disabled", true);
				// }
						// if (((clickOne + 1) / 2) > view.size.height / 21.5) {
						// 	alert(clickOne + ' individual events is the most that this graph can display');
						// 	$('.add').prop( "disabled", true);
						// }
		// ===================================
	} // function clicksOne(){}

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
	function checkInputs(){

		//console.clear();
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');
		// $('.dataPoint-name-input').prop( "value", (clickOne + 1) / 2 );

			dataPointName			= $('.dataPoint-name-input').val();
			dataPointStartString	= $('.dataPoint-start-input').val();
			dataPointEndString		= $('.dataPoint-end-input').val();
				dataPointStart		= parseInt(dataPointStartString);
				dataPointEnd		= parseInt(dataPointEndString);
				dataPointRange		= dataPointEnd - dataPointStart;
				checkName();

		function checkName(){
			// Use clickNum to change Y location of data point
			// =============================================
			if(dataPointName.trim() === "") { // note the trim for eliminating empty spaces
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('Please enter a name of your new data point.');
				$('.notification-text').addClass('activated');
				$('.data-point-name').addClass('has-error');
				$('.data-point-start').removeClass('has-error');
				$('.data-point-end').removeClass('has-error');
			} else {
				checkInputSwitch();
				$('.data-point-name').removeClass('has-error');
			} // else{}
		} // function checkName(){}

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
	function checkInputSwitch(){
		switch (true)
			{
			// =========================================================
			// Check End Input First, because of a bug if start is first
			// =========================================================
			// end
			case (dataPointEnd < 1000):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('END needs to match YYYY');
				endHasError();
			break;

			// start
			case (dataPointStartString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('Need beginning year.');
				console.log('its going');
				startHasError();
			break;

			// end
			case (dataPointEndString.trim() === ""):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('Need END year.');
				endHasError();
			break;

			// end
			case (dataPointEnd > endYear):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('END should be before the graph\'s end year.');
				endHasError();
			break;

			// start
			case (dataPointStart < 1000):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('Year needs to match YYYY');
				startHasError();
			break;

			// start
			case (dataPointStart < startYear):
			$(this).data('clickNum', clickNum -= 20);
				$('.notification-text').html('START should be after the graph\'s start year.');
				startHasError();
			break;

			// start
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
			} // switch
		} // function checkInputSwitch(){}
	} // function checkInputs(){}

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
		if (dataPointRange < 1) {
				var dataPointRect = new Path.Circle({
											center: [(width / dateRange) * (dataPointStart - startYear), ((bottom - clickNum) + 7)],
											radius: 10,
											fillColor: "orange"
											})
										dataPointRect.fillColor = {
											hue: Math.random() * 360,
											saturation: 1,
											brightness: 1
											};
										// dataPointRect.fillColor = 'white';
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
									// path.fillColor = 'white';
		}

			$('.notification-text').removeClass('activated');
			console.log("clickOne:", (clickOne + 1) / 2 );
			console.log("clickNum:", clickNum);
			var dataPointRangeCounter = dataPointRange;
			// ================================================================================================
			// dataPointRect
			// ================================================================================================
			var dataPointNameListing = new PointText(0, (bottom - clickNum));
				dataPointNameListing.content = dataPointName;
				dataPointNameListing.fillColor = 'white';
				dataPointNameListing.position.y +=11;
			// ================================================================================================
				console.log('%cName = ' + dataPointName, 'font-size:14px;background-color:yellow');
				console.log('%cStart = ' + dataPointStart, 'font-size:14px;background-color:yellow');
				console.log('%cEnd = ' + dataPointEnd, 'font-size:14px;background-color:yellow');
				console.log('%cDifference = ' + dataPointRange, 'font-size:14px;background-color:yellow;');
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
	} // function renderData(){}
}); // $('.add').click(function(){})
}); // $('.go').click(function(){})


// =======================================================================
// End click functions
// =======================================================================
//                ____                                        
//               /\  _`\                  __                  
//    ___     ___\ \ \L\ \     __    ____/\_\  ____      __   
//   / __`\ /' _ `\ \ ,  /   /'__`\ /',__\/\ \/\_ ,`\  /'__`\ 
//  /\ \L\ \/\ \/\ \ \ \\ \ /\  __//\__, `\ \ \/_/  /_/\  __/ 
//  \ \____/\ \_\ \_\ \_\ \_\ \____\/\____/\ \_\/\____\ \____\
//   \/___/  \/_/\/_/\/_/\/ /\/____/\/___/  \/_/\/____/\/____/
//                                                            
	function onResize(event) {
		// Resize the red circle to fill the bounds of the view:
		// rectangle.fitBounds(view.bounds, true);
		console.log(view.size.width)
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
$('.scifi').click(function(){
		if (scifi.results.length > 27) {
			$('#myCanvas').css('height', "1300px")
			$( "#myCanvas" ).prop( "height", "1300" );
			$( "#myCanvas" ).addClass( "activated" );
			view.size.height = 1300;
		}

		startYearString = $('.startYear').val('1959');
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
})

$('.orbit').click(function(){
// =======================================================================
// Orbit
// =======================================================================
project.clear()

var yellow = 'rgba(200, 192, 62, 1)'

var star = new Path.Circle(new Point(view.center), 100);
	star.style = {fillColor: yellow, strokeColor: null};

	var starPoint = star.position
	console.log(starPoint)

	var moonGroup1 = new Path.Circle(new Point(starPoint), 122);
	// moonGroup1.style = {strokeColor: 'black'};
	var moonGroup1a = new Path.Circle(new Point(starPoint + 85), 5);
		moonGroup1a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup2 = new Path.Circle(new Point(starPoint), 142);
	// moonGroup2.style = {strokeColor: 'black'};
	var moonGroup2a = new Path.Circle(new Point(starPoint + 100), 5);
		moonGroup2a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup3 = new Path.Circle(new Point(starPoint), 172);
	// moonGroup3.style = {strokeColor: 'black'};
	var moonGroup3a = new Path.Circle(new Point(starPoint + 120), 5);
		moonGroup3a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup4 = new Path.Circle(new Point(starPoint), 200);
	// moonGroup4.style = {strokeColor: 'black'};
	var moonGroup4a = new Path.Circle(new Point(starPoint + 140), 10);
		moonGroup4a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup5 = new Path.Circle(new Point(starPoint), 232);
	// moonGroup5.style = {strokeColor: 'black'};
	var moonGroup5a = new Path.Circle(new Point(starPoint + 165), 5);
		moonGroup5a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup6 = new Path.Circle(new Point(starPoint), 280);
	// moonGroup6.style = {strokeColor: 'black'};
	var moonGroup6a = new Path.Circle(new Point(starPoint + 200), 5);
		moonGroup6a.style = {fillColor: yellow, strokeColor: null};
	
	var moonGroup7 = new Path.Circle(new Point(starPoint), 360);
	// moonGroup7.style = {strokeColor: 'black'};
	var moonGroup7a = new Path.Circle(new Point(starPoint + 255), 25);
		moonGroup7a.style = {fillColor: yellow, strokeColor: null};

	var moonGroup8 = new Path.Circle(new Point(starPoint), 450);
	// moonGroup8.style = {strokeColor: 'black'};
	var moonGroup8a = new Path.Circle(new Point(starPoint + 325), 35);
		moonGroup8a.style = {fillColor: yellow, strokeColor: null};

	var point1 = moonGroup1.center;

	var group1 = new Group([moonGroup1, moonGroup1a]);
	var group2 = new Group([moonGroup2, moonGroup2a]);
	var group3 = new Group([moonGroup3, moonGroup3a]);
	var group4 = new Group([moonGroup4, moonGroup4a]);
	var group5 = new Group([moonGroup5, moonGroup5a]);
	var group6 = new Group([moonGroup6, moonGroup6a]);
	var group7 = new Group([moonGroup7, moonGroup7a]);
	var group8 = new Group([moonGroup8, moonGroup8a]);

	function onFrame(event){
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