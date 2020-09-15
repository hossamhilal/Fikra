/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.navBtn').on('click', function () {
        $(this).toggleClass('open');
        $('.navMenu').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });

    // Scroll Down
    $('.scrollDownBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1200, 'linear');
    });

    $(window).on('scroll', function(){
        // let sticky = $('.abou').offset().top;
        let sticky = 400;
        if ($(window).scrollTop() >= sticky) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    });

    // Services Owl
    $('.owlServices').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
  
    // Projects Owl
    $('.owlProjects').owlCarousel({
        rtl: true ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots:true,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Clients Owl
    $('.owlSponsors').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots:false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // Testimonial Owl
    let owlTestimonial = $('.owl-carousel');
    owlTestimonial.owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots:false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // Go to the next item
    $('.nextopinion').click(function() {
        owlTestimonial.trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.prevOpinion').click(function() {
        owlTestimonial.trigger('prev.owl.carousel', [1000]);
    })

    // Filter Tab
    $('.filterTab').on('click', function(e) {
        e.preventDefault();
        $('.filterTab').removeClass('active animate');
        $(this).addClass('active animate');
        setTimeout(function(){
            $('.filterTab').removeClass('animate');
        },700);
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');  
    });

    // INPUT ANIMATION 
    $('.filedInput').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.filedInput').focus(function(){
        $(this).parent().addClass('focused');
    });

    $('.filedInput').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });

    // iniat WOW Js
    new WOW().init();

});


