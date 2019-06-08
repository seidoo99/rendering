
function renderCircles(cs) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    circlesHtml = cs.map(renderCircle).join("");

    return `
        <div class="text-center mt-5">
            ${circlesHtml}
        </div>
    `
}

function renderCircle(c) {
    return `<div style="width: ${c.radius}px;
                        height: ${c.radius}px;
                        background-color: ${c.color};
                        border-radius: ${c.radius}px;
                        margin: 10px auto">
            </div>`
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}