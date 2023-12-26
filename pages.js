fetch("songs.json")
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(json => {
        songs = json.songs;
        activeSongs = songs;
        fillSongs(songs);
    })
    .catch(error => console.log(error));

