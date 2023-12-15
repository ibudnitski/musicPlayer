// data
const playlist = {
    title: "Metal Hits",
    coverImageUrl: "./assets/playlistPicture.jpg",
    info: {
        totalTracksCount: 2,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "./assets/pic1.png",
            artistName: "Sabaton",
            title: "Panzerkampf",
            fileUrl: "/.assets/music/Sabaton - Panzerkampf.mp3",
            isHot: false,
        },
        {
            coverImageUrl: "./assets/pic1.png",
            artistName: "Powerwolf",
            title: "We drink your blood",
            fileUrl: "./assets/music/Powerwolf - We Drink Your Blood.mp3",
            isHot: true,
        },
    ],
};

// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {

    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering.tracks);


}

function renderPlaylistHeader(playlistForRendering) {
    function renderPlaylistHeaderTitle(playlistForRendering) {
        const playlistTitle = document.createElement('h2');
        playlistTitle.append(playlistForRendering.title);
        document.body.append(playlistTitle);
    }

    const  coverElement= document.createElement('img');
    coverElement.src = playlistForRendering.coverImageUrl;
    document.body.append(coverElement);
}

function renderPlaylistTracks(playlistForRendering) {
    const playlistElement = document.createElement('h2');
    playlistElement.append('playlist will be here');
    document.body.append(playlistElement);
}