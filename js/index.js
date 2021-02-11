$(document).ready(function(){
	//add indicator on navbar
	$("#home").addClass("nav-button-highlight");
	setTimeout(function(){
		let i = 0.0;
		$("#about-us").css("pointer-events", "auto");
		setInterval(function(){
			i += 0.01;
			$("#about-us").css("opacity", i);
		}, 10);
	}, 3500);
});

//constructs bideojs object
(function () {

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
  
      playButton: document.querySelector('#play'),
      pauseButton: document.querySelector('#pause'),
  
      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          src: 'img/code-background.mp4',
          type: 'video/mp4'
        }
      ],
  
      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('#video-cover').style.display = 'none';
      }
    });
  }());