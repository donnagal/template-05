
$(function() {
  $('.load-in').css('display', 'none');
  $('.load-in').fadeIn(1000);

  AOS.init(
    {
      disable: 'mobile',
    }
  );
  

  //nav
  $(document).ready(function(){
    $(".slide-toggle, li").click(function(){
      $(this).toggleClass('active');
      $(".menu").animate({
        width: "toggle"
      });
      $('nav').toggleClass('open');
      $('.hamburger-menu').toggleClass('animate');
    })
  });



    // Background data image
    $( ".bg-img" ).each(function() {
      var attr = $(this).attr('data-image-src');
    
      if (typeof attr !== typeof undefined && attr !== false) {
          $(this).css('background', 'url('+attr+') center bottom  / cover no-repeat');
      }
    
    });


   //Add animate class
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".animate-add").addClass("active");
    } else {
        $(".animate-add").removeClass("active");
    }
  });



  //Video Poster image
  $('.play').click(function() {
    video = '<iframe src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

});


(function($) {
"use strict"; // Start of use strict
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });


  })(jQuery); // End of use strict


// Scroll Down Button
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();




  // Smooth Scroll

  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
  
  function wheel(event) {
      var delta = 0;
      if (event.wheelDelta) delta = event.wheelDelta / 120;
      else if (event.detail) delta = -event.detail / 3;
  
      handle(delta);
      if (event.preventDefault) event.preventDefault();
      event.returnValue = false;
  }
  
  var goUp = true;
  var end = null;
  var interval = null;
  
  function handle(delta) {
    var animationInterval = 20; //lower is faster
    var scrollSpeed = 20; //lower is faster
  
    if (end == null) {
      end = $(window).scrollTop();
    }
    end -= 30 * delta;
    goUp = delta > 0;
  
    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = $(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 || 
            scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
            goUp && step > -1 || 
            !goUp && step < 1 ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        $(window).scrollTop(scrollTop + step );
      }, animationInterval);
    }
  }


// load bar
var Nanobar = function() {
	var c, d, e, f, g, h, k = {
			width: "100%",
			height: "4px",
			zIndex: 9999,
			top: "0"
		},
		l = {
			width: 0,
			height: "100%",
			clear: "both",
			transition: "height .3s"
		};
	c = function(a, b) {
		for (var c in b) a.style[c] = b[c];
		a.style["float"] = "left"
	};
	f = function() {
		var a = this,
			b = this.width - this.here;
		0.1 > b && -0.1 < b ? (g.call(this, this.here), this.moving = !1, 100 == this.width && (this.el.style.height = 0, setTimeout(function() {
			a.cont.el.removeChild(a.el)
		}, 100))) : (g.call(this, this.width - b / 4), setTimeout(function() {
			a.go()
		}, 16))
	};
	g = function(a) {
		this.width = a;
		this.el.style.width = this.width + "%"
	};
	h = function() {
		var a = new d(this);
		this.bars.unshift(a)
	};
	d = function(a) {
		this.el = document.createElement("div");
		this.el.style.backgroundColor = a.opts.bg;
		this.here = this.width = 0;
		this.moving = !1;
		this.cont = a;
		c(this.el, l);
		a.el.appendChild(this.el)
	};
	d.prototype.go = function(a) {
		a ? (this.here = a, this.moving || (this.moving = !0, f.call(this))) : this.moving && f.call(this)
	};
	e = function(a) {
		a = this.opts = a || {};
		var b;
		a.bg = a.bg || "#f39c12";
		this.bars = [];
		b = this.el = document.createElement("div");
		c(this.el, k);
		a.id && (b.id = a.id);
		b.style.position = a.target ? "relative" : "fixed";
		a.target ? a.target.insertBefore(b, a.target.firstChild) : document.getElementsByTagName("body")[0].appendChild(b);
		h.call(this)
	};
	e.prototype.go = function(a) {
		this.bars[0].go(a);
		100 == a && h.call(this)
	};
	return e
}();
var nanobar = new Nanobar();
nanobar.go(30);
nanobar.go(60);
nanobar.go(100);


// Ripple 
$(document).ready(function() {
  $('.ripple').ripples('show');
});



// Hover pop
var $bgPop =  document.querySelectorAll('.bg-pop');

// querySelectorAll isn't technically an Array, but a DOM node list
// this lets you loop over each element
Array.prototype.forEach.call($bgPop, function (element, index) {
  element.onmousemove = function (e) {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  };
});

    


    //Sound hover
    $(document).ready(function() {
      $("#my_audio").get(0).play();
      $("#my_audio").prop("volume", 0).animate({volume: 0.4}, 6000);
    
      $('.btn-sound').hover(function() {
        $("#beep__hover").get(0).play();
        $("#beep__hover").animate({volume: 1}, 150);
        $("#my_audio").animate({volume: 0.1}, 150);
        $(this).animate({opacity: 1}, 150);
        $(".cursor").addClass("z-10");
      }, function() {
          $("#beep__hover").animate({volume: 0}, 250);
          $("#my_audio").animate({volume: 0.4}, 150);
          $(this).animate({opacity: 1}, 150);
          $(".cursor").removeClass("z-10");
      });
    
      $('.btn-sound').click(function() {
        $("#beep__active").delay(50).get(0).play();
      });
  });


  // Music on scroll

var videos = document.getElementsByTagName("video"),
fraction = 0.8;
function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);




// Custom Mouse Pointer
  //Selecting cursor
  var cursor = $('.cursor');

  //Following cursor
  $(document).bind('mousemove', function (e) {
  
    var offset = $(window).scrollTop();
  
    TweenLite.to(cursor, 0, {left: e.pageX - 20, top: e.pageY - offset - 20});
  // -20 = half of your cursor width & height
  //Offset calculation to prevent position on scroll
});
    
    var hoverElem = $('body a, button')
    
    //Entering on the element, cursor changes
    hoverElem.on('mouseenter', function () {
        TweenLite.to(cursor, 0.1, {
            ease: Elastic.easeOut.config(1, 0.4),
            scale: 2.9,
            // backgroundColor: 'rgb(230, 230, 230)'
        })
    });

    //Leaving the element, cursor goes default
    hoverElem.on('mouseleave', function () {
        TweenLite.to(cursor, 0.6, {
            ease: Elastic.easeOut.config(1, 0.4),
            scale: 1,
            backgroundColor: 'transparent'
        })
    });
