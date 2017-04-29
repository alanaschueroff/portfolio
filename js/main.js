
$(document).ready(function(){
	
	$('.topo-links').click(function(e){
		var id = $(this).prop('rel');
		var deslocamento = $(id).offset().top;

		$('.div01-menu-mobile-links').hide();
		
		$('html, body').animate({ scrollTop: deslocamento-100 }, 'slow');
		window.history.pushState( '/'+id, 'S2A', '/'+id );
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
	
	/*animacao();*/
   	
});

/*$(document).scroll(function() {
	animacao();
});

function animacao(x){
	setTimeout("exibirCaixa('.bloco01 h1', $(this).scrollTop(), 'fadeInDown')", 0);
	setTimeout("exibirCaixa('.bloco01 p', $(this).scrollTop(), 'fadeInDown')", 0);
	
	setTimeout("exibirCaixa('.bloco02 h1', $(this).scrollTop(), 'fadeInRight')", 0);
	setTimeout("exibirCaixa('.bloco02 p', $(this).scrollTop(), 'fadeInRight')", 0);
	
	setTimeout("exibirCaixa('.bloco03 h1', $(this).scrollTop(), 'fadeInLeft')", 0);
	setTimeout("exibirCaixa('.bloco03 p', $(this).scrollTop(), 'fadeInLeft')", 0);
	
	setTimeout("exibirCaixa('.bloco04 h1', $(this).scrollTop(), 'fadeInDown')", 0);
	setTimeout("exibirCaixa('.bloco04 p', $(this).scrollTop(), 'fadeInDown')", 0);
	
	setTimeout("exibirCaixa('.bloco05 h1', $(this).scrollTop(), 'fadeInLeft')", 0);
	setTimeout("exibirCaixa('.bloco05 p', $(this).scrollTop(), 'fadeInLeft')", 0);
}

function exibirCaixa(elemento, distancia_topo, animacao){
	
	console.log(elemento);
	
	var elemento_posicao = $(elemento).position().top;
	var alutra_documento = window.innerHeight;
	
	if(alutra_documento+distancia_topo>elemento_posicao){
		$(elemento).addClass('animated ' + animacao);
	}else{
		reset(elemento);
	}
	
}

function reset(elemento) {
	$(elemento).removeClass('animated fadeInRight');
	$(elemento).removeClass('animated fadeInLeft');
	$(elemento).removeClass('animated fadeInUp');
	$(elemento).removeClass('animated fadeInDown');
}*/

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


