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
    $(document).ready(function(){function c(){var a=new Rectangle(0,0,view.bounds.width,view.bounds.height),b=new Path.Rectangle(a);b.fillColor="#333333"}function e(){var a="rgba(200, 192, 62, 1)";star=new Path.Circle(new Point(view.center),100),star.style={fillColor:a,strokeColor:null};var b=star.position;console.log(b);var c=new Path.Circle(new Point(b),122),e=new Path.Circle(new Point(b+85),5);e.style={fillColor:a,strokeColor:null};var f=new Path.Circle(new Point(b),142),g=new Path.Circle(new Point(b+100),5);g.style={fillColor:a,strokeColor:null};var h=new Path.Circle(new Point(b),172),i=new Path.Circle(new Point(b+120),5);i.style={fillColor:a,strokeColor:null};var j=new Path.Circle(new Point(b),200),k=new Path.Circle(new Point(b+140),10);k.style={fillColor:a,strokeColor:null};var l=new Path.Circle(new Point(b),232),m=new Path.Circle(new Point(b+165),5);m.style={fillColor:a,strokeColor:null};var n=new Path.Circle(new Point(b),280),o=new Path.Circle(new Point(b+200),5);o.style={fillColor:a,strokeColor:null};var p=new Path.Circle(new Point(b),360),q=new Path.Circle(new Point(b+255),25);q.style={fillColor:a,strokeColor:null};var r=new Path.Circle(new Point(b),450),s=new Path.Circle(new Point(b+325),35);s.style={fillColor:a,strokeColor:null},c.center;var u=c.center,v=new Group([c,e]),w=new Group([f,g]),x=new Group([h,i]),y=new Group([j,k]),z=new Group([l,m]),A=new Group([n,o]),B=new Group([p,q]),C=new Group([r,s]);view.onFrame=function(){v.rotate(3,u),w.rotate(2.5,u),x.rotate(2.1,u),y.rotate(1.8,u),z.rotate(1.4,u),A.rotate(1,u),B.rotate(.8,u),C.rotate(.6,u)},d===!0&&(project.activeLayer.onMouseDrag=function(a){star.visible=!1,u=a.point})}function q(a,b){this.startYearString=a,this.endYearString=b,this.startYear=parseInt(a),this.endYear=parseInt(b),this.dateRange=this.endYear-this.startYear}function r(a,b,c){this.eventName=a,this.eventStartString=b,this.eventEndString=c,this.eventStart=parseInt(b),this.eventEnd=parseInt(c),this.eventRange=this.eventEnd-this.eventStart}function w(){var a=inputDate.startYearString,b=inputDate.endYearString,c=inputDate.startYear,d=inputDate.endYear;switch(!0){case c>=d:y({message:"START YEAR should come before END YEAR.",add:$(".start-year"),remove:$(".end-year")});break;case""===a.trim():y({message:"Need START YEAR.",add:$(".start-year"),remove:$(".end-year")});break;case""===b.trim():y({message:"Need END YEAR.",add:$(".end-year"),remove:$(".start-year")});break;case 1e3>c:y({message:"Year needs to match YYYY",add:$(".start-year"),remove:$(".end-year")});break;case 1e3>d:y({message:"Year needs to match YYYY",add:$(".end-year"),remove:$(".start-year")});break;default:$(".input-dates, .input-events").addClass("activated"),f.visible=!1,console.log("default switch fired, you did real good there grasshopper"),z(),paper.view.draw(),C()}}function x(){var a=inputEvent.eventStartString,b=inputEvent.eventEndString,c=inputEvent.eventStart,d=inputEvent.eventName,e=inputEvent.eventEnd,f=inputDate.endYear;switch(!0){case""===d.trim():$(this).data("clickNum",g-=20),y({message:"Please enter a name of your new Event.",add:$(".event-name"),remove:$(".event-start, .event-end")});break;case 1e3>e:$(this).data("clickNum",g-=20),y({message:"END needs to match YYYY.",add:$(".event-end"),remove:$(".event-start, .event-name")});break;case""===a.trim():$(this).data("clickNum",g-=20),y({message:"Need event START year.",add:$(".event-start"),remove:$(".event-end, .event-name")});break;case""===b.trim():$(this).data("clickNum",g-=20),y({message:"Need event END year.",add:$(".event-end"),remove:$(".event-start, .event-name")});break;case e>f:$(this).data("clickNum",g-=20),y({message:"END should be before the graph's end year.",add:$(".event-end"),remove:$(".event-start, .event-name")});break;case 1e3>c:$(this).data("clickNum",g-=20),y({message:"START needs to match YYYY.",add:$(".event-start"),remove:$(".event-end, .event-name")});break;case c<inputDate.startYear:$(this).data("clickNum",g-=20),y({message:"START should be after the graph's start year.",add:$(".event-start"),remove:$(".event-end, .event-name")});break;case c>e:$(this).data("clickNum",g-=20),y({message:"START needs be before END",add:$(".event-start"),remove:$(".event-end, .event-name")});break;default:z(),G()}}function y(a){$(".notification-text").html(a.message).addClass("activated"),a.add.addClass("has-error"),a.remove.removeClass("has-error")}function z(){$(".notification-text").html("").removeClass("activated"),$(".has-error").removeClass("has-error")}function A(){g||(g=52),$(this).data("clickNum",g+=20)}function B(){h||(h=0),$(this).data("clickOne",h+=1),h===(h+1)/2>(k-80)/20&&($(".notification-text").html(h+" is the total number of points that this graph can display."),$(".add").prop("disabled",!0),$(".notification-text").addClass("activated"))}function C(){var a=inputDate.dateRange;t.add([n,m+50]);for(var b=1;a>b;b++){var c=new Point(j/a*b,m+50);t.add(c)}t.add([o,m+50]),u.add([n,p-50]);for(var b=1;a>b;b++){var c=new Point(j/a*b,p-50);u.add(c)}u.add([o,p-50]),guidePathLayer=new Layer([u,t]),paper.view.draw(),D()}function D(){for(var a=inputDate.startYear,b=inputDate.dateRange,c=a,d=1;b>d;d++){var e=new PointText({point:[j/b*d,m+8],content:c+=1,fillColor:"white"});e.rotate(300),e.position.x-=14,e.position.y+=25}for(var c=a,d=1;b>d;d++){var e=new PointText({point:[j/b*d,p-50],content:c+=1,fillColor:"white"});e.rotate(300),e.position.x-=14,e.position.y+=25}guideTextLayer=new Layer([e]),paper.view.draw(),E()}function E(){for(var a=inputDate.dateRange,b=1;a>b;b++){var c=new Point(j/a*b,m+52),d=new Point(j/a*b,p-52),e=new Path.Line(c,d);e.style=v,e.strokeColor="black"}referencePathsLayer=new Layer(e),paper.view.draw()}function F(){var a=inputEvent.eventName,b=new PointText(5,p-g+1);b.content=a,b.fillColor="white",b.position.y+=14,eventNameLayerBG=new Layer;var c=new Rectangle(new Point(0,p-g),new Size(b.bounds.width+7,20)),d=new Path.Rectangle(c);d.fillColor="#333333",d.blendMode="hard-light",eventNameLayerBG.activate();var e=new Path;e.add(new Point(b.bounds.width,p-g)+10),e.add(new Point(o,p-g)+10),e.fillColor="white",e.strokeColor=[.5],e.strokeWidth=1,e.dashArray=[5,5],e.blendMode="hard-light",eventNameLayer=new Layer(b),paper.view.draw()}function G(){var a=inputEvent.eventRange,b=inputEvent.eventStart,c=inputDate.dateRange,d=inputDate.startYear;if(1>a){var e=new Path.Circle({center:[j/c*(b-d),p-g+10],radius:10});e.fillColor={hue:360*Math.random(),saturation:.5,brightness:1},eventRectLayer=new Layer(e),paper.view.draw(),F()}else{var e=new Rectangle(new Point(j/c*(b-d),p-g),new Size(j/c*a,20)),f=new Path.Rectangle(e);f.fillColor={hue:360*Math.random(),saturation:1,brightness:1},eventRectLayer=new Layer(f),paper.view.draw(),F()}}paper.install(window);var a=document.getElementById("myCanvas");paper.setup(a);var b=new PointText({point:view.center,justification:"center",fontSize:20,content:"\nTIMELINE CREATION TOOL\n\nInput a START YEAR\nand an END YEAR.\n",fillColor:{hue:360*Math.random(),saturation:.5,brightness:1},onMouseDown:function(){b.fillColor={hue:360*Math.random(),saturation:1,brightness:1}},onMouseMove:function(){b.fillColor.hue+=1}});c();var d=!1,f=new Layer([b]);b.fitBounds(view.bounds),paper.view.draw(),f.activate();var g=72,h=0,j=view.size.width,k=view.size.height;view.center;var m=view.bounds.top,n=view.bounds.left,o=view.bounds.right,p=view.bounds.bottom;new Path({strokeColor:"#d9534f",strokeWidth:3});var t=new Path({strokeColor:"#d9534f",strokeWidth:3}),u=new Path({strokeColor:"#d9534f",strokeWidth:3}),v={strokeColor:[.3],strokeWidth:2,fontSize:20};$(".go").click(function(){project.clear();var a=$(".startYear").val(),b=$(".endYear").val();inputDate=new q(a,b),w()}),$(".add").click(function(){var a=$(".event-name-input").val(),b=$(".event-start-input").val(),c=$(".event-end-input").val();inputEvent=new r(a,b,c),x(),A(),B(),console.log("clickOne:",h,", clickNum:",g),h===(view.size.height-104)/20&&($(".notification-text").html(h+" is the total number of points that this graph can display."),$(".add").prop("disabled",!0),$(".notification-text").addClass("activated"))}),$(".scifi").click(function(){for(project.clear(),c(),paper.view.draw(),d=!1,$(".startYear").val("1986"),$(".endYear").val("2014"),$(".go").click(),i=0;i<scifi.results.length;i++)$(".event-name-input").val(scifi.results[i].name),$(".event-start-input").val(scifi.results[i].start),$(".event-end-input").val(scifi.results[i].end),$(".add").click();paper.view.draw()}),$(".orbit").click(function(){project.clear(),c(),d=!0,e(),paper.view.draw()})});
	};

  $('.navbar-brand').click(function(){
    window.location.reload();
  });

  $('.scifi').click(function(){
    $('.navbar-toggle').click();
  });

  $('.orbit').click(function(){
    // paper.project.clear();
    $('.navbar-toggle').click();
    // $('.orbitCanvasClass').removeClass("activated");
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