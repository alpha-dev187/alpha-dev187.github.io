;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());

function myworkbutton1() {
	var dots = document.getElementById("dots1");
	var moreText = document.getElementById("more1");
	var btnText = document.getElementById("myBtn1");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  } 
  function myworkbutton2() {
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("myBtn2");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  
  function myworkbutton3() {
	var dots = document.getElementById("dots3");
	var moreText = document.getElementById("more3");
	var btnText = document.getElementById("myBtn3");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  function myworkbutton4() {
	var dots = document.getElementById("dots4");
	var moreText = document.getElementById("more4");
	var btnText = document.getElementById("myBtn4");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  function myworkbutton5() {
	var dots = document.getElementById("dots5");
	var moreText = document.getElementById("more5");
	var btnText = document.getElementById("myBtn5");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  function myworkbutton6() {
	var dots = document.getElementById("dots6");
	var moreText = document.getElementById("more6");
	var btnText = document.getElementById("myBtn6");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  function myworkbutton7() {
	var dots = document.getElementById("dots7");
	var moreText = document.getElementById("more7");
	var btnText = document.getElementById("myBtn7");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Click here";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }  
  /* AD */