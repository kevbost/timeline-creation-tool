$('button').click(function(){
	project.clear()
})
// Create a Paper.js Path to draw a line into it:
var line = new Path({});
// Give the stroke a color
line.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
line.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
line.lineTo(start + [100, -900]);

// view.onFrame = function(event) {
// 	// On each frame, rotate the path by 3 degrees:
// 	line.rotate(8);
// }



var style = {
	strokeColor: 	'#00ffff',
	fillColor: 		'#000000', 
	strokeWidth: 	'3'
}


var circle = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	circle.position = view.center;
	line.position = view.center;
}



		// Create a simple drawing tool:
		var tool = new Tool();
		var pathAdder;
		
		var textItem = new PointText(new Point(0, 10));
		textItem.fillColor = 'black';
		textItem.content = 'Click and drag to draw a line.';
		
		// Define a mousedown and mousedrag handler
		tool.onMouseDown = function(event) {
			pathAdder = new Path();
			pathAdder.strokeColor = 'black';
			pathAdder.add(event.point);
			tool.minDistance = 50;
			pathAdder.fullySelected = true;
			path6 = new Path.Circle(new Point(300, 450), 200)
			path6.strokeColor = 'black';
			path6.fillColor = null;
				path6b = new Path.Circle(new Point(300, 450), 200)
					path6b.strokeColor = 'black';
					path6b.fillColor = null;
					path6b.removeSegment(0)
					path6c = new Path.Circle(new Point(300, 450), 200)
						path6c.strokeColor = 'black';
						path6c.fillColor = null;
						path6c.removeSegment(1)
					}

					tool.onMouseUp = function() {
						var segmentCount = pathAdder.segments.length;

						path6.remove()
						path6b.remove()
						path6c.remove()
						pathAdder.smooth()
						pathAdder.closed = true;
						pathAdder.fullySelected = false;

						var newSegmentCount = pathAdder.segments.length;
						textItem.content = 'Your beautiful shape contains ' + newSegmentCount + ' segments.';


					}
						tool.onMouseDrag = function(event) {
							pathAdder.closed = true;
							pathAdder.add(event.point);

						}





var path2 = new Path();					// Create a new path object;
	path2.strokeColor = 'black';		// Stroke color;
	path2.add(	new Point(30, 75),		// Add points;
				new Point(30, 25),
				new Point(80, 25),
				new Point(80, 75)
			);
				path2.closed = true;	// Close path with .closed = true;
				path2.fullySelected = true;	// Show handles with .fullySelected = true;

			var path2Copy = path2.clone();	// Clone with .clone();
					path2Copy.fullySelected = true;	// Show Handles;
					path2Copy.position.x += 100;	// Change position x axis 100px;
					path2Copy.smooth();				// Smooth corners with .smooth();
					path2.style = style;





var path3 = new Path.Circle(new Point(200, 200), 80)	// new Path.Circle(new Point(centerX, centerY), radius)
	path3.strokeColor = 'black';
	// path3.fullySelected = true;							// Show selected with handles
	// path3.selected = true;								// Show selected w/o  handles
	circle.segments[3].selected = true;						// Show the 4th point in the circle as selected




var path4 	= new Rectangle(new Point(200, 200), new Point(250, 250));
var path4b	= new Path.Rectangle(path4)
	path4b.fillColor = '#e9e9ff';
	path4b.fullySelected = true;



var path5 = new Path.RegularPolygon(new Point(150, 150), 5, 80)	//  new Path.RegularPolygon(new Point(centerX, centerY), numSides, radius) 
	// path5.strokeColor = 'black';
	path5.fillColor = 'red';
	path5.opacity = .5;
	path5.selected = false;

	for (var i = 0; i < 5; i++) {
	var clonePath5 = path5.clone()

    // Distribute the copies horizontally, so we can see them:
    clonePath5.position.x += i * clonePath5.bounds.width / 2;
    clonePath5.blendMode = 'xor';
    clonePath5.selected = false;
    	view.onFrame = function(event){
    		// clonePath5.scale(.9);
    		clonePath5.fillColor = 'orange'; // access the last "item" drawn, and change its styling
    		clonePath5.rotate(3)
    	}
}


var path6 = new Path.Circle(new Point(200, 350), 40)	// .removeSegment(index) to remove a point from an object preset constructor
	path6.strokeColor = 'black';
	path6.fullySelected = true;
	path6.removeSegment(0)



var myPath = new Path({
	segments: [[400, 315], [440, 380], [560, 220]],
	selected: false
});

	myPath.strokeColor = new Color(1, 0, 0);
	// or // myPath.strokeColor = '#ff0000'; // red
	myPath.fillColor = new Color(0, 1, 0);
	myPath.strokeWidth = 10;
	myPath.strokeCap = 'butt';		// round, square, or butt
	myPath.strokeJoin = 'square';	// miter, square, or bezel
	// myPath.dashArray = [10, 12];		// 10pt dash, 12pt gap

	
	project.activeLayer.lastChild.fillColor = 'orange'; // access the last "item" drawn, and change its styling







var firstPath = new Path.Circle({
	center: [80, 500],
	radius: 35
});		firstPath.strokeColor = '#ff0000';
		firstPath.fillColor = 'blue';
			// secondPath doesn't have a strokeColor yet:
			var secondPath = new Path.Circle({
				center: [160, 500],
				radius: 35
				});		// Apply the style of firstPath to that of secondPath:
						secondPath.style = firstPath.style;



// Change the current style of the project:
project.currentStyle = {
	strokeColor: '#000000',
	fillColor: '#FFFBA5',
	strokeWidth: 3
};






var circlePath = new Path.Circle(new Point(280, 100), 25);
circlePath.strokeColor = 'black';
circlePath.fillColor = 'white';

var clones = 30;
var angle = 360 / clones;