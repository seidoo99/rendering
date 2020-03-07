function renderSurveys(surveys) {
    var surveyHtmlArray = surveys.map(function(e) {
            return renderSingleSurvey(e);
        })
        // We need to iterate over the surveys variable
        // and push the survey titles into the surveyHtmlArray
        // for (var i = 0; i < surveys.length; i++) {
        // surveyHtmlArray.push(renderSingleSurvey(surveys[i]));
        // surveyHtmlArray.push(renderSingleSurvey(surveys[i]));
        // }

    return `
        <div class="text-center mt-5">
            ${surveyHtmlArray.join('')}
            <!--<code>${JSON.stringify(surveyHtmlArray)}</code>-->
        </div>
    `
}

function renderSingleSurvey(survey) {
    // Render a single survey object 
    var fieldsHtmlArray = [];
    fieldsHtmlArray = survey.fields.map(function(e) {
        return renderSurveyFields(e);
    })

    return `
        <h1>${survey.title}</h1>
        <div class="survey-questions">
            ${fieldsHtmlArray.join('')}
        </div>
        <button type="button" class="btn btn-primary render-button mt-1">${survey.submitButtonText}</button>
    `
}

function renderSurveyFields(fields) {
    // could maybe use map method on fields array with template literals and divs
    var optionsHtmlArray = [];
    if (fields.type === 'text') {
        return `
        <textarea id="w3mission" rows="4" cols="50"></textarea>
       
        `
    }
    if (fields.options) {
        optionsHtmlArray = fields.options.map(function(option) {
            return renderSurveyFieldOptions(option);
        })
    }
    return `
        <h3>${fields.label}</h3>
       
        <div class="field-options">
        ${optionsHtmlArray.join('')}
        </div>
    `
}

function renderSurveyFieldOptions(options) {
    return `
        <div class="radio">
  <label><input type="radio" name="optradio" checked><span>${options}</span></label>
</div>

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