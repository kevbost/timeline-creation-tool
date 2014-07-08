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
// Draw the Splash Animation
// =======================================================================
var star = new Path.Circle(new Point(view.center), 100);
	star.style = {fillColor: 'orange', strokeColor: null}

	var moonGroup1 = new Path.Circle(new Point(view.center), 122);
	// moonGroup1.style = {strokeColor: 'black'}
	var moonGroup1a = new Path.Circle(new Point(view.center + 85), 5);
		moonGroup1a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup2 = new Path.Circle(new Point(view.center), 142);
	// moonGroup2.style = {strokeColor: 'black'}
	var moonGroup2a = new Path.Circle(new Point(view.center + 100), 5);
		moonGroup2a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup3 = new Path.Circle(new Point(view.center), 172);
	// moonGroup3.style = {strokeColor: 'black'}
	var moonGroup3a = new Path.Circle(new Point(view.center + 120), 5);
		moonGroup3a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup4 = new Path.Circle(new Point(view.center), 200);
	// moonGroup4.style = {strokeColor: 'black'}
	var moonGroup4a = new Path.Circle(new Point(view.center + 140), 10);
		moonGroup4a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup5 = new Path.Circle(new Point(view.center), 232);
	// moonGroup5.style = {strokeColor: 'black'}
	var moonGroup5a = new Path.Circle(new Point(view.center + 165), 5);
		moonGroup5a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup6 = new Path.Circle(new Point(view.center), 280);
	// moonGroup6.style = {strokeColor: 'black'}
	var moonGroup6a = new Path.Circle(new Point(view.center + 200), 5);
		moonGroup6a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};
	
	var moonGroup7 = new Path.Circle(new Point(view.center), 360);
	// moonGroup7.style = {strokeColor: 'black'}
	var moonGroup7a = new Path.Circle(new Point(view.center + 255), 25);
		moonGroup7a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

	var moonGroup8 = new Path.Circle(new Point(view.center), 450);
	// moonGroup8.style = {strokeColor: 'b+ack'}
	var moonGroup8a = new Path.Circle(new Point(view.center + 325), 35);
		moonGroup8a.style = {fillColor: 'rgb(200, 192, 62)', strokeColor: null};

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
		group7.rotate(.8, point1);
		group8.rotate(.6, point1);
	}
// 
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
	}

	// =======================================
	// Take date inputs and draw the timeline
	// =======================================

	startYearString = $('.startYear').val();
	endYearString	= $('.endYear').val();
	var startYear	= parseInt(startYearString);
	var endYear		= parseInt(endYearString);
	var dateRange	= (endYear - startYear);

	checkInitialInputs();

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
			initialStartHasError();
		break;

		case (endYearString.trim() == ""):
			$('.notification-text').html('Need END YEAR.')
			initialEndHasError();
		break;

		case (startYear < 1000):;
			$('.notification-text').html('Year needs to match YYYY')
			initialStartHasError();
		break;

		case (endYear < 1000):
			$('.notification-text').html('Year needs to match YYYY')
			initialEndHasError();
		break;

		default:
			$('.notification-text').removeClass('activated');
			$('.start-year').removeClass('has-error');
			$('.end-year').removeClass('has-error');
			initializePath();
		}
	}
	
	function initialStartHasError(){
		$('.notification-text').addClass('activated');
		$('.start-year').addClass('has-error');
		$('.end-year').removeClass('has-error');
	}

	function initialEndHasError (){
		$('.notification-text').addClass('activated');
		$('.end-year').addClass('has-error');
		$('.start-year').removeClass('has-error');
	}

// =============================================================================================================
console.log('%cThe span of dates being viewed is ' + (dateRange - 1) + ' years.', 'font-size:20px;color:green');
console.log('%cStartYear is ' + startYear, 'font-size:20px;color:green')
// =============================================================================================================

	var width, height, center, top, left, right, bottom;

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

			width	= view.size.width;
			height	= view.size.height;
			center	= view.center;
			top		= view.bounds.top;
			left	= view.bounds.left;
			right	= view.bounds.right;
			bottom	= view.bounds.bottom;

			path.segments = [];
			path.add([left,(bottom - 50)]);
			for (var i = 1; i < dateRange; i++){
				var point = new Point(width / dateRange * i, (bottom - 50));
				path.add(point);
			}
				path.add([right,(bottom - 50)])
				// path.fullySelected = true;
				initializePointText();
	}

	function initializePointText(){
		var counter = startYear;
		for (var i = 1; i < dateRange; i++){
			var dateList = new PointText(width / dateRange * i, (bottom - 50));
				dateList.content = (counter += 1);
				dateList.fillColor = 'white';
				dateList.rotate(300);
				dateList.position.x -=14;
				dateList.position.y +=25;
		}
		initializeReferencePath();
	}

	function initializeReferencePath(){
		for (var i = 1; i < dateRange; i++){
			var from = new Point(width / dateRange * i, 0);
			var to = new Point(width / dateRange * i, bottom - 52);
				var referencePath = new Path.Line(from, to);
					referencePath.style = style;
					referencePath.strokeColor = 'black';
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
	clickNums();
	function clickNums(){
		clickNum = $('this').data('clickNum');
			if (this) { 
				then do this
			} else {do this}
	}









}); // $('.add').click(function(){})
}); // $('.go').click(function(){})