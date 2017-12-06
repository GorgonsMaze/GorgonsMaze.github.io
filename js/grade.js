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
            grade: "A",
            status: "completed"
        },
        {
            qtr: 8,
            course: "Advanced PHP Programming",
            id: "SE396.57",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 8,
            course: "Java",
            id: "SE385.57",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 9,
            course: "Algorithms",
            id: "SE394.58",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 9,
            course: "Design Patterns",
            id: "SE402.68",
            grade: "A",
            status: "completed"
        },
        {
            qtr: 9,
            course: "Android Development",
            id: "SE391.58",
            grade: "A",
            status: "completed"
        },


        {
            qtr: 10,
            course: "Advanced SQL",
            id: "SE398.58",
            grade: "N/A",
            status: "in-session"
        },
        {
            qtr: 10,
            course: "Open-Source Web Development",
            id: "SE373.68",
            grade: "N/A",
            status: "in-session"
        },
        {
            qtr: 10,
            course: "Web Services",
            id: "SE426.58",
            grade: "N/A",
            status: "in-session"
        }

    ];

    var length = gradeObj.length;
    var headerArray = ["Quarter", "Course", "ID", "Grade", "Status"];

    var table = document.createElement('table');
    table.className = 'table is-narrow course-table';

    var columnCount = headerArray.length;

    var header = table.createTHead();

    var row;


    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement('th');
        headerCell.innerHTML = headerArray[i];
        header.appendChild(headerCell);
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