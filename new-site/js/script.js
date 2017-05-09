/**
 * Created by Ian Arsenault
 *
 * Work in progress - unfinished code + not cleaned up
 */
/** TODO Fix modal background scroll **/
// TODO: Create Edu grade table using Object

// On page load fade out header background
$('#header-img-fade').css('background', 'rgba(0, 0, 0, 0)');

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

$('.up-btn').on('click', function () {
    $('html body').animate({
        scrollTop: '0px'
    }, 'slow');
});

var distance = $('.skills-section').offset().top,
    $window = $(window);

$window.scroll(function () {
    if ($window.scrollTop() >= distance + 200) {
        $('.up-btn').addClass('show-me');
    } else {
        $('.up-btn').removeClass('show-me');
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
    resize: true,
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
    element: 'serverLang',
    resize: true,
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
    resize: true,
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

/* Dynamic Grade Table **/

function gradeTable() {
    var gradeObj = [
        {
            qtr: 1,
            class: "IT Visual Communication",
            id: "IT121.11",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 1,
            class: "Technical Math I",
            id: "MA125.41M",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 1,
            class: "Computer & Network Fundamentals",
            id: "NE115.11",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 1,
            class: "Programming in C++",
            id: "SE114.11",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 2,
            class: "Windows Networking Essentials",
            id: "NE121.12",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 2,
            class: "HTML & Javascript",
            id: "SE111.12",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 2,
            class: "Intermediate Progr. Using C++",
            id: "SE124.12",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 3,
            class: "Business Math",
            id: "MA121.11M",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 3,
            class: "Effective Team Managment & Projects",
            id: "MGM115.13",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 3,
            class: "Networking for Small Business",
            id: "NE131.13",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 3,
            class: "Database Management - SQL",
            id: "SE133.13",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 4,
            class: "Physics I & Lab",
            id: "PHY200.02M",
            grade: "A",
            completed: "completed"
        },
        { qtr: 4, class: "C#", id: "SE245.04", grade: "A", completed: "completed" },
        {
            qtr: 4,
            class: "Systems Analysis & Design - UML",
            id: "SE252.04",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 4,
            class: "Web Dev using PHP & MySQL",
            id: "SE266.04",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 5,
            class: "Advanced Javascript",
            id: "SE241.15",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 5,
            class: "Advanced C#",
            id: "SE255.15",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 5,
            class: "User Interface Design UI/UX",
            id: "SE264.05",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 6,
            class: "IT Ethics & Professional Development",
            id: "IT267.16",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 6,
            class: "Intro to Information Security",
            id: "NE267.16",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 6,
            class: "SE AS Capstone Project",
            id: "SE265.06",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 6,
            class: "Web Development using ASP.NET",
            id: "SE256.06",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 7,
            class: "Research Writing",
            id: "EN331.00C",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 7,
            class: "Technical Math II",
            id: "MA210.90M",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 7,
            class: "Intro to Genetics & Evolution",
            id: "SCI350.95M",
            grade: "A",
            completed: "completed"
        },
        {
            qtr: 8,
            class: "Database Management",
            id: "IT378.57",
            grade: "N/A",
            completed: "in-session"
        },
        {
            qtr: 8,
            class: "Advanced PHP Programming",
            id: "SE396.57",
            grade: "N/A",
            completed: "in-session"
        },
        {
            qtr: 8,
            class: "Java",
            id: "SE385.57",
            grade: "N/A",
            completed: "in-session"
        }
    ];

    // Todo CREATE TABLE USING gradeObj and cal function on load

    //console.log(Object.keys(gradeObj).length);

    var length = gradeObj.length;
    var quarter = "";
    var cls = "";
    var id = "";
    var grade = "";
    var completed = "";

    for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {

        }
    }

    return length;
}
gradeTable();

console.log(gradeTable());
