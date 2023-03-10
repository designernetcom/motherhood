/*
Template Name:  Alphabet
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/
jQuery(function ($) {
	

$(document).ready(function () {
	
	if(window.location.href.indexOf("index.php") > -1) {
			
		var element = document.getElementById("footer-divider");
		element.classList.remove("white");

		$( ".home a" ).addClass( "active" );
	
		   
	}
	if(window.location.href.indexOf("index-boxed.php") > -1) {
			
		document.getElementById('page-top').classList.add('boxed');
document.getElementById('page-top').classList.remove('full');
	
		   
	}
	if(window.location.href.indexOf("index-video.php") > -1) {
			
		var element = document.getElementById("footer-divider");
		element.classList.remove("white");

		$( ".home a" ).addClass( "active" );
	
		   
	}
		

	if (window.location.href.indexOf('blog') > -1) {
			$( ".blog-dropdown" ).addClass( "active" );
	}

	if (window.location.href.indexOf('page') > -1) {
			$( ".page-dropdown" ).addClass( "active" );
	}



 
	  




	
		// get current URL path and assign 'active' class
   $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
	

    }); // end document ready

	 
	 	
   
});