// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    //Star-Lord: Rock
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    //Groot:Pop
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    //Drax: R&B
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title:"Redbone", artist: "Childish Gambino", genre: "R&B"}, //added song
    { title:"Best Part", artist: "Daniel Caesar ft. HER", genre: "R&B"},//added song
    { title:"Really Love", artist: "D'angelo", genre: "R&B"},//added song
    //Gamora: Grunge
    { title:"Black Hole Sun", artist: "Soundgarden", genre: "Grunge"}, //added song
    { title:"Come As You Are", artist: "Nirvana", genre: "Grunge"},//added song
    { title:"Hunger Strike", artist: "Temple of the Dog", genre: "Grunge"}, //added song
    { title:"Alive", artist: "Pearl Jam", genre: "Grunge"}, //added song
    //Rocket: Classic Rock
    { title:"Bohemian Rhapsody", artist: "Queen", genre: "Classic Rock"},//added song
    { title:"Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Classic Rock"},//added song
    { title:"Hotel California", artist: "Eagles", genre: "Classic Rock"},//added song
    { title:"Smoke on the Water", artist: "Deep Purple", genre: "Classic Rock"}, //added song
    { title:"Back in Black", artist:"AC/DC", genre: "Classic Rock"}, //added song
];


// Object containing each Guardian's preferred genre
const guardians = {
    //Key is guardians name and the value is the genre
    "Star-Lord": "Rock",
    "Groot": "Pop",
    "Drax": "R&B",
    "Gamora": "Grunge",
    "Rocket": "Classic Rock",
};

// Function to generate playlist based on each Guardian's preferred genre
function generatePlaylist(guardians, songs) {

    /* Use Object.entries() to convert guardians
     object into an array of [guardian, genre] pairs*/
    //map() loops through each guardian-genre pair and creates a playlist
    return Object.entries(guardians).map(([guardian, genre]) => {
        // For each guardian, filter the songs that match their preferred genre
        const playlist = songs.filter(song => song.genre === genre);

        // Return an object with the guardian's name and their playlist
        return {
            guardian,    // Shorthand for guardian: guardian
            playlist     // Shorthand for playlist: playlist
        };
    });
}


// Function to display playlists on the webpage
function displayPlaylists() {
    const playlists = generatePlaylist(guardians, songs); // Get the playlists for each guardian
    const playlistsContainer = document.getElementById('playlists'); // Get the div to insert playlists

    // Loop through each Guardian's playlist using forEach() and create HTML content
    playlists.forEach(({ guardian, playlist }) => {
        // Create a new section for each Guardian's playlist
        const guardianSection = document.createElement('div');
        guardianSection.classList.add('guardian-section'); // Add a CSS class for styling if needed
        
        // Create a heading for the Guardian's name
        const guardianHeading = document.createElement('h2');
        guardianHeading.textContent = `${guardian}'s Playlist 🎵`;
        guardianSection.appendChild(guardianHeading);
        
      // Create a list to hold the song titles
const songList = document.createElement('ul');
songList.classList.add('song-list'); // Add a CSS class for styling if needed

playlist.forEach(song => {
    // Create a list item to hold the song title and artist
    const songItem = document.createElement('li');
    
    // Create a span element specifically for the song title
    const songTitle = document.createElement('span');
    songTitle.textContent = song.title;
    songTitle.classList.add('song-title'); // Add a CSS class for the title
    
    // Create a span element specifically for the artist name
    const songArtist = document.createElement('span');
    songArtist.textContent = ` - ${song.artist}`;
    
    // Append the title and artist to the list item
    songItem.appendChild(songTitle);
    songItem.appendChild(songArtist);
    
    // Append the list item to the song list
    songList.appendChild(songItem);
});
        
        // Append the song list to the Guardian's section
        guardianSection.appendChild(songList);
        
        // Append the Guardian's section to the playlists container in the html
        playlistsContainer.appendChild(guardianSection);
    });
}

// Call the function to display the playlists when the page loads
document.addEventListener('DOMContentLoaded', displayPlaylists);



