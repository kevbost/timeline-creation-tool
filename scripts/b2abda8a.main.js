!function(a){"use strict";var b,c=a.Uint8Array,d=a.HTMLCanvasElement,e=d&&d.prototype,f=/\s*;\s*base64\s*(?:;|$)/i,g="toDataURL",h=function(a){for(var d,e,f,g=a.length,h=new c(g/4*3|0),i=0,j=0,k=[0,0],l=0,m=0;g--;)e=a.charCodeAt(i++),d=b[e-43],255!==d&&d!==f&&(k[1]=k[0],k[0]=e,m=m<<6|d,l++,4===l&&(h[j++]=m>>>16,61!==k[1]&&(h[j++]=m>>>8),61!==k[0]&&(h[j++]=m),l=0));return h};c&&(b=new c([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),d&&!e.toBlob&&(e.toBlob=function(a,b){if(b||(b="image/png"),this.mozGetAsFile)return void a(this.mozGetAsFile("canvas",b));if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(b))return void a(this.msToBlob());var d,e=Array.prototype.slice.call(arguments,1),i=this[g].apply(this,e),j=i.indexOf(","),k=i.substring(j+1),l=f.test(i.substring(0,j));Blob.fake?(d=new Blob,d.encoding=l?"base64":"URI",d.data=k,d.size=k.length):c&&(d=l?new Blob([h(k)],{type:b}):new Blob([decodeURIComponent(k)],{type:b})),a(d)},e.toBlobHD=e.toDataURLHD?function(){g="toDataURLHD";var a=this.toBlob();return g="toDataURL",a}:e.toBlob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);var scifi={results:[{name:"Twilight Zone 1",start:"1959",end:"1964",category:"scifi"},{name:"Twilight Zone 2",start:"1985",end:"1989",category:"scifi"},{name:"Twilight Zone 3",start:"2002",end:"2003",category:"scifi"},{name:"Dr. Who",start:"1963",end:"1989",category:"scifi"},{name:"Dr. Who",start:"2006",end:"2017",category:"scifi",onGoing:!0},{name:"Gene Roddenberry's Death",start:"1991",end:"1991",category:"scifi"},{name:"TOS",start:"1966",end:"1969",category:"scifi"},{name:"TNG",start:"1987",end:"1994",category:"scifi"},{name:"DS9",start:"1993",end:"1999",category:"scifi"},{name:"VOY",start:"1995",end:"2001",category:"scifi"},{name:"ENT",start:"2001",end:"2005",category:"scifi"},{name:"Star Trek 2009 (11)",start:"2009",end:"2009",category:"scifi"},{name:"Star Trek Into Darkness (12)",start:"2013",end:"2013",category:"scifi"},{name:"Stargate SG1",start:"1997",end:"2007",category:"scifi"},{name:"Stargate Atlantis",start:"2004",end:"2009",category:"scifi"},{name:"Stargate Universe",start:"2009",end:"2011",category:"scifi"},{name:"Red Dwarf",start:"1988",end:"1999",category:"scifi"},{name:"Babylon 5",start:"1993",end:"1998",category:"scifi"},{name:"X-Files",start:"1993",end:"2002",category:"scifi"},{name:"Farscape",start:"1999",end:"2003",category:"scifi"},{name:"ANDROMEDA ASCENDANT",start:"2000",end:"2005",category:"scifi"},{name:"Jeremiah",start:"2002",end:"2004",category:"scifi"},{name:"Battlestar Galactica (reimagined)",start:"2004",end:"2009",category:"scifi"},{name:"Fringe",start:"2008",end:"2013",category:"scifi"},{name:"Jehrico",start:"2006",end:"2009",category:"scifi"},{name:"Falling Skies",start:"2011",end:"2017",category:"scifi",onGoing:!0},{name:"Continuum",start:"2012",end:"2017",category:"scifi",onGoing:!0},{name:"Star Wars IV",start:"1977",end:"1977",category:"scifi"},{name:"Star Wars V",start:"1980",end:"1980",category:"scifi"},{name:"Star Wars VI",start:"1983",end:"1983",category:"scifi"},{name:"Star Wars I",start:"1999",end:"1999",category:"scifi"},{name:"Star Wars II",start:"2002",end:"2002",category:"scifi"},{name:"Star Wars III",start:"2005",end:"2005",category:"scifi"},{name:"Star Wars VII",start:"2015",end:"2015",category:"scifi"},{name:"Star Wars Cone Wars",start:"2008",end:"2017",category:"scifi"},{name:"Firefly",start:"2002",end:"2002",category:"scifi"},{name:"Serenity",start:"2005",end:"2005",category:"scifi"},{name:"Caprica",start:"2010",end:"2012",category:"scifi"},{name:"Blood & Chrome",start:"2012",end:"2013",category:"scifi"},{name:"The Sarah Connor Chronicles",start:"2007",end:"2009",category:"scifi"},{name:"Battlestar Galactica",start:"1978",end:"1979",category:"scifi"},{name:"Harry Potter Movies",start:"2001",end:"2011",category:"scifi"},{name:"Eureka",start:"2006",end:"2012",category:"scifi"},{name:"V",start:"2009",end:"2011",category:"scifi"},{name:"Defiance",start:"2013",end:"2014",category:"scifi",onGoing:!0},{name:"Futurama",start:"1999",end:"2017",category:"scifi",onGoing:!0},{name:"Adventure Time",start:"2010",end:"2017",category:"scifi",onGoing:!0},{name:"Misfits",start:"2009",end:"2017",category:"scifi",onGoing:!0},{name:"Dead Like Me",start:"2003",end:"2004",category:"scifi"},{name:"Quantum Leap",start:"1989",end:"1993",category:"scifi"},{name:"Sliders",start:"1995",end:"1999",category:"scifi"},{name:"Outer Limits",start:"1963",end:"1965",category:"scifi"},{name:"Almost Human",start:"2013",end:"2017",category:"scifi",onGoing:!0},{name:"Revolution",start:"2012",end:"2013",category:"scifi"},{name:"Terra Nova",start:"2011",end:"2011",category:"scifi"},{name:"Alphas",start:"2011",end:"2012",category:"scifi"},{name:"Ancient Aliens",start:"2009",end:"2017",category:"scifi",onGoing:!0},{name:"Defying Gravity",start:"2009",end:"2009",category:"scifi"},{name:"Warehouse 13",start:"2009",end:"2014",category:"scifi"},{name:"Heros",start:"2006",end:"2010",category:"scifi"}]},Scifi=Parse.Object.extend({className:"Scifi"}),ScifiCollection=Parse.Collection.extend({model:Scifi,query:new Parse.Query(Scifi).equalTo("start","2009")}),PaperView=Parse.View.extend({tagName:"canvas",className:"myCanvas",attributes:{resize:!0},initialize:function(){paper.install(window),this.tester()},tester:function(){console.log(paper);new Path.Circle(new Point(100,100))}}),AppView=Parse.View.extend({tagName:"canvas",className:"myCanvas",initialize:function(){this.fetchData()},fetchData:function(){var a=new ScifiCollection;a.fetch({success:function(a){a.each(function(){console.log("Yeah, they're loaded dawg")})},error:function(a){alert("Error: "+a.code+" "+a.message)}}).then(function(){})},modifyEntireCollection:function(){var a=(Parse.Object.extend({className:"Scifi"}),new Scifi,new Parse.Query(Scifi));a.exists("objectId"),a.find({success:function(a){console.log("Successfully retrieved "+a.length+" results.");for(var b=0;b<a.length;b++){var c=a[b],d=c.get("start"),e=c.get("end"),f=parseInt(d),g=parseInt(e);c.set("range",g-f),c.save(null,{success:function(a){console.log("New object created with objectId: "+a.id)}})}},error:function(a){console.log("Error: "+a.code+" "+a.message)}})}}),AppRouter=Parse.Router.extend({routes:{"":"home"},home:function(){console.log("%cHello Kevin! \nThe router was sent home.\nEnjoy your stay!","color:rgba(0, 0, 0, .5)"),appView=new AppView}});Parse.initialize("kIv6nAYjGwfyFF9yozhchl8NC6jVcpViAvQZt8eU","iax0nms3DbkYo4YG7EjWqAtOWbrn1PDxl6k67rLa");var appView,scifi,paperView;new AppRouter,Parse.history.start(),paper.install(window),window.onload=function(){paper.setup("myCanvas")},$(".save").click(function(){myCanvas.toBlob(function(a){saveAs(a,"pretty image.png")})}),setTimeout(function(){},500),WebFontConfig={google:{families:["Lato:300,400,700:latin"]}},function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",a.type="text/javascript",a.async="true";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();