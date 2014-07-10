//           ______   ______   __  __                        
//  /'\_/`\ /\  _  \ /\__  _\ /\ \/\ \         __            
// /\      \\ \ \L\ \\/_/\ \/ \ \ `\\ \       /\_\     ____  
// \ \ \__\ \\ \  __ \  \ \ \  \ \ , ` \      \/\ \   /',__\ 
//  \ \ \_/\ \\ \ \/\ \  \_\ \__\ \ \`\ \  __  \ \ \ /\__, `\
//   \ \_\\ \_\\ \_\ \_\ /\_____\\ \_\ \_\/\_\ _\ \ \\/\____/
//    \/_/ \/_/ \/_/\/_/ \/_____/ \/_/\/_/\/_//\ \_\ \\/___/ 
//                                            \ \____/       
//                                             \/___/        
Parse.initialize("kIv6nAYjGwfyFF9yozhchl8NC6jVcpViAvQZt8eU", "iax0nms3DbkYo4YG7EjWqAtOWbrn1PDxl6k67rLa");

var appView;
var scifi;
var paperView;

new AppRouter();
Parse.history.start();

// =======================================================================
	paper.install(window);
// =======================================================================
	window.onload = function() {
		paper.setup('myCanvas');
		var win = $(window);
	};

// =======================================================================
	$('.save').click(function(){
		myCanvas.toBlob(function(blob) {
			saveAs(blob, "pretty image.png");
		});
	});
// Click the go button automatically for testing
// =======================================================================
setTimeout(function() {
		// $( ".go" ).click();
}, 500);