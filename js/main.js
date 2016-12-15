// DESCTOP MENU
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('#toggle').parents('.inside-page-header').css('padding: 0;')
});

$(document).ready(function() {
	$('.special-offers-slider').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		infinite: true,
		// speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '20px',
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		}
		]
	});
});
//scroll to top
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
    	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    	if( $(this).scrollTop() > offset_opacity ) {
    		$back_to_top.addClass('cd-fade-out');
    	}
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
    	event.preventDefault();
    	$('body,html').animate({
    		scrollTop: 0 ,
    	}, scroll_top_duration
    	);
    });

  });