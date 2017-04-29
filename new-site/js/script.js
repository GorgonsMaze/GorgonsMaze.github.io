/**
 * Created by ianarsenault on 4/28/17.
 */

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


new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'languages',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {label: 'Javascript', value: 20},
        {label: 'HTML & CSS', value: 10},
        {label: 'JAVA', value: 5},
        {label: 'PHP', value: 5},
        {label: 'C#/ASP.NET', value: 4}

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
    // formatter: function (x) { return x + "%"}
});

new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'serverLang',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {label: 'SQL', value: 20},
        {label: 'MySQL', value: 10}

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