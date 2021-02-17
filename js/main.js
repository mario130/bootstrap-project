$(document).ready(function(){

    'use strict';

    // $('body').scrollspy({ target: '.navbar' });
    $('body').scrollspy({ target: '#navbar' });
    // scroll opacity for navbar
    $(window).scroll(function () {
        let navbar = $('.navbar')
        if ($(window).scrollTop() >= navbar.height() + 17) { // 50 + 17 = 67
            if (navbar.is('.scrolled')) {   // for performance
                return;
            } else {
                navbar.addClass('scrolled');
            }
        } else {
            navbar.removeClass('scrolled');
        }
    })

    // tabs click transition class
    let btns = $('.btn-group-vertical button')
    let tabs = $('.tab')
    let imgs = $('.tab-img')
    btns.click(function () {
        $(this).siblings().removeClass('active').end().addClass('active');
        tabs.removeClass('active').hide()
        imgs.removeClass('avtive').hide()
        $($(this).data('tab')).fadeIn()
        $($(this).data('img')).fadeIn()
    })



    
})

$('#loginSuccess').click(()=>{
    if ($('input[name="username"]').val() !== ''
        && $('input[name="email"]').val() !== ''
        && $('input[name="pw"]').val() !== ''
    ){
        $('input[name="username"]').val("") 
        $('input[name="email"]').val("") 
        $('input[name="pw"]').val("") 
        $('#header-alert-success').slideDown().delay(3000).slideUp()
        
    } else {
        $('#header-alert-failed').slideDown().delay(3000).slideUp()

    }
})