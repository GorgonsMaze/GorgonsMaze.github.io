/**
 * Created by ianarsenault on 7/15/16.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
        }
    );

    /* This section */
    $("#side-home, #side-bio, #side-posts, #side-articles, #side-pictures").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
        $(this).removeClass('side-btn-animation');
    });
    $("#side-home, #side-bio, #side-posts, #side-articles, #side-pictures").hover(function () {
       $(this).addClass('side-btn-animation') ;
    });

    /*$(".btn-like").on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("btn-click");
        $(this).children('#heart').css("color","red");
    });



    $("#about-card").hover(function () {
        $("#about-card").addClass('z-depth-2');
    }, function () {
        $("#about-card").removeClass('z-depth-2');
    });*/

    $("#heart2").on("click", function(e) {
        e.preventDefault();
        $(this).css("color","pink");
    });
    
    
    /*$(".btn-like").on('click', function () {
       $(this).find('#heart').toggleClass('heart-click');
    });*/


});