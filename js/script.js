/**
 * Created by ianarsenault on 6/21/16.
 */
$(document).ready(function(){
    $(".main-content").fadeIn(1000);

    //$("nav").hide();

    // hides scroll-to-top button
    //$("#fixBotRight").hide();
    // Hide side-nav X
    $(".xedOut").hide();


    /* about me card hvr
     $("#about-card").hover(function () {
     $("#about-card").addClass('z-depth-2');
     }, function () {
     $("#about-card").removeClass('z-depth-2');
     });
     */

    $('.parallax').parallax();

    $('ul.tabs').tabs();

    /* the "href" attribute of .modal-trigger must specify
     * the modal ID that wants to be triggered  */
    $('.modal-trigger').leanModal();

    /* Education Tab - Content Fade */
    $("#education-bar").on('click', function () {
        $("#education").fadeIn('slow');
    });

    /* Skills Tab Content Fade Section */
    $("#skills-bar").on('click', function () {
        $("#skill-card").fadeIn('slow');
    });
    $("#education-bar, #about-bar, #resume-bar, #google-map-tab").on('click', function () {
        $("#skill-card").fadeOut();
    });

    /* About Me Tab - Content Fade Section */
    $("#about-bar").on('click', function () {
        $("#aboutme").fadeIn('slow');
    });

    /* Resume Tab - Content Fade Section */
    $("#resume-bar").on('click', function () {
        $("#resume").fadeIn('slow');
    });

    /* Location Tab - Content Fade Section */
    $("#google-map-tab").on('click', function () {
        $("#location").fadeIn('slow');
    });


    $("#skills-bar, #refresh-graph").on('click', function(e) {
        /* Restart animation from beginning */
        $( "div" ).css({
            width: ""
        });
        /* HTML CSS Progress Bar Animation */
        $(".progress-bar-1").animate({
            width: "85%"
        }, 500);
        /* Javacsript Progress Bar Animation */
        $(".progress-bar-2").animate({
            width: "68%"
        }, 500);
        /* C# Progress Bar Animation */
        $(".progress-bar-3").animate({
            width: "60%"
        }, 500);
        /* C++ Progress Bar Animation */
        $(".progress-bar-4").animate({
            width: "30%"
        }, 500);
        /* PHP MySQL Progress Bar Animation */
        $(".progress-bar-5").animate({
            width: "39%"
        }, 500);

        e.preventDefault();
    });

    /*$(".progress-bar").animate( {
     width: "100%"
     }, 200 );*/

    /* Icon text fades on load */
    $(".icon-text").fadeOut();

    /*(".devicon-html5-plain").hover(function () {
     $('#html5-text').fadeIn().addClass('animated');
     $(this).css('visibility','visible')
     }, function () {
     $('#html5-text').removeClass('animated');
     }); */

    /* Tools */
    $(".devicon-html5-plain").hover(function () {
        $('#html5-text').fadeIn().addClass('animated');

    }, function () {
        $('#html5-text').fadeOut().removeClass('animated');
    });

    $(".devicon-css3-plain").hover(function () {
        $('#css3-text').fadeIn().addClass('animated');
    }, function () {
        $('#css3-text').fadeOut().removeClass('animated');
    });

    $(".devicon-javascript-plain").hover(function () {
        $('#javascript-text').fadeIn().addClass('animated');

    }, function () {
        $('#javascript-text').fadeOut().removeClass('animated');
    });

    $(".devicon-jquery-plain").hover(function () {
        $('#jquery-text').fadeIn().addClass('animated');

    }, function () {
        $('#jquery-text').fadeOut().removeClass('animated');
    });
    $(".devicon-bootstrap-plain ").hover(function () {
        $('#bootstrap-text').fadeIn().addClass('animated');
    }, function () {
        $('#bootstrap-text').fadeOut().removeClass('animated');
    });
    $(".devicon-cplusplus-plain").hover(function () {
        $('#cplusplus-text').fadeIn().addClass('animated');
    }, function () {
        $('#cplusplus-text').fadeOut().removeClass('animated');
    });
    $(".devicon-csharp-plain").hover(function () {
        $('#csharp-text').fadeIn().addClass('animated');
    }, function () {
        $('#csharp-text').fadeOut().removeClass('animated');
    });
    $(".devicon-github-plain").hover(function () {
        $('#github-text').fadeIn().addClass('animated');
    }, function () {
        $('#github-text').fadeOut().removeClass('animated');
    });
    $(".devicon-git-plain").hover(function () {
        $('#git-text').fadeIn().addClass('animated');
    }, function () {
        $('#git-text').fadeOut().removeClass('animated');
    });
    $(".devicon-dot-net-plain").hover(function () {
        $('#aspnet-text').fadeIn().addClass('animated');
    }, function () {
        $('#aspnet-text').fadeOut().removeClass('animated');
    });
    /*$(".devicon-foundation-plain").hover(function () {
     $('#foundation-text').fadeIn().addClass('animated');
     }, function () {
     $('#foundation-text').fadeOut().removeClass('animated');
     });*/
    $(".devicon-php-plain").hover(function () {
        $('#php-text').fadeIn().addClass('animated');
    }, function () {
        $('#php-text').fadeOut().removeClass('animated');
    });
    $(".devicon-mysql-plain").hover(function () {
        $('#mysql-text').fadeIn().addClass('animated');
    }, function () {
        $('#mysql-text').fadeOut().removeClass('animated');
    });
    /*$(".devicon-sass-original").hover(function () {
     $('#sass-text').fadeIn().addClass('animated');
     }, function () {
     $('#sass-text').fadeOut().removeClass('animated');
     });
     $(".devicon-illustrator-line").hover(function () {
     $('#illustrator-text').fadeIn().addClass('animated');
     }, function () {
     $('#illustrator-text').fadeOut().removeClass('animated');
     });*/
    $(".devicon-trello-plain").hover(function () {
        $('#trello-text').fadeIn().addClass('animated');
    }, function () {
        $('#trello-text').fadeOut().removeClass('animated');
    });
    $(".devicon-jetbrains-plain").hover(function () {
        $('#jetbrains-text').fadeIn().addClass('animated');
    }, function () {
        $('#jetbrains-text').fadeOut().removeClass('animated');
    });
    $(".devicon-photoshop-line").hover(function () {
        $('#photoshop-text').fadeIn().addClass('animated');
    }, function () {
        $('#photoshop-text').fadeOut().removeClass('animated');
    });
    $(".devicons-materializecss").hover(function () {
        $('#materialize-text').fadeIn().addClass('animated');
    }, function () {
        $('#materialize-text').fadeOut().removeClass('animated');
    });

    /* Function to change color of tooltips */
    $(".tooltipped").hover(function() {
        var tooltipId = $(this).data('tooltip-id');
        var fg = $(this).data('tooltip-fg');
        var bg = $(this).data('tooltip-bg');
        $('#' + tooltipId).css({
            backgroundColor: bg,
            color: fg
        });
    });

    /* For the animate method to work you need to link
     jquery-color  https://cdnjs.com/libraries/jquery-color

     $(".tooltipped").hover(function() {
     var tooltipId = $(this).data('tooltip-id');
     var fg = $(this).data('tooltip-fg');
     var bg = $(this).data('tooltip-bg');
     $('#' + tooltipId).animate({
     backgroundColor: bg,
     color: fg
     });
     }); */


    // Carousel Initialization */
    $('.carousel').carousel();
    // Initializes drop down nav buttons
    $(".dropdown-button").dropdown();
    // Side-nav on mobile Initialization
    //$(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    // Accordian Initialization
    $('.collapsible').collapsible({
        accordion: false // false changes collapsible behavior to expandable instead of accordion
    });
    // Close side-nav bar on 'x' click
    $("#exit").on('click', function () {
        // Hide sideNav
        $('.button-collapse').sideNav('hide');
    });
    // Scrollspy function
    $('.scrollspy').scrollSpy();

    // for HTML5 "required" attribute
    $("select[required]").css({
        display: "inline",
        height: 0,
        padding: 0,
        width: 0
    });
    
    /* Fixed Navbar Scroll */
    var lastScrollTop = 0;
    var navbar = $('.navbar-fixed');
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y > lastScrollTop) {
            // scrolling down code
            //alert("down");
            navbar.css({
                visibility: "hidden",
                transition: "opacity 0.5s linear",
                opacity: 0
            });
        } else {
            // scrolling up code
            //alert("up");
            navbar.css({
                visibility: "visible",
                transition: "opacity 0.5s linear",
                opacity: 1
            });

        }
        lastScrollTop = y;
        var scrolly = $('body').scrollTop();
        setTimeout(function () {
            if(scrolly == $('body').scrollTop()) {
                navbar.css({
                    visibility: "visible",
                    transition: "opacity 0.5s linear",
                    opacity: 1
                });
            }
        }, 500);

        /*  Bottom right hand corner button - Scroll to top function
         *   will appear when window scroll reaches a certain point
         *   - added animation to when it comes into view ********/
        if (y > 600) {
            $("#fixBotRight").fadeIn().addClass("animated fadeInDown");

        } else {
            $("#fixBotRight").fadeOut();
        }

        console.log($(window).scrollTop() == ($(document).height() - $(window).height()));

    });


    //$('.button-collapse').sideNav({ closeOnClick: true });


    /* On Side-nav Hamburger click > transition to X button */
    $(".hammy").on('click',function () {
        $(".hammy").removeClass('rotateIn').addClass('rotateOut');
        $(".xedOut").show();
    });
    /* On side-nav X click transition > back to Hamburger icon */
    $(".xedOut").on('click', function () {
        $(".xedOut").hide();
        $(".hammy").removeClass('rotateOut').addClass('rotateIn');
    });


    /*****************************************************
     *   GET RID OF THIS WHEN WEBSITE IS LIVE
     */
    /* Prevent default on links for now */
    $(".hvr-float").on('click', function (e) {
        e.preventDefault();
    });
    /* Checking to see if which carousel-item is in the center of window
     and adding css styling to it - background-color or box-shadow
     */
    var windowCenter = $(window).width() /2;

    if($('#caro-card') >= windowCenter) {
        $('#caro-card').addClass('reddy');
    }
    else if ($('#caro-card') <= windowCenter) {
        $('#caro-card').removeClass('reddy');
    }


    /* Hero Video */
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


});


function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}