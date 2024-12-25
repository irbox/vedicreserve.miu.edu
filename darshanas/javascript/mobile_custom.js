

		(function () {
		
		    // Create mobile element
		    var mobile = document.createElement('div');
		    mobile.className = 'nav-mobile';
		    document.querySelector('.navigation').appendChild(mobile);
		    // hasClass
		    function hasClass(elem, className) {
		        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		    }
		
		    // toggleClass
		    function toggleClass(elem, className) {
		        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		        if (hasClass(elem, className)) {
		            while (newClass.indexOf(' ' + className + ' ') >= 0) {
		                newClass = newClass.replace(' ' + className + ' ', ' ');
		            }
		            elem.className = newClass.replace(/^\s+|\s+$/g, '');
		        } else {
		            elem.className += ' ' + className;
		        }
		    }
		
		    // Mobile nav function
		    var mobileNav = document.querySelector('.nav-mobile');
		    var toggle = document.querySelector('.nav-list');
		    mobileNav.onclick = function () {
		        toggleClass(this, 'nav-mobile-open');
		        toggleClass(toggle, 'nav-active');
		    };
		})();
		
		window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x=document.getElementsByClassName("navigation");

		
    if ((document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) && document.documentElement.clientWidth < 768) {
	  
		x[0].style.top="0";
		x[0].style.transition="top 0.5s";
		x[0].style.position="fixed";		
    } 
	else{		
		
		x[0].style.transition="top 0.5s";
		x[0].style.position="relative";
		}
		
	}
function collapseFunction() {
    var x = document.getElementById("expandshrink");
	var up = document.getElementById("up");
	var down = document.getElementById("down");
    if (x.style.display === "none") {
        x.style.display = "block";
		up.style.display="inline-block";
		down.style.display="none";
    } else {
        x.style.display = "none";
		up.style.display="none";
		down.style.display="inline-block";
    }
}