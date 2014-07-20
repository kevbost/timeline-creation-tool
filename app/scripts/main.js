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
var inputDate;
var inputEvent;

new AppRouter();
Parse.history.start();

// =======================================================================
	paper.install(window);
// =======================================================================
	window.onload = function() {
    paper.setup('myCanvas');
	};

  $('.navbar-brand').click(function(){
    window.location.reload();
  });

  $('.scifi').click(function(){
    $('.navbar-toggle').click();
  });

  $('.orbit').click(function(){
    paper.project.clear();
    $('.navbar-toggle').click();
    $('.orbitCanvasClass').removeClass("activated");
  })


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


// Load Font w/ Javascript
WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();