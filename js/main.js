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

		// clone.onload = function() {

		// 	let newNextBtn = document.createElement('a');
			// newNextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';  /* OTJOMENTARISATI SVE DO -- Moze i oako-- ako se nastavja ovaj nacin*/
		// 	front.appendChild(newNextBtn);
		// 	newNextBtn.setAttribute('class', 'img-btn-next');
		// 	newNextBtn.setAttribute('onclick', 'changeImg(1)');

		// 	let newPrevBtn = document.createElement('a');
		// 	newPrevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
		// 	front.appendChild(newPrevBtn);
		// 	newPrevBtn.setAttribute('class', 'img-btn-prev');
		// 	newPrevBtn.setAttribute('onclick', 'changeImg(0)');



		// }
	}
};

// function closeImg() {
// 	document.querySelector('.img-btn-next').remove();
// 	document.querySelector('.img-btn-prev').remove();
// }

// var next = document.querySelector('.img-btn-prev');  // ne radi, samo za probu uradjeno
// next.onclick = () => {
	 
// 	next.classList.toggle("bravo");

// }


// Moze i ovako :
// toggleBurger.addEventListener('click', () => {  
// 	toggleBurger.classList.toggle("rotate");
// 	nav.classList.toggle("collapse");

// });

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

