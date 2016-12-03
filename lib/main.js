// build volume screen
// style volume bar
// maybe don't need double click

(function(win, doc) {

   var videos = [].slice.apply( doc.querySelectorAll("video") ),
      toggleFullScreen = function(el) {
         if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement ) {
            el.requestFullscreen ? el.requestFullscreen() : (el.msRequestFullscreen ? el.msRequestFullscreen() : (el.mozRequestFullScreen ? el.mozRequestFullScreen() : (el.webkitRequestFullscreen ? el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null )));
         } else {
            doc.exitFullscreen ? doc.exitFullscreen() : ( doc.msExitFullscreen ? doc.msExitFullscreen() : ( doc.mozCancelFullScreen ? doc.mozCancelFullScreen() : (              doc.webkitExitFullscreen ? doc.webkitExitFullscreen() : null )));
         }
      }, 
      timeCalc = function(seconds) {
         seconds = Math.floor(seconds);
         return (seconds < 10) ? ("0:0" + seconds) : (seconds < 60) ? ('0:' + seconds) : (seconds == 60) ? "1:00" : (( Math.floor(seconds/60)) + ":" + (seconds%60 < 10 ? ("0" + seconds%60) : seconds ));
      },
      timerWatch = function(video) {
         if ( !video.paused ) { 
            var percentage = (video.currentTime / video.duration) * 100;

            video.parentNode.querySelector(".track-bar").style.width = percentage + "%";
            video.parentNode.querySelector(".counter").innerHTML = 
               timeCalc(video.currentTime) + "/" + timeCalc(video.duration);

            window.requestAnimationFrame(function() { 
               timerWatch(video);
            });
         }
      },
      playToggle = function(video) {
         if ( video.paused ) {
            video.classList.add("playing");
            video.play();
            window.requestAnimationFrame(function() { 
               timerWatch(video);
            });
            
            if ( video.preload !== "auto" ) {
               video.preload = "auto";
            }
            
            video.focus();

         } else {
            video.classList.remove("playing");
            video.pause();
            
            //video.blur();
         }
      };

   videos.forEach(function(video) {

      if ( video.preload === "none" || video.getAttribute("preload") === null ) {
         video.preload = "metadata";
      }

      var wrapper = document.createElement("div"),
         video_old = video,
         video = video_old.cloneNode(true),

         // create controls
         controlsWrapper = document.createElement("div"),
         playButton = document.createElement("div"),
         track = document.createElement("div"),
         trackBar = document.createElement("div"),
         trackLoadedBar = document.createElement("div"),
         timerFlag = document.createElement("div"),
         counter = document.createElement("span"),
         muteButton = document.createElement("span"),
         volumeContainer = document.createElement("span"),
         volumeButton = document.createElement("input"),
         fullscreenButton = document.createElement("span"),
         controlsBottomTray = document.createElement("div"),
         skipToTime = ( video.getAttribute('time') || video.getAttribute('date-time') );

      wrapper.classList.add("responsive-video");
      wrapper.appendChild(video);
      video_old.parentNode.replaceChild(wrapper, video_old);
      delete video_old; 
      
      if ( video.autoplay ) {
         playToggle(video);
      }  
      
      document.addEventListener("keydown", function(evt) {console.log( evt );
         if ( document.activeElement === video && evt.which === 32 ) {
            evt.preventDefault();
            playToggle(video);
         }
      })

      video.setAttribute("tabindex", 0);
      
      video.addEventListener("loadeddata", function(evt) {
         var ratio = (this.clientHeight / this.clientWidth);
         wrapper.classList.add("loaded");
         wrapper.style.paddingTop = (ratio * 100) + "%";
         
         counter.innerHTML = timeCalc(0) + "/" + timeCalc(video.duration);
         
         if ( skipToTime ) {
            video.currentTime = skipToTime;
            trackBar.style.width = (skipToTime/video.duration)*100 + "%";
         }
      });

      video.addEventListener("progress", function(evt) {
         console.log( evt )
         if (evt.target.duration) {
            var loadedProgress;
               duration = evt.target.duration,
               buffered = evt.target.buffered;
            
            if ( duration.length === 0 ) {
               loadedProgress = 0;
            } else if ( buffered.length > 0 ) {
               loadedProgress = ((buffered.end(buffered.length - 1) > 0 ? buffered.end(buffered.length - 1) : 0) / duration) * 100;
            }

            trackLoadedBar.style.width = loadedProgress + "%";
         }
      });

      // add classes to controls
      controlsWrapper.classList.add("controls-wrapper");
      playButton.classList.add("play-button");
      track.classList.add("track");
      trackBar.classList.add("track-bar");
      trackLoadedBar.classList.add("track-loader-bar");
      timerFlag.classList.add("timer-flag");
      counter.classList.add("counter");
      volumeContainer.classList.add("volume-button");
      muteButton.classList.add("mute-button");
      fullscreenButton.classList.add("fullscreen-button");
      controlsBottomTray.classList.add("controls-bottom-tray");
      
      volumeButton.type = "range";

      track.appendChild( trackLoadedBar );
      track.appendChild( trackBar );

      timerFlag.innerHTML = "Hello World";
      track.appendChild( timerFlag );
      volumeContainer.appendChild(volumeButton);

      //playButton.addEventListener("click", function() { playToggle(video); });

      video.addEventListener("ended", function(evt) {
         trackBar.style.width = "100%";
         counter.innerHTML = parseFloat(video.duration);
      });      

      track.addEventListener("click", function(evt) {
         var percentage = (evt.offsetX / track.clientWidth),
            seek = percentage * video.duration;
            
         trackBar.style.width = 100 * percentage + "%";
         counter.innerHTML = Math.floor(seek);
         video.currentTime = seek;
      });
      
      track.addEventListener("mousemove", function(evt) {
         var percentage = (evt.offsetX / track.clientWidth),
            seek = percentage * video.duration;
         timerFlag.innerHTML = parseFloat(seek).toFixed(2) + "s";
         timerFlag.style.left = evt.offsetX + "px";
      });

      fullscreenButton.addEventListener("click", function(evt) {
         evt.stopPropagation();
         toggleFullScreen(video);
      });

      muteButton.addEventListener("click", function() {
         console.log( "toggle volume screen");
      });

      muteButton.addEventListener("dblclick", function() {
         video.muted = video.muted ? false : true
      });      
      
      muteButton.addEventListener("mouseover", function() {
         volumeContainer.classList.add("active");
      });      

      volumeContainer.addEventListener("mouseout", function() {
         volumeContainer.classList.remove("active");
      });

      volumeButton.addEventListener("input", function() {
         video.volume = this.value / 100;
      });

      controlsWrapper.addEventListener("click", function(evt) {
         playToggle(video);
      });
      
      controlsBottomTray.addEventListener("click", function(evt) { evt.stopPropagation(); });

      // add controls
      fullscreenButton.appendChild( document.createElement('span') );
      
      controlsBottomTray.appendChild(track);
      controlsBottomTray.appendChild(counter);
      controlsBottomTray.appendChild(muteButton);
      controlsBottomTray.appendChild(volumeContainer);

      controlsWrapper.appendChild(playButton);
      controlsWrapper.appendChild(controlsBottomTray);
      controlsWrapper.appendChild(fullscreenButton);
      
      wrapper.appendChild( controlsWrapper );
   });
})(this, this.document);

//combine appendChild
//can use classname when I create the element
//my time calcuation is off on the right of the progress bar as well as the timer hover flag