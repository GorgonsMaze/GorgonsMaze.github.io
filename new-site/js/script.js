/**
 * Created by Ian Arsenault
 *
 * Work in progress - unfinished code + not cleaned up
 */
/** TODO Fix modal background scroll **/
// TODO fix firefox scrollTop issue
// TODO: Add search functionality to projects panel
// TODO CLEAN UP THIS CODE!

// On page load fade out header background
$('#header-img-fade').css('background', 'rgba(0, 0, 0, 0)');

/* ScrollTop  */
function scrollToiD(divID) {
    $('html, body').animate({
        scrollTop: $('#' + divID).offset().top
    }, 'slow');
}

$('.contact-nav').on('click', function () {
    scrollToiD('contactsection');
    return false;
});

$('.mouse').on('click', function () {
    //alert("About nav clicked!");
    // $('html, body').animate({
    //         scrollTop: $('.about-section').offset().top
    //     },
    //     'slow');
    scrollToiD('about');
    return false;
});

$('.up-btn').on('click', function () {
    $('html, body').animate({
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

$('.modal-background, .modal-card-head .delete, .modal-card-foot .close').on('click', function () {
    //alert("background clicked!");
    $('#contact-modal').removeClass('is-active').fadeOut(500);
    $('body').removeClass('stop-scroll');
});
/** End Contact Modal */

/** Contact Modal */
$('#gradebtn').on('click', function () {
    //alert("Clciked!@");
    $('#grademodal').addClass('is-active').fadeIn(30000);
    $('body').addClass('stop-scroll');
});

$('.modal-background, .modal-card-head .delete, .modal-card-foot .close-grade').on('click', function () {
    //alert("background clicked!");
    $('#grademodal').removeClass('is-active').fadeOut(500);
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

function gradeTable() {
    var gradeObj = [
        {
            qtr: 1,
            course: "IT Visual Communication",
            id: "IT121.11",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 1,
            course: "Technical Math I",
            id: "MA125.41M",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 1,
            course: "Computer & Network Fundamentals",
            id: "NE115.11",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 1,
            course: "Programming in C++",
            id: "SE114.11",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 2,
            course: "Windows Networking Essentials",
            id: "NE121.12",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 2,
            course: "HTML & Javascript",
            id: "SE111.12",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 2,
            course: "Intermediate Progr. Using C++",
            id: "SE124.12",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 3,
            course: "Business Math",
            id: "MA121.11M",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 3,
            course: "Effective Team Managment & Projects",
            id: "MGM115.13",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 3,
            course: "Networking for Small Business",
            id: "NE131.13",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 3,
            course: "Database Management - SQL",
            id: "SE133.13",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 4,
            course: "Physics I & Lab",
            id: "PHY200.02M",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 4,
            course: "C#",
            id: "SE245.04",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 4,
            course: "Systems Analysis & Design - UML",
            id: "SE252.04",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 4,
            course: "Web Dev using PHP & MySQL",
            id: "SE266.04",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 5,
            course: "Advanced Javascript",
            id: "SE241.15",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 5,
            course: "Advanced C#",
            id: "SE255.15",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 5,
            course: "User Interface Design UI/UX",
            id: "SE264.05",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 6,
            course: "IT Ethics & Professional Development",
            id: "IT267.16",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 6,
            course: "Intro to Information Security",
            id: "NE267.16",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 6,
            course: "SE AS Capstone Project",
            id: "SE265.06",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 6,
            course: "Web Development using ASP.NET",
            id: "SE256.06",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 7,
            course: "Research Writing",
            id: "EN331.00C",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 7,
            course: "Technical Math II",
            id: "MA210.90M",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 7,
            course: "Intro to Genetics & Evolution",
            id: "SCI350.95M",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 8,
            course: "Database Management",
            id: "IT378.57",
            grade: "N/A",
            status: "in-session"
        },
        {
            qtr: 8,
            course: "Advanced PHP Programming",
            id: "SE396.57",
            grade: "N/A",
            status: "in-session"
        },
        {
            qtr: 8,
            course: "Java",
            id: "SE385.57",
            grade: "N/A",
            status: "in-session"
        }
    ];

    var length = gradeObj.length;
    var headerArray = ["Quarter", "Course", "ID", "Grade", "Status"];

    var table = document.createElement('table');
    table.className = 'table is-narrow course-table';

    var columnCount = headerArray.length;

    var row = table.insertRow(-1);

    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement('td');
        headerCell.innerHTML = headerArray[i];
        row.appendChild(headerCell);
    }


    for (var j = 0; j < length; j++) {
        var objIndex = gradeObj[j];
        row = table.insertRow(-1);
        for (var key in objIndex) {
            if (objIndex.hasOwnProperty(key)) {
                var cell = row.insertCell(-1);
                cell.innerHTML = objIndex[key];
            }
        }
    }

    var divTable = document.getElementById('gradeTable');
    divTable.appendChild(table);

}
gradeTable();


function showObjectValue(obj) {
    var result = '';
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += obj[key];
        }
    }

    return result;
}


/* Clipboard function */

$('#copyPGPbtn').on('click', function () {
   var $this = $(this);
   $this.text('Copied');
   setTimeout(function () {
       $this.text('Copy');
   }, 2000);
});

var clipboard = new Clipboard('#copyPGPbtn');

clipboard.on('success', function(e) {
    document.getElementById('#pgp').select();
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

