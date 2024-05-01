"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('taylor swift', '2020');
console.log(album1);
const album2 = make_album('wiz khalifa', 'Friend', 12);
console.log(album2);
const album3 = make_album('harry styles', '2018');
console.log(album3);
