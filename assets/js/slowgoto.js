$("#novedadesB").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#novedades").offset().top
    }, 2000);
});

$("#horariosB").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#horarios").offset().top
    }, 2000);
});

$("#bibliografiaB").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#bibliografia").offset().top
    }, 2000);
});

$("#nosotrosB").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#nosotros").offset().top
    }, 2000);
});
