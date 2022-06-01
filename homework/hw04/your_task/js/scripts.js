const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    // before we do anything, let's clear out the tracks container:
    document.querySelector('#tracks').innerHTML = "";


    // this code fetches tracks based on a search term and prints them
    // to the console:
    console.log('about to fetch!');
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks);

            
            // this code handles the case where no tracks are found:
            if (tracks.length === 0) {
                document.querySelector('#tracks').innerHTML = `
                    <p>No tracks found for "${term}"</p>
                `;
            }

            // Problem: This will return all of the tracks, but we only want
            // to output the first 5. What to we do?
            // this code outputs the first 5 tracks:
            counter = 0;
            for (const track of tracks) {
                // document.querySelector('#tracks').innerHTML += `
                //     <p>${track.name}</p>
                // `;

                document.querySelector('#tracks').innerHTML += `
                    <button class="track-item preview" data-preview-track="${track.preview_url}">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                            <h2>${track.name}</h2>
                            <p>
                                ${track.artist.name}
                            </p>
                        </div>
                    </button>
                `;

                counter += 1;
                if (counter >= 5) {
                    break;
                }
            }
        });
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};