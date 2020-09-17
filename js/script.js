window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
    
};

$(document).ready(function() {
    var owl = $("#owl-demo");
    owl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        margin: 30,
        nav: true,
        items : 4,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000: {
                items:3,
                nav:true
                
            },
            1200: {
                items:4,
                nav:true
            }
        } 
    });
  });

// Seleciona o elemento que contém os contadores
var elem = $('.row.number');

// Função auxiliar que verifica se o scroll esta sob o elemento
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Variavel auxiliar par previnir varias execuções
var executed = false; 

$(window).on('scroll', function() {
    if(isScrolledIntoView(elem)) {
        
        console.log('Achou elemento');
        
        if(!executed) {
            console.log('Executou');

            // Marca como executado
            executed = true;
            $(function(){
                // Código sendo executado
                console.log('esta executando');
                const tempo_intervalo = 4; //ms -> define a velocidade da animação
                const tempo = 2000; //ms -> define o tempo total da animaçao

                $('.counter-up').each(function() {  
                    let count_to = parseInt($(this).data('count-to'));
                    let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
                    let incremento = count_to / intervalos; //quanto cada contador deve aumentar
                    let valor = 0;
                    let el = $(this);

                    let timer = setInterval(function() {
                    if (valor >= count_to){ //se já contou tudo tem de parar o timer
                    valor = count_to;
                    clearInterval(timer);
                    }

                    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                    el.text(texto);
                    valor += incremento;      
                    }, tempo_intervalo);
                });
            });  
        }         
    }

}); 