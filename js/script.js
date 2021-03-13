
$(window).on('load resize', function () {
    let active = $('.active').get(0);
    let bars = $('.fa-bars');
    let wScroll = $(window).scrollTop();
    let aboutScroll = $('#about').offset().top;
    if(window.innerWidth<768){
        active.classList.add('mobile-nav-after');
        $('#navbar').css('position','absolute');
    } else {
        active.classList.remove('mobile-nav-after');
        $('#navbar').css('position','absolute');
    }
    if(wScroll==0&&window.innerWidth>=768){
        $('#navbar').css('backgroundColor', 'transparent');
        $('#navbar').css('position','absolute');
    } else if(wScroll==0&&window.innerWidth<768) {
        $('#navbar').css('backgroundColor', '#E1807F');
        $('#navbar').css('position','absolute');
    } else {
        $('#navbar').css('backgroundColor', '#E1807F');
        $('#navbar').css('position','fixed');
    }
    if(wScroll<aboutScroll-10){
        $('.float').css('display','none');
    } else {
        $('.float').css('display','block');
    }
    if(window.innerWidth<601){
        bars.attr('class', 'fas fa-bars py-1');
    } else {
        bars.attr('class', 'fas fa-bars fa-lg py-1');
    }
    if(window.innerWidth<576){
        $('#slick-first').addClass('slick slick-list');
        $('#work .slick').slick({
            autoplay: true,
            mobileFirst: true, 
            responsive: [
            {
                breakpoint: 575,
                settings: "unslick"
            }
        ]
        });
    } else {
        $('#slick-first').removeClass('slick slick-list');
    }    
});

$('.nav-item').click(function(){
    let active = $('.active').get(0);
    active.classList.remove('active');
    if(window.innerWidth<768){
        $(this).attr('class','nav-item active mobile-nav-after');
    } else {
        $(this).attr('class','nav-item active');
    }
});

$('.nav-link').click(function() {
    let section = $(this).attr('href');
    let sectionOffset = $(section).offset().top;
    $('html,body').animate({ scrollTop: sectionOffset}, 1000);
});

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    let aboutScroll = $('#about').offset().top;
    console.log(wScroll,aboutScroll);
    if(wScroll==0&&window.innerWidth>=768){
        $('#navbar').css('backgroundColor', 'transparent');
        $('#navbar').css('position','absolute');
    } else if(wScroll==0&&window.innerWidth<768) {
        $('#navbar').css('backgroundColor', '#E1807F');
        $('#navbar').css('position','absolute');
    } else {
        $('#navbar').css('backgroundColor', '#E1807F');
        $('#navbar').css('position','fixed');
    }
    if(wScroll<aboutScroll-10){
        $('.float').fadeOut(300);
    } else {
        $('.float').fadeIn(300);
    }
});

$('.float').click(function(){
    let wScroll = $(window).scrollTop();
    let aboutScroll = $('#about').offset().top;
    if(wScroll>=aboutScroll){
        $('html,body').animate({ scrollTop: 0}, 1000);
    }
});

$(document).ready(function(){
    $('#quote .slick').slick({
        autoplay: true
    });
    $('#second-quote .slick').slick({
        autoplay: true
    });
    $('#logos .slick').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 3
            }
        },    
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
});