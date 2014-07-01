// Load Canvas
// =======================================================================

var rectangle 	= new Rectangle(new Point(50, 50), new Point(150, 100));
	var path 	= new Path.Rectangle(rectangle);
		path.fillColor = '#e9e9ff';
		path.selected = true;

path.onMouseDown = function(event){
	path.fillColor = 'black'
}


// After input of dates, draw canvas
// =======================================================================

$('.go').click(function(){
	project.clear()
	startYearString = $('.startYear').val()
	endYearString = $('.endYear').val()

	var startYear = parseInt(startYearString)
	var endYear = parseInt(endYearString)
	var dateRange = endYear - startYear;

		var path = new Path({
			// 80% black:
			strokeColor: [0.8],
			strokeWidth: 60,
			strokeCap: 'square',
			// fullySelected: true
		});

		// path.add(new Point(view.size.width - view.size.width, 500))
		// path.add(new Point(view.size.width, 500))




		var style = {
			fillColor: 'black',
			fontSize: 20
		}

		for (var i = 0; i <= dateRange + 1; i++) {
				// var d = new Point(i / dateRange, 1) * (view.size -= 50)
					date = path.add(new Point(i / dateRange, 1) * (view.size -=55));
					var dateList = new PointText(new Point(i / dateRange, 1) * (view.size -= 50));
						dateList.content = (startYear += 1);
						dateList.style = style;
						// dateList.fontSize = 500 / dateRange;
						dateList.rotate(270)
						console.log(date.segment)
		}


		// // MASON'S SOLUTION
		// for (var i = 0; i < 10; i++) {

		// 	var dateList = new PointText(new Point(view.size / i, 200));
		// 	dateList.content = (i);
		// 	dateList.style = style;
		// 	dateList.rotate(270)
		// }




		var textItem = new PointText(new Point(0, 10));
			textItem.fillColor = 'black';
			textItem.content = 'Click and drag to draw a line.';

			console.log(path.position)
})




// var myPoint = new Point(10, 20); 

// var myPath = new Path();
// myPath.add(myPoint);
// myPath.add(new Point(20, 50));
// myPath.strokeColor = 'red';
// myPath.strokeWidth = 4;



// var point1 = new Point(50,50);
// console.log("point1", point1)
// 	var point2 = point1 * 4;
// 	console.log("point2", point2)
// 		var point3 = point2 - point1
// 		console.log("point3", point3)
// 			var point4 = point3 + 50;
// 			console.log("point4", point4)
// 				var point5 = point4 / 2;
// 				console.log("point5", point5)
// 					var point6 = point5 * new Point(2,2)
// 					console.log("point6", point6)




// var clickPath = new Path();
// 	clickPath.strokeColor = 'red';
// 	clickPath.strokeWidth = 4;

// 	function onMouseDown(event){
// 		clickPath.add(event.point)
//     	console.log('You pressed the mouse!');
// 		}
// 		function onMouseDrag(event) {
// 		    console.log('You dragged the mouse!');
// 			}
// 			function onMouseUp(event) {
// 			    console.log('You released the mouse!');
// 				}



// function onMouseUp(event) {
// 	var rect = new Rect(new Point(x,y){
		

// 		// center: event.middlePoint,
// 		// radius: event.delta.length / 2
// 	});
// 	rect.strokeColor = 'black';
// 	rect.fillColor = 'white';
// }



// var path = new Path(new Point(20, 20), new Point(50, 50));
// path.style = {
// 	strokeColor: 'red',
// 	strokeWidth: 10,
// 	strokeCap: 'round'
// 	};
// 	var symbol = new Symbol(path);
// 		for (var i = 0; i < 300; i++) {
// 			var position = view.size * Point.random()
// 			var placed = symbol.place(position)
// 			}
// 			function onFrame(event) {
// 				symbol.definition.rotate(3)
// 				symbol.definition.strokeColor.hue += 0.2;
// 			}


// $('#myCanvas').css('background-color', 'black')


// var count = 500;

// var path = new Path.Circle({
// 	center: [0, 0],
// 	radius: 10,
// 	fillColor: 'white',
// 	strokeColor: 'black'
// 	});
// 		var symbol = new Symbol(path);
// 			for (var i = 0; i < count; i++) {
// 				var center = Point.random() * view.size;
// 				var placedSymbol = symbol.place(center);
// 				placedSymbol.scale(i / count)
// 			}
// 				function onFrame(event) {
// 					for (var i = 0; i < count; i++) {
// 						var item = project.activeLayer.children[i];
// 						item.position.x += item.bounds.width / 20;

// 						if (item.position.x > view.size.width) {
// 							item.position.x = -item.bounds.width
// 						}
// 					}
// 				}








// // maximum number of segments
// var amount = 5;
// // maximum height of the wave
// var height = 60;
// // create new path w/ styles
// var path = new Path({
// 	strokeColor: [0.8],
// 	strokeWidth: 30,
// 	strokeCap: 'square'
// 	})
// 	// add 5 segments to the wave spread out over the course of the view
// 	for (i = 0; i <= amount; i++) {
// 		path.add(new Point(i/amount, 1) * view.size)
// 		}
// 		path.smooth()
// 		path.fullySelected = true;
// 		function onFrame(event){
// 			// loop through the segments of the path
// 			for (i = 0; i <= amount; i++){
// 				var segment = path.segments[i];

// 				// an up and down value between -1 and 1
// 				var sinus = Math.sin(event.time * 3 + i)

// 				// change the y position of the point over time
// 				segment.point.y = sinus * height + 100
// 			}
// 		}

