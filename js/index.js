$(document).ready(function(){
	$("#home a").css("color", "whitesmoke");
	$("body").addClass("no-scroll-vert");
	fadeIn($("#about-us"));
});

function fadeIn(button){
	setTimeout(function(){
		let i = 0.0;
		button.css("pointer-events", "auto");
			let fade = setInterval(function(){
				if(i < 1){
					i += 0.01;
					button.css("opacity", i);
				} else {
					clearInterval(fade);
				}
			}, 10);
	}, 3500);
}

//constructs bideojs object
(function(){
    var bv = new Bideo();
    bv.init({
		// Video element
		videoEl: document.querySelector('#background-video'),
	
		// Container element
		container: document.querySelector('body'),
	
		// Resize
		resize: true,
	
		// autoplay: false,
	
		isMobile: window.matchMedia('(max-width: 768px)').matches,
	
		// Array of objects containing the src and type
		// of different video formats to add
		src: [
			{
			src: '../img/code-background.mp4',
			type: 'video/mp4'
			}
		],
	
		// What to do once video loads (initial frame)
		onLoad: function () {
			document.querySelector('#video-cover').style.display = 'none';
		}
	});
}());