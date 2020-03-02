function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    return `
    ${pokerHand.map(renderPoker).join('')}
    `
}

function renderPoker(poker) {

    return ` 
        <img src="cards/${poker.value}${poker.suit}.png" style = "width:100px; height:150px"/>
        `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [{
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}