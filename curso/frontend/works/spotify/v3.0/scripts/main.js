$(document).ready(function(){

    $("#artists").hide();
    $("#albums").hide();
    $("#tracks").hide();
    $("#track").hide();
/////////////////////////////////////////////////////////////SEARCH FOR AN ARTIST///////////////////////////////////////////////////////

var token = "Bearer BQDxZyT34kitY9VGvTQSGsRwlnZEGuU41cHT_bEe5ahiakMQshXxMtKfu5RoBar31htvFpw9_2QoNuH0YgWZEu1qjuQWut7zDqLr-sg-c2LhUlhqCuVHQKQxS8nehbpSVrfomvkCMFKKx1Y";
var type = "GET";
var headers = {"Authorization": token}
    $("#boton").on("click",function(e){

        e.preventDefault();
        $("#albums").hide();
        $("#tracks").hide();
        $("#track").hide();
             
        var query = $("#text").val();

        spotify.searchArtistApi(query,type,headers,searchArtist);

        function searchArtist(artistData){
            var artist = artistData.artists.items;
            var list = "<option selected disabled>Choose artist...</option>";
            artist.forEach(function(x){
                list+="<option id="+x.id+" class='option'>"+x.name+"</option>";
            });
            $("#artists").show();
            $("#artists #selectartist").html(list);
        }

    });


/////////////////////////////////////////////////////////////SELECT ARTIST///////////////////////////////////////////////////////


    $("#selectartist").change(function(){
        $("#tracks").hide();
        $("#track").hide();
        var idArtist = $(this).children(":selected").attr("id");

        spotify.selectArtistApi(idArtist,type,headers,selectArtist);

        function selectArtist(artistList){
            var albums = artistList.items;
            var list = "<option selected disabled>Choose an album...</option>";
            albums.forEach(function(y){
                list+="<option id="+y.id+" class='option'>"+y.name+"</option>";
            });
            $("#albums").show();
            $("#albums #selectalbum").html(list);
        }

    });

/////////////////////////////////////////////////////////////SELECT ALBUM//////////////////////////////////////////////////

    $("#selectalbum").change(function(){
        var idAlbum = $(this).children(":selected").attr("id");
        //alert(idAlbum);
        
        spotify.selectAlbumApi(idAlbum,type,headers,selectAlbum);

        function selectAlbum(albumList){
            var tracks = albumList.items;
            var list = "<option selected disabled>Choose a track...</option>";
            tracks.forEach(function(z){
                list+="<option id="+z.id+" class='option'>"+z.name+"</option>";
            });
            $("#tracks").show();
            $("#tracks #selecttrack").html(list);        
        }
    });


/////////////////////////////////////////////////////////////SELECT TRACK//////////////////////////////////////////////////

    $("#selecttrack").change(function(){
        var idTrack = $(this).children(":selected").attr("id");
       // alert(idTrack);
        
       spotify.selectTrackApi(idTrack,type,headers,selectTrack);
        
        function selectTrack(trackPlay){
                var soundTrack = trackPlay.preview_url;              
                var list="<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+idTrack+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";
                $("#trackplay").html(list);
                $("#track").show();
        }
    });

});

//list+="<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+idTrack+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";
//<audio controls><source src='"+soundTrack+"' type='audio/mpeg'/>sjygjuggsaj</audio>
//fito artist id: 1tZ99AnqyjgrmPwLfGU5eo
//fito album id: 4zSihveMwgYWHA5Bkw29Ug
//fito track id:5sYrBCml4is9A4hOwOEx3d   