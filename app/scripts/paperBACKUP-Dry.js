var splashText = new PointText({
	point: view.bounds.topCenter,
	justification: 'center',
	fontSize: 20,
	fontFamily: 'Lato',
	fontWeight: '500',
	blendMode: 'xor',
	fillColor: {
		hue: Math.random() * 360,
		saturation: 0.5,
		brightness: 1
	},
	content: "Timeline creation tool!  Take a look \nat the input fields above this area \nand input a START YEAR \nand then an END YEAR."
});
splashText.position.y += 50;
splashText.fitBounds(view.bounds);

function onMouseDown(event) {
	splashText.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
	};
}



$('.go').click(function() {
	project.clear();

	var width, height, center, top, left, right, bottom;
	width = view.size.width;
	height = view.size.height;
	center = view.center;
	top = view.bounds.top;
	left = view.bounds.left;
	right = view.bounds.right;
	bottom = view.bounds.bottom;
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

	startYearString = $('.startYear').val();
	endYearString = $('.endYear').val();
	var startYear = parseInt(startYearString);
	var endYear = parseInt(endYearString);
	var dateRange = (endYear - startYear);

	if (dateRange > 10) {
		// collapseDates();
		checkInitialInputs();
	} else {
		checkInitialInputs();
	}

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

	function collapseDates() {
		initializeCollapsedPath()
	}


	function initializePath() {
		project.clear();
		$('.dateRange').addClass('activated');
		$('.dataPoint').addClass('activated');
		var path = new Path({
			strokeColor: '#d9534f',
			strokeWidth: 3
		});

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
			var from = new Point(width / dateRange * i, 0);
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
		function clickNums() {
			clickNum = $(this).data('clickNum');
			if (!clickNum) clickNum = +52;
			$(this).data('clickNum', clickNum += 20);
		} // end function clickNums(){}
		function clicksOne() {
			clickOne = $(this).data('clickOne');
			if (!clickOne) clickOne = 0;
			$(this).data('clickOne', clickOne += 1);
		} // function clicksOne(){}
		clicksOne();
		clickNums();
		checkInputs();
		clicksOne();

		console.log("clickOne:", ((clickOne + 1) / 2) - 0.5);
		console.log("clickNum:", clickNum);

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

		function renderData() {
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

			$('.notification-text').removeClass('activated');
			var dataPointRangeCounter = dataPointRange;
			// ================================================================================================
			// dataPointRect
			// ================================================================================================
			var dataPointNameListing = new PointText(0, (bottom - clickNum));
			dataPointNameListing.content = dataPointName;
			dataPointNameListing.fillColor = 'white';
			dataPointNameListing.position.y += 11;
			paper.view.draw();
		} // end function renderData(){}
	}); // end $('.add').click(function(){})
}); // end $('.go').click(function(){})