
// returns the HTML for the full student list
function renderStudents(students) {
    // for each object in the students array, call renderStudent and
    // join the HTML together
    studentsHTML = students.map(renderStudent).join("");
    
    // return the HTML of the students list using the studentsHTML value
    return `
    <div>
        <h1>Roll Call!</h1>
        ${studentsHTML} 
    </div>
    `
}

// return the HTML for an individual student
function renderStudent(student) {
    // get the values that change based off of student.isPresent
    // isPresetString is "Present" or "Abset"
    // className is the value for the class HTML attribute
    if(student.isPresent) {
        isPresentString = "Present";
        className = "student";
    } else {
        isPresentString = "Absent";
        className = "student absent";
    }

    // return the HTML for the student using the values
    return `<div class="${className}">
                <h2>${student.name}</h2>
                <h3>${isPresentString}</h3>
            </div>`;
}

/* HTML Representation
    <div>
        <h1>Roll Call!</h1>
        <div class="student">
            <h2>Kamilah</h2>
            <h3>Present</h3>
        </div>
        <div class="student">
            <h2>Kim</h2>
            <h3>Present</h3>
        </div>
        <div class="student absent">
            <h2>Stuart</h2>
            <h3>Absent</h3>
        </div>
    </div>
*/

function students() {
    // get the content container element
    var content = document.getElementById('content');

    // the abstratction for the students list
    // this is an array of objects where each object represents a student
    // each student has a string for a name and a boolean for if there are present in class
    var studentsAbstraction = [
        {
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