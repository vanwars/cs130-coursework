/**
 * Your Job:
 * 1. Display all of the matching restaurants to the screen (any way you want).
 * 2. Make the search honor the location.
 * 3. Make the search honor the cuisine chosen.
 */
const searchYelp = ev => {
    // ev.preventDefault();
    const term = document.querySelector('#cuisine').value;
    const location = document.querySelector('#location').value;
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${term}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (const restaurant of data) {
                document.querySelector('.restaurants').innerHTML += `<p>${restaurant.name}</p>`;
            }
        });
};
