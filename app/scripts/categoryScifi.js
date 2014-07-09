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
			$("#myCanvas").css('height', "1300px")
			$( "#myCanvas" ).prop( "height", "1300" );
			$( "#myCanvas" ).addClass( "activated" );
			view.size.height = 1300;
			paper.view.draw()
		}
		// =======================================
		// 27 media events is the current cap limit
		// =======================================
		startYearString = $('.startYear').val('1985');
		endYearString = $('.endYear').val('2017');
		var startYear = parseInt(startYearString);
		var endYear = parseInt(endYearString);
		var dateRange = (endYear - startYear);
	$( ".go" ).click();
	  // comparator: function( Photo ) { return Photo.get('_id')};
		for (i = 0; i < scifi.results.length; i++) {
			// TVname = events.media.tv[i].name;
			// TVstart = events.media.tv[i].start;
			// TVend = events.media.tv[i].end;
			TVname = scifi.results[i].name;
			TVstart = scifi.results[i].start;
			TVend = scifi.results[i].end;
			dataPointName			= $('.dataPoint-name-input').val(TVname);
			dataPointStartString	= $('.dataPoint-start-input').val(TVstart);
			dataPointEndString		= $('.dataPoint-end-input').val(TVend);
		$('.add').click();


			$('.dataPoint-name-input').val('');
			$('.dataPoint-start-input').val('');
			$('.dataPoint-end-input').val('');
		}
		console.log(view.size.width);
				paper.view.draw();
})