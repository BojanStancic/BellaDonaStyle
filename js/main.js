var toggleBurger = document.querySelector('.burgerBtn');
var nav = document.querySelector('.nav');
var dropdown = document.querySelector('.dropdown');
var drop = document.querySelector('#drop');
var moveUp = document.querySelector('.move-up');



toggleBurger.onclick = () => {
	nav.classList.toggle("collapse");
	toggleBurger.classList.toggle("rotate");
	
}

drop.onclick = () => {
	 
	dropdown.classList.toggle("dropdown_show");

}

var gallery = {
	hide : function () {
		document.getElementById("Outer").classList.remove("show");
	},

	show : function (img) {
		var clone = img.cloneNode(),
			front = document.getElementById("Inner"),
			back = document.getElementById("Outer");
		front.innerHTML = "";
		front.appendChild(clone);
		back.classList.add("show");

		
	}
};



window.onscroll = function() {


	function scrollFunction() {
	  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
	    moveUp.style.display = "block";
	  } else {
	    moveUp.style.display = "none";
	  }

	}


scrollFunction();
}




$(document).ready(function(){
	

	// Mark active page
	$(function($) {

		let url = window.location.href;

		  $('.nav-links li > a').each(function() {

		    if (this.href === url) {
		    $(this).removeClass('active');
		    $(this).addClass('active');
		   }
		 });
	});

	// Move-up arrow 
	$('.move-up').click(function() {
		$('html, body').animate({
		scrollTop: 0
		}, 1500);
	});

	// Animate on Scroll JS Instance
	AOS.init();
	
});

