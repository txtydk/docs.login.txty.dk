(function($) {
	var element = $('.follow-scroll'), originalY = element.offset().top;

	// Space between element and top of screen (when scrolling)
	var topMargin = 80;

	// Should probably be set in CSS; but here just for emphasis
	element.css('position', 'relative');

	$(window).on('scroll', function(event)
	{
		var scrollTop = $(window).scrollTop();

		element.stop(false, false).animate
		({
			top: scrollTop < originalY ? 0 : scrollTop - originalY + topMargin
		}, 100);
	});

	$('.nav > li > a').click(function()
	{
	    $('body').animate
	    ({
			scrollTop: eval($('#' + $(this).attr('target')).offset().top - topMargin)
		}, 1000);
	});
})(jQuery);



var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/563f534ceb4028f73bab172d/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();