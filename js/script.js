/*Nav*/

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/*Smooth scroll*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
});

/*Hamburger*/

 $(document).ready(function() {
    $('.navbar-collapse a').click(function(){ 
      $('.navbar-collapse').css('height', '0');
      $('.navbar-collapse').removeClass('in');
    });  
 });