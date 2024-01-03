'use strict';

$(window).on('load',function()
	{
		/*---- Preloader----*/
		$(".loader").fadeOut();
		$("#preloader").delay(400).fadeOut("slow");
	}
);

(function ($) 
{

/*toggle nav-switch- header section*/
$(".nav-switch").on("click",function(event)
{
	$(this).toggleClass("active");
	$(".nav-wrap").slideToogle(400);
	event.preventDefault();
});

/*set background image - hero section */
$(".set-bg").each(function() 
	{
		var bg = $(this).data("setbg");
		$(this).css("background-image","url("+ bg+")");
	}
  );


}) (jQuery);
