url = 'data2019.json';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#stats').innerHTML += `<h1>${data.season.year} Season</h1>`
        for (const item of data.rankings) {
            document.querySelector('#stats').innerHTML += `
            <div>
                <h2>${item.market} ${item.name}</h2>
                <p>away_losses: ${item.away_losses}</p>
                <p>away_wins: ${item.away_wins}</p>
                <p>awp: ${item.awp}</p>
                <p>home_losses: ${item.home_losses}</p>
                <p>home_wins: ${item.home_wins}</p>
            </div>`
        }
    })