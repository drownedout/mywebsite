var mainbottom = $('.jumbotron').offset().top + $('.jumbotron').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('trans');
    } else {
        $('.navbar').removeClass('trans');
   }

});