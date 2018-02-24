$(document).ready(function(){

    $("#artists").hide();
    $("#albums").hide();
    $("#tracks").hide();
    $("#track").hide();
/////////////////////////////////////////////////////////////SEARCH FOR AN ARTIST///////////////////////////////////////////////////////
var token="Bearer BQDs5tMn6RW0KjSdgtS-E-RuNyghdwOpjwzEHcZ7lshB6W4-7m531WZR_po1dgkhTFuKG31Zv14_hABaZUsWMD_fa_voHMGUWEbjdNwJ72Dc6O9bX2gjZiaqCPvZl63FQHQvc3xU44zlfV8";
    $("#boton").on("click",function(e){
        e.preventDefault();
        
        var query = $("#text").val();
        
        $.ajax({
            url: "https://api.spotify.com/v1/search?q="+query+"&type=artist",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": token},
            success: function(artistData){
    
                var artist = artistData.artists.items;
                var list = "<option selected disabled>Choose artist...</option>";
                artist.forEach(function(x){
                    list+="<option id="+x.id+" class='option'>"+x.name+"</option>";
                });
                $("#artists").show();
                $("#artists #selectartist").html(list);

            }
        });  
    });


/////////////////////////////////////////////////////////////SELECT ARTIST///////////////////////////////////////////////////////


    $("#selectartist").change(function(){
        var idArtist = $(this).children(":selected").attr("id");

        $.ajax({
            url: "https://api.spotify.com/v1/artists/"+idArtist+"/albums",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": token},
            success: function(artistAlbums){
    
                var albums = artistAlbums.items;
                var list = "<option selected disabled>Choose an album...</option>";
                albums.forEach(function(y){
                    list+="<option id="+y.id+" class='option'>"+y.name+"</option>";
                });
                $("#albums").show();
                $("#albums #selectalbum").html(list);

            }
        });  
    });

/////////////////////////////////////////////////////////////SELECT ALBUM//////////////////////////////////////////////////

    $("#selectalbum").change(function(){
        var idAlbum = $(this).children(":selected").attr("id");
        //alert(idAlbum);
        
        $.ajax({
            url: "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": token},
            success: function(artisttracks){
    
                var tracks = artisttracks.items;
                var list = "<option selected disabled>Choose a track...</option>";
                tracks.forEach(function(z){
                    list+="<option id="+z.id+" class='option'>"+z.name+"</option>";
                });
                $("#tracks").show();
                $("#tracks #selecttrack").html(list);

            }
        });  
    });


/////////////////////////////////////////////////////////////SELECT TRACK//////////////////////////////////////////////////

    $("#selecttrack").change(function(){
        var idTrack = $(this).children(":selected").attr("id");
       // alert(idTrack);
        

        $.ajax({
            url: "https://api.spotify.com/v1/tracks/"+idTrack,  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": token},
            success: function(trackPlay){
    
                //var track = trackPlay.album.artists[0].external_urls.spotify;
                //var list = "";
                var soundTrack = trackPlay.preview_url;
                //console.log(soundTrack);
                
                var list="<audio controls><source src='"+soundTrack+"' type='audio/mpeg'/>sjygjuggsaj</audio>";
                $("#trackplay").html(list);
                $("#track").show();
                
            }
        });  
    });

});

//list+="<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+idTrack+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";



      //fito artist id: 1tZ99AnqyjgrmPwLfGU5eo
      //fito album id: 4zSihveMwgYWHA5Bkw29Ug
      //fito track id:5sYrBCml4is9A4hOwOEx3d
    