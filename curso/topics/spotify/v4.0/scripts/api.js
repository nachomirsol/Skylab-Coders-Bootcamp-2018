var spotify;

(function(){

    var call = (url,type,headers,handleSuccess)=>{// generic function with arguments that we invoke inside each method
        fetch(url,{headers})
        .then(data => data.json())
        .then(data => handleSuccess(data))
        .catch(err => handleError(err))
    }

// Here we define the object with 4 methods, one for each ajax call
    spotify = {

        searchArtistApi: (query,headers,handleSearch,handleError)=>{
            call(
                "https://api.spotify.com/v1/search?q="+query+"&type=artist",
                {headers},
                handleSearch,
                handleError
            );
        },

        selectArtistApi: (idArtist,headers,handleSelectArtist,handleError)=>{
            call(
                "https://api.spotify.com/v1/artists/"+idArtist+"/albums",
                {headers},
                handleSelectArtist,
                handleError
            );
        },

        selectAlbumApi: (idAlbum,headers,handleSelectAlbum,handleError)=>{
            call(
                "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",
                {headers},
                handleSelectAlbum,
                handleError
            );
        },

        selectTrackApi: (idTrack,headers,handleSelectTrack,handleError)=>{
            call(
                "https://api.spotify.com/v1/tracks/"+idTrack,
                {headers},
                handleSelectTrack,
                handleError
            );
        }

    }

})()