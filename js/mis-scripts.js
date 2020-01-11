
/*-------------------------------------------------------------------------------------- 
1. FUNCIONES PARA EL MENU PRINCIPAL
----------------------------------------------------------------------------------------*/

$(function(){

    /* Inserta y quita la clase ".icono-cerrar" al boton del menu */
  $('#menu-navegacion .navbar-toggler').click(function(){
     $('.boton-menu').toggleClass('icono-cerrar'); 
  }); 
  
  /* Al hacer clik en un anlace del menu principal */
  $('#menu-navegacion .navbar-nav a').click(function(){

    /* 1) Quita la clase ".icono-cerrar" */
    $('.boton-menu').removeClass('icono-cerrar');

    /* 2) Contraemos el menu */
    $('#menu-navegacion .navbar-collapse').collapse('hide');
  });


/*-------------------------------------------------------------------------------------- 
2. INICIANDO SWIPER
----------------------------------------------------------------------------------------*/
var swiper = new Swiper('#animacion', {
  /* Botones de navegacion */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* Botones de paginacion */
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed:200,
  effect:'fade',
  grabCursor:true,
  loop:true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  }

});


/*-------------------------------------------------------------------------------------- 
2. INICIANDO SWIPER
----------------------------------------------------------------------------------------*/
$('.venobox-video').venobox({
  autoplay: true,
  bgcolor: 'rgba(255, 255, 255, 0.4)',
  border:'10px',
  // closeBackground:'red',
  // overlayClose:false,
  overlayColor:'rgba(12, 60, 22, 0.83)',
  spinner: 'three-bounce'
});


/*-------------------------------------------------------------------------------------- 
2. INICIANDO jquery.counterup
----------------------------------------------------------------------------------------*/
$('.counter').counterUp();


})
    
  