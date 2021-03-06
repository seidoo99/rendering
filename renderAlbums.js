// function renderAlbums(albums) {
// 
//         albumHtml = albums[i].map(renderAlbum).join("");
//         return `
//         <div class="text-center mt-5">
//         ${albumHtml}
//         </div>   `
//     }
// function renderAlbum(album) {
//     albumCover = album.map(albumCover).join('');
//     albumSong = album.map(albumSongs).join('');
//     return ` 
//         <h2>${album.artist}</h2
//         <div>${albumCover}</div>
//         <div>${albumSong}</div>
//         `
// }

// function albumCover(cover) {
//     return `
//     <div>${cover.title}</div>
//     <img${cover.albumCover}>
//     `
// }

// function albumSongs(song) {
//     return `
// <div>${song.songs}</div>
// `
// }

function renderAlbums(albums) {
    return `
   <div> ${albums.map(renderAlbum).join('')}</div>
 `
}

function renderAlbum(album) {

    return ` 
        <h2>${album.artist}</h2
        <br>
        <hr>
        ${album.albums.map(function(cover){
          return `
          <div>
          <div class="album">
          <img class="albumCover" src="${cover.albumCover}" height="50" width="50">
          </div>
          <h4 class="cover">${cover.title}</h4>
          </div>
          ${cover.songs.map(function(song){
              return`
              <ul>
              <hr>
             <li>${song.title}<span class="length">${song.length}</span></li> 
              </ul>
              `
          }).join('')}
        
          `
        })}
        `
}


function albums() {

    var content = document.getElementById('content');

    var albumsAbstraction = [{
        artist: "Creed",
        albums: [{
                title: "My Own Prison",
                albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                songs: [{
                        title: "Torn",
                        length: "6:25"
                    },
                    {
                        title: "Ode",
                        length: "4:58"
                    },
                    {
                        title: "My Own Prison",
                        length: "5:00"
                    },
                    {
                        title: "Pity for a Dime",
                        length: "4:37"
                    },
                    {
                        title: "In America",
                        length: "3:38"
                    },
                    {
                        title: "Illusion",
                        length: "5:29"
                    }
                ]

            },
            {
                title: "Weathered",
                albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                songs: [{
                        title: "Bullets",
                        length: "6:25"
                    },
                    {
                        title: "Freedom Fighter",
                        length: "4:58"
                    },
                    {
                        title: "Who's Got My Back?",
                        length: "5:00"
                    },
                    {
                        title: "Signs",
                        length: "4:37"
                    },
                    {
                        title: "One Last Breath",
                        length: "3:38"
                    },
                    {
                        title: "My Sacrifice",
                        length: "5:29"
                    }
                ]
            }
        ]
    }]
    content.innerHTML = renderAlbums(albumsAbstraction);
}