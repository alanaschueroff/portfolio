
$(document).ready(function(){

	$('.topo-links').click(function(e){
		var id = $(this).prop('rel, #');
		var deslocamento = $(id).offset().top;

		$('.div01-menu-mobile-links').hide();

		$('html, body').animate({ scrollTop: deslocamento-100 }, 'slow');
		window.history.pushState( '/'+id, 'Alana Schueroff', '/'+id );
		$('.topo-links-caixa').slideToggle();
		$('.topo-links-caixa').removeClass('mobile-esconder').addClass('mobile-esconder');
		return false;
	});


	/*$('.fancy').fancybox({ padding:0 });*/

	/*setTimeout(checarAncora,900);*/

	$('.topo-mobile-button').click(function(){
		$('.topo-links-caixa').removeClass('mobile-esconder');
		$('.topo-links-caixa').slideToggle();
	});

});

setTimeout(function start (){

  $('.bar').each(function(i){
	var $bar = $(this);
	$(this).append('<span class="count"></span>')
	setTimeout(function(){
	  $bar.css('width', $bar.attr('data-percent'));
	}, i*100);
  });

$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).parent('.bar').attr('data-percent')
	}, {
		duration: 2000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now) +'%');
		}
	});
});

}, 500)