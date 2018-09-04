// Модальные окна
$(document).ready(function() {
    $('.modal-link, .link-modal_btn').click(function(e) {
        e.preventDefault();
        $('.modal').fadeOut('200');

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html').addClass('fixed');
        $('#overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#overlay, .modal').fadeOut(200);
        $('html').removeClass('fixed');
    });

    $('body').on('click', '#overlay', function(event) {
        event.preventDefault();
        $('#overlay, .modal').fadeOut('200');
        $('html').removeClass('fixed');
    });
});
// Скролл и шапка
$('a.js-nav-link').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -110 + "px"
    }, {
        duration: 800
    });
});
$('a.js-nav-link-2').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -150 + "px"
    }, {
        duration: 800
    });
});
// Слайдер с отзывами
$(document).ready(function() {
    $('#slider_opinions').owlCarousel({
        margin:0,
        nav:true,
        autoplay:false,
        autoplaySpeed: 10,
        loop: true,
        itemElement:'div',
        navClass:['opinions_arrow-prev', 'opinions_arrow-next'],
        navText: ['','<span>Следующий отзыв</span>'],
        dots: false,
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});
// Формы
function form_section_4() {
    var msg   = $('#form_section-4').serialize();
    $.ajax({
        type: 'POST',
        url: 'action.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#thx_modal, #overlay').fadeIn(200);
                $('#form_section-4')[0].reset();
                setTimeout(function(){$('#overlay, #thx_modal').fadeOut('200')}, 2000);
            }

            else{

                $('#form-error, #overlay').fadeIn(200);
                setTimeout(function(){$('#form-error, #overlay').fadeOut('200')}, 2000);

            }
        },
        error:  function(xhr, str){
            $('#form-error-2, #overlay').fadeIn(200);
            setTimeout(function(){$('#overlay, #form-error-2').fadeOut('200')}, 2000);
        }
    });
};
function form_about() {
    var msg   = $('#form_about').serialize();
    $.ajax({
        type: 'POST',
        url: 'action.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#about_modal, #overlay').fadeOut(200);
                $('#thx_modal, #overlay').fadeIn(200);
                $('#form_about')[0].reset();
                setTimeout(function(){$('#overlay, #thx_modal, #about_modal').fadeOut('200')}, 2000);
            }

            else{
                $('#about_modal, #overlay').fadeOut(200);
                $('#form-error, #overlay').fadeIn(200);
                setTimeout(function(){$('#form-error, #overlay').fadeOut('200')}, 2000);

            }
        },
        error:  function(xhr, str){
            $('#form-error-2, #overlay').fadeIn(200);
            setTimeout(function(){$('#overlay, #form-error-2').fadeOut('200')}, 2000);
        }
    });
};
function form_happy() {
    var msg   = $('#form_happy').serialize();
    $.ajax({
        type: 'POST',
        url: 'action.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#happy_modal, #overlay').fadeOut(200);
                $('#thx_modal, #overlay').fadeIn(200);
                $('#form_happy')[0].reset();
                setTimeout(function(){$('#overlay, #thx_modal, #happy_modal').fadeOut('200')}, 2000);
            }

            else{
                $('#happy_modal, #overlay').fadeOut(200);
                $('#form-error, #overlay').fadeIn(200);
                setTimeout(function(){$('#form-error, #overlay').fadeOut('200')}, 2000);

            }
        },
        error:  function(xhr, str){
            $('#form-error-2, #overlay').fadeIn(200);
            setTimeout(function(){$('#overlay, #form-error-2').fadeOut('200')}, 2000);
        }
    });
};