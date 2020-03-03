function renderSurveys(surveys) {
    return `
    <div>
    ${surveys.map(renderSurvey).join('')}
    </div>
 `
}

function renderSurvey(survey) {

    return ` 
        <h2>${survey.title}</h2>
        <div>
        ${survey.fields.map(function(feild){

            return `
           <h3>${feild.label}</h3> 
           <input type="${feild.type}" id="radio">
           <label for="radio">${feild.options ? feild.options : ''}</label>
            `
        })}
        </div>
        
        <button type="submit" class="btn btn-primary render-button mt-1">${survey.submitButtonText}</button>
        `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [{
            title: "Movie Goer Survey",
            fields: [{
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [{
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}



// function renderSurvey1(survey1) {

//     return ` 
//         <h2>${survey1.title}</h2>
//         ${survey1.fields.map(function(field){
//             return`
//             <div>
//             ${field.label}
//             ${field.type}
//             ${field.options.map(function(option){
//                 return`
//                 ${option.option ? option.option : ''}
//                 `
//             }).join('')}
//             </div>
//             `
//         })}
//         ${survey.submitButtonText}
//         `
// }