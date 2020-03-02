// returns the HTML for the full student list
function renderStudents(students) {
    // for each object in the students array, call renderStudent and
    // join the HTML together
    studentsHTML = students.map(renderStudent).join("");

    // return the HTML of the students list using the studentsHTML value
    return `
    <div style ="width:200px; height:300px; margin-left:400px;">
        <h1 style="text-align:center;">Roll Call!</h1>
        ${studentsHTML} 
    </div>
    `
}

// return the HTML for an individual student
function renderStudent(student) {
    // get the values that change based off of student.isPresent
    // isPresetString is "Present" or "Absent"
    // className is the value for the class HTML attribute
    if (student.isPresent) {
        isPresentString = "Present";
        className = "student";
        return `
        <div class="box" style="text-align:center">
        <div class="${className}" style="background-color:green ">
                <h2>${student.name}</h2>
                <h3>${isPresentString}</h3>
            </div>
            </div>`;
    } else {
        isPresentString = "Absent";
        className = "student absent";
        return `
        <div class="box" style="text-align:center">
        <div class="${className}" style="background-color:red ">
                <h2>${student.name}</h2>
                <h3>${isPresentString}</h3>
            </div>
            </div>
            `;
    }

    // return the HTML for the student using the values

}

function students() {
    // get the content container element
    var content = document.getElementById('content');

    // the abstratction for the students list
    // this is an array of objects where each object represents a student
    // each student has a string for a name and a boolean for if there are present in class
    var studentsAbstraction = [{
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    // call our renderStudents function and pass in our abstraction array
    // take the results of that and set them as the innerHTML of our container
    content.innerHTML = renderStudents(studentsAbstraction);
}