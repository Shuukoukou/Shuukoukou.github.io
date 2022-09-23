var navbar = document.getElementsByClassName("intro-navigate")[0],
	h = window.innerHeight;

//window.addEventListener("scroll", scrollHandler);

function getStyle(obj, attri) {
 	return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
}

function scrollHandler(e) {
	 var event = e || window.event,
	     target = event.target || event.srcElement;
	 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	 if (scrollTop > h - navbar.offsetHeight) {
	     navbar.classList.add("fixed");
	 } else {
	     navbar.classList.remove("fixed");
	 }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > h - navbar.offsetHeight || document.documentElement.scrollTop > h - navbar.offsetHeight) {
		navbar.style.backgroundColor = "green";
		nambar.style.zIndex = "-1";
	} else {
	  navbar.style.backgroundColor = "transparent";
	}
  }
