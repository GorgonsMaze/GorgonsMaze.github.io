/**
 * Created by Ian Arsenault
 *
 * Work in progress - unfinished code + not cleaned up
 */



/** TODO Fix modal background scroll **/
/* ScrollTop  */
$('.contact-nav').on('click', function () {
    //alert("contact button clicked!");
    $('html body').animate({
            scrollTop: $('.contact-section').offset().top
        },
        'slow');

});

$('.about-nav, .mouse').on('click', function () {
    //alert("About nav clicked!");
    $('html body').animate({
            scrollTop: $('.about-section').offset().top
        },
        'slow');
});
//
// $(window).scroll(function () {
//     var showBtnDiv = ('.tabs-section').scrollTop();
//     if (showBtnDiv == 0) {
//         alert("Scroll reach point to show btn");
//     }
//
// });

var distance = $('.skills-section').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance+200 ) {
        //alert("Scroll point");
        // Display scroll-to-top button
    } else {
        // Hide scroll-to-top button
    }
});

/** End Scroll */

/** Tab JS */
$('.tabs ul li').on('click', function () {
    //alert("Tab clicked");
    var id = $(this).attr('data-tab');
    //lert(id);
    $('.tabs ul li').removeClass('is-active');
    $('.tab-section').removeClass('current-tab');

    $(this).addClass('is-active');
    $('#' + id).addClass('current-tab');

    if (id === "resume") {
        $('#res').hide().fadeIn(1000);
    }

});

/** End Tab Js */

/**  Notification  **/
$('.delete').on('click', function () {
    $('.notification').css('display', 'none');
});
/** End Notification */

/** Nav drop Down toggle */

var toggle = $('.nav-toggle');
var menu = $('#nav-menu');

$(toggle).on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('is-active');
    menu.toggleClass('is-active');
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.nav').length) {
        if (menu.is(":visible") && menu.hasClass('is-active')) {
            $(menu).toggleClass('is-active');
            $(toggle).toggleClass('is-active');
        }
    }
});
/** End Drop Down Nav functionality **/

/** Subtitle display */
var descriptionArr = ["Student", "Dog Enthusiast", "Web Developer", "Food Connoisseur", "Software Engineer", "Hockey Fan"];
var idx = 0;

setInterval(function () {
    $('#description').fadeOut(400, function () {
        $("#description").text(descriptionArr[idx++]).fadeIn(400);
    });
    idx == descriptionArr.length ? idx = 0 : idx;
}, 4000);

/** End Subtitle display */

/** Contact Modal */
$('#contact-btn').on('click', function () {
    //alert("Clciked!@");
    $('#contact-modal').addClass('is-active').fadeIn(30000);
    $('body').addClass('stop-scroll');
});

$('.modal-background, .modal-card-head .delete, .modal-card-foot .close-contact').on('click', function () {
    //alert("background clicked!");
    $('#contact-modal').removeClass('is-active').fadeOut(500);
    $('body').removeClass('stop-scroll');
});
/** End Contact Modal */

/** Morris Charts */
new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'languages',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {label: 'Javascript', value: 14},
        {label: 'HTML & CSS', value: 13},
        {label: 'JAVA', value: 1},
        {label: 'PHP', value: 6},
        {label: 'C#/ASP.NET', value: 5}
        // {label: 'Angular', value: 0}

    ],
    backgroundColor: '#ccc',
    labelColor: '#000500',
    colors: [
        '#1f7135',
        '#239a3b',
        '#7bc96f',
        '#c6e48b',
        '#dcfa9e'
    ]
});

new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'serverLang',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {label: 'SQL', value: 6},
        {label: 'MySQL', value: 6}
        // {lable: 'Nodejs', value: 0}

    ],
    backgroundColor: '#ccc',
    labelColor: '#000500',
    colors: [
        '#cd7106',
        '#ff8d07'

    ]
    // formatter: function (x) { return x + "%"}
});

new Morris.Bar({
    element: 'schoolLang',
    data: [
        {year: '2015', value: 2},
        {year: '2016', value: 5},
        {year: '2017', value: 8}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    labels: ['Languages being learned'],
    hideHover: 'auto',
    backgroundColor: '#ccc',
    labelColor: '#000500',
    barColors: [
        '#549cc4',
        '#239a3b',
        '#7bc96f',
        '#c6e48b',
        '#dcfa9e'
    ]
});

/** End Morris Charts */