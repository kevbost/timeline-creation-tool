
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
	if (scifi.results.length > 27) {

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
		endYearString = $('.endYear').val('2017');
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
			$('.dataPoint-name-input').val('');
			$('.dataPoint-start-input').val('');
			$('.dataPoint-end-input').val('');
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