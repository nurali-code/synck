
$('.menu-bar, .close-menu-bar').on('click', function () {
    $('.navbar-wrapper').toggleClass('active');
})
// $('.nav__link').on('click', function () {
//     $('.nav, .btn_menu, body').removeClass('is_active');
// })


// $(window).scroll(function () {
//     if ($(this).scrollTop() > 5) { $('.header-area').addClass('is-fixed'); }
//     else { $('.header-area').removeClass('is-fixed'); }
// });

// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80, }, 300,)
// });
