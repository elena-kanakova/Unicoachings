// Определение типа устройства и замена ссылки
$(document).ready(function() {
    if ($('html').hasClass('desktop')) {
        $('.js-tel').removeAttr('href');
    } else {
        $('.js-tel').each(
            function (index, value) {
                var tel = $(this).attr('data-tel');
                $(this).prop('href',tel);
                console.log(tel);
            });
    };
});
// Инициализация wow
new WOW().init();
// Прелоадер
$(document).ready(function() {
    $('#preloader').fadeOut(200);
    $('html').removeClass('fixed');
});
// Маска для телефона
$(function(){
    $(".phone").mask("0152 999 999 99");
});
// Модальные окна
$(document).ready(function() {
    $('.modal-link, .link-modal_btn').click(function(e) {
        e.preventDefault();
        $('.modal').fadeOut('200');
        if ($(window).width() < 641) {
            $(".btn-menu").removeClass("open");
            $("#main-header").removeClass("open");
            $('html').removeClass("fixed");
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        };

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html,#main-header').addClass('fixed');
        $('#overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#overlay, .modal').fadeOut(200);
        $('html,#main-header').removeClass('fixed');
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
function form_call() {
    var msg   = $('#form_call').serialize();
    $.ajax({
        type: 'POST',
        url: 'action_call.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#thx_modal, #overlay').fadeIn(200);
                $('#call_modal').fadeOut(200);
                $('#form_call')[0].reset();
                setTimeout(function(){$('#overlay, #thx_modal').fadeOut('200'); $('html').removeClass('fixed');}, 2000);
            }

            else{

                $('#form_call')[0].reset();

            }
        },
        error:  function(xhr, str){
            $('#form_call')[0].reset();
        }
    });
};
function form_about() {
    var msg   = $('#form_about').serialize();
    $.ajax({
        type: 'POST',
        url: 'action_about.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#thx_modal, #overlay').fadeIn(200);
                $('#about_modal').fadeOut(200);
                $('#form_about')[0].reset();
                $('html').removeClass('fixed');
                setTimeout(function(){$('#overlay, #thx_modal').fadeOut('200')}, 2000);
            }

            else{

                $('#form_about')[0].reset();

            }
        },
        error:  function(xhr, str){
            $('#form_about')[0].reset();
        }
    });
};
function form_happy() {
    var msg   = $('#form_happy').serialize();
    $.ajax({
        type: 'POST',
        url: 'action_happy.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#thx_modal, #overlay').fadeIn(200);
                $('#happy_modal').fadeOut(200);
                $('#form_happy')[0].reset();
                $('html').removeClass('fixed');
                setTimeout(function(){$('#overlay, #thx_modal').fadeOut('200')}, 2000);
            }

            else{
                $('#form_happy')[0].reset();

            }
        },
        error:  function(xhr, str){
            $('#form_happy')[0].reset();
        }
    });
};
function form_section_4() {
    var msg   = $('#form_section-4').serialize();
    $.ajax({
        type: 'POST',
        url: 'action_s4.php',
        data: msg,
        success: function(data) {

            if (data.result==1){
                $('#thx_modal, #overlay').fadeIn(200);
                $('#form_section-4')[0].reset();
                $('html').removeClass('fixed');
                setTimeout(function(){$('#overlay, #thx_modal').fadeOut('200')}, 2000);
            }

            else{
                $('#form_section-4')[0].reset();

            }
        },
        error:  function(xhr, str){
            $('#form_section-4')[0].reset();
        }
    });
};
// Меню
$(document).ready(function() {
    if ($(window).width() < 641) {
        $(".btn-menu").click(function () {
            $(this).toggleClass("open");
            $('html').toggleClass("fixed");
            $('#main-header').toggleClass("open");
            $('#overlay').fadeToggle(200);
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeToggle(200);
        });

        $('#overlay').click(function () {
            $(".btn-menu").removeClass("open");
            $('#main-header').removeClass("open");
            $('html').removeClass("fixed");
            $(this).fadeOut(200);
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        });

        $(".js-nav-link, js-nav-link-2").click(function () {
            $('.btn-menu, #overlay, #main-header').removeClass("open");
            $('html').removeClass("fixed");
            $('#overlay').fadeOut(200);
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        });
    }
    else {
        if ($(window).width() > 640) {
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").removeAttr('style');
        };
    };
});