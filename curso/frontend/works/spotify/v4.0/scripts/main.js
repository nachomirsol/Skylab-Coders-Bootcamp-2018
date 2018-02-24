$(document).ready(()=>{

    $("#artists").hide();
    $("#albums").hide();
    $("#tracks").hide();
    $("#track").hide();
/////////////////////////////////////////////////////////////SEARCH FOR AN ARTIST///////////////////////////////////////////////////////

const token = "Bearer BQA_gdic73pviTfpoY4b-UPH3LxZ71pXV6bgdl5g0bBvRwv02NCRTHm2hNtb7h_Cn1iNa3uJlaKUGix6ekBrd5sn0Bp98BVEBf-z8UAjH6Sf-kFUMVUeaUcpXvov2WRDFPyrqu6zVx23ThA";
const type = "GET";
const headers = {"Authorization": token}
    $("#boton").on("click",function(e){

        e.preventDefault();
        $("#albums").hide();
        $("#tracks").hide();
        $("#track").hide();
             
        let query = $("#text").val();

        spotify.searchArtistApi(query,headers,searchArtist,handleError);

        function searchArtist(artistData){
            let artist = artistData.artists.items;
            let list = "<option selected disabled>Choose artist...</option>";
            artist.forEach((x)=>{
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

        spotify.selectArtistApi(idArtist,headers,selectArtist,handleError);

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

    function handleError(){
        console.log(Error("there is an error"));
    }

/////////////////////////////////////////////////////////////SELECT ALBUM//////////////////////////////////////////////////

    $("#selectalbum").change(function(){
        var idAlbum = $(this).children(":selected").attr("id");
        //alert(idAlbum);
        
        spotify.selectAlbumApi(idAlbum,headers,selectAlbum,handleError);

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
        
       spotify.selectTrackApi(idTrack,headers,selectTrack,handleError);
        
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