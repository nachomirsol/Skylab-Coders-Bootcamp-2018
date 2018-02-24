var spotify;
var token = "Bearer BQDxZyT34kitY9VGvTQSGsRwlnZEGuU41cHT_bEe5ahiakMQshXxMtKfu5RoBar31htvFpw9_2QoNuH0YgWZEu1qjuQWut7zDqLr-sg-c2LhUlhqCuVHQKQxS8nehbpSVrfomvkCMFKKx1Y";
(function(){

    function call(url,type,headers,handleSuccess){// generic function with arguments that we invoke inside each method
        $.ajax({
            url:url,
            type:type,
            headers:headers,
            success:handleSuccess
        });
    }

// Here we define the object with 4 methods, one for each ajax call
    spotify = {

        searchArtistApi: function(query,type,headers,handleSearch){
            call("https://api.spotify.com/v1/search?q="+query+"&type=artist",
                type,
                headers,
                handleSearch
            );
        },

        selectArtistApi: function(idArtist,type,headers,handleSelectArtist){
            call("https://api.spotify.com/v1/artists/"+idArtist+"/albums",
                type,
                headers,
                handleSelectArtist
            );
        },

        selectAlbumApi: function(idAlbum,type,headers,handleSelectAlbum){
            call("https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",
                type,
                headers,
                handleSelectAlbum
            );
        },

        selectTrackApi: function(idTrack,type,headers,handleSelectTrack){
            call("https://api.spotify.com/v1/tracks/"+idTrack,
                type,
                headers,
                handleSelectTrack
            );
        }

    }

})()