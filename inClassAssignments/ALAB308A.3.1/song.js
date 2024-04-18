const radio = {
    stations: [
        { 
            name: "Rock FM", 
            songs: [
                { title: "Song 1", artist: "Artist 1" },
                { title: "Song 2", artist: "Artist 2" },
                { title: "Song 3", artist: "Artist 3" }
            ]
        },
        { 
            name: "Pop Hits", 
            songs: [
                { title: "Song 1", artist: "Artist 1" },
                { title: "Song 2", artist: "Artist 2" },
                { title: "Song 3", artist: "Artist 3" }
            ]
        }
    ],
    changeStation: function() {
        const randomIndex = Math.floor(Math.random() * this.stations.length);
        return this.stations[randomIndex];
        const randomSongIndex = Math.floor(Math.random() * newStation.songs.length);
        const newSong = newStation.songs[randomSongIndex];
        console.log("Now playing: " + newSong.title + " by " + newSong.artist);
        return newStation
    }
};
