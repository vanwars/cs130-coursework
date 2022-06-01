let results;
let greeting = "hey there";
const serverURL = 'https://www.apitutor.org/flickr/simple/';

const showData = (tag) => {
    // this function pulls down data from a server
    // everytime it is invoked. Change the value of
    // the tag to get different data:
    fetch(serverURL + '?tags=' + tag)
        .then(response => {
            return response.json()
        })
        .then(doSomethingWithTheData);
};



const doSomethingWithTheData = (data) => {
    document.querySelector('#gallery').innerHTML = "";
    // this function executes once the data has been 
    // pulled down from the server:
    results = data;
    console.log('The Flickr data is stored in a variable called "results":')
    console.log(results);

    for (const item of results) {
        document.querySelector('#gallery').innerHTML += 
            `<img src="${item.img_url}" alt="${item.title}">`;
    }
};

// invoke the function when the page initializes:
showData('cats');