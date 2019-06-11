
function renderRestaurants(restaurants) {
    var renderRestaurantsHTML = restaurants.map(renderRestaurant);

    var theHTML = `<div class="restaurant">
                        ${renderRestaurantsHTML.join("")}
                    </div>
    `;
    return theHTML;
}

// Steps we did for this
// 1. Write out static HTML based on example or design
// 2. Style the HTML so it looks correct in the browser
// 3. Break apart the rendering function into new functions for parts the repeat
// 4. Hook up the data into the template

function renderRestaurant(restaurant) {
    return `<div class="rounded">
        <h1>${restaurant.name}</h1>
        <h3>${restaurant.type}</h3>
        <div class="price">${'$'.repeat(restaurant.priceRating)}</div>
       </div>`;
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Aubrey's Pub",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}