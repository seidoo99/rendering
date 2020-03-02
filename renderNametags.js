function renderNametags(nametags) {
    nameTagHtml = nametags.map(nameTagName).join("")
    return `
        ${nameTagHtml}
    `
}

function nameTagName(name) {
    return `
            <div class="nameTag">
                <div class="header" style="background-color: blue; color: white;">
                    <h1>Hello, my name is:</h1>
                    </div>
                    <h2>${name}</h2>            
            </div>                   
        `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
        "Kamilah",
        "Kim",
        "Stuart",
        "Ron",
        "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}