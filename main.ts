function album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
  
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
  
    return album;
  }
  
  let album1 = album('taylor swift', '2020');
  console.log(album1);
  

  let album2 = album('wiz khalifa', 'Friend', 12);
  console.log(album2);
  
 
  let album3 = album('harry styles', '2018');
  console.log(album3);