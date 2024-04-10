/* pre loader */
$(window).on('load',function(){
    $('.preloader').fadeOut(4000)
}) 


$(function () {

    $('#cn').spincrement({
        duration: 80000,
        leeway: 1,
        from: 0
    })

    /* slider */

    $('.slider').slick({
        prevArrow: '<i class="arrow1 fas fa-chevron-left"></i>',
        nextArrow: '<i class="arrow1 fas fa-chevron-right"></i>',
        
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000 
    })


    /*fixed menu*/
    
   $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#bottomheader').height()){
           $('#bottomheader').addClass('fixed-menu')
       }else {
           $('#bottomheader').removeClass('fixed-menu')
       }
   })



   /* back to top button */

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })



    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

  /* smooth jump */
    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })




})