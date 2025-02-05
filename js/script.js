var positionY;
var scrollTop;

var lastPositionX =0;

let compteurEchelle =1
let largeurFenetre;

    //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !


$( document ).ready(function() {
/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
largeurFenetre =$(window).width();

$(window).on( 'scroll', function(){ // FONCTIONNE BIEN
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
      var scrollReduit = scrollTop*0.05;
 
    
    $("#relique1").css({ 
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique2").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique3").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique4").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique5").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique6").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique7").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
  });


  $('.relique').on( "click", function() { // NE FONCTIONNE PAS SUR GRAND ECRAN !!
console.log('sdfsdfsdfsdf')
  
      // Augmente la largeur et la hauteur de 10%
      $(this).css({
      'scale' : ''+compteurEchelle+''
      });

      compteurEchelle = compteurEchelle+0.2;


    if (compteurEchelle > 4) {
      compteurEchelle = 1; // Reset to default size (scale = 1)
    }
  });


$('#relique1').on( "mouseenter", function() { // AUCUN NE FONCTIONNE SUR GRAND ECRAN
  $(this).css({
    "transform": 'rotate(300deg)'
    });
});

$('#relique1').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

$('#relique2').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(60deg)'
    });
});

$('#relique2').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

$('#relique3').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(110deg)'
    });
});

$('#relique3').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

$('#relique4').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(-240deg)'
    });
});

$('#relique4').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

$('#relique5').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(-40deg)'
    });
});

$('#relique5').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});


$('#relique6').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(110deg)'
    });
});

$('#relique6').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

$('#relique7').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(300deg)'
    });
});

$('#relique7').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  })


// FONCTIONNE BIEN

 $('.deplacement').on( "mousedown", function() {
  $(this).toggleClass('move') //ajouter ou retirer la classe "move" à l'élément sur lequel on clique
});


 $(window).on('mousemove', function(){
  positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
 
  //ensuite quand on bouge la sourie on déplace l'élément sur lequel on a cliqué
  $('.move').css({
      'position' : 'absolute',
      'top' : ''+positionY+'px',
      'left': event.pageX+'px'
  })
})

});