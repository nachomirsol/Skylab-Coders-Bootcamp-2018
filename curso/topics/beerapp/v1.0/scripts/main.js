$(document).ready(function(){
    $("#table").hide();// hide the table

    ///////////////////////////////////////////////////////////////////////First click event///////////////////////////////////////////////////////////////////////

    $('#boton').on("click",function (e) {
        e.preventDefault();
        var query = $('input').val();
        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
            success: function (dataReceived) {
                var list ="";
                var count=0;           
                dataReceived.forEach(function(x){
                    count++;
                    var img = x.labels ? x.labels.icon : x.images ? x.images.icon : 'img/beericon.png'  ;
                    list+="<tr id="+x.id+"><td>"+count+"</td><td id>"+x.id+"</td><td>"+x.name+"</td><td><img src=" + img + " /></td></tr>";
                });

                $("#table tbody").html(list);
                $("#table").show();          
            }
        });
    });

    

        ///////////////////////////////////////////////////////////////////////Second click event///////////////////////////////////////////////////////////////////////
        
    $(document).on('click','tr',function(){//de otra forma no funciona
        var idBeer= $(this).attr("id");
        $.ajax({
            url:"https://quiet-inlet-67115.herokuapp.com/api/beer/"+idBeer,
            success: function (dataIdReceived) {

                var description = "";
                var img2 = dataIdReceived.labels ? dataIdReceived.labels.large : dataIdReceived.images ? dataIdReceived.images.large : 'img/beericon.png'  ;

                    var title ="<h4>"+dataIdReceived.name+"</h4>";
                    if(!dataIdReceived.description){description+="<p>Thanks for using Buzz light Beer, the beer you are looking for is currently unavailable, you can also try to drink water instead, its much more healthy and you can save some problems</p>"}else{
                        description+="<p>"+dataIdReceived.description+"</p>";
                    }

                    img2="<img src=" + img2 + " class='img2'/>";
                
                    $(".modal .modal-header").html(title);     
                    $(".modal .modal-body").html(description);
                    $(".modal .modal-footer").html(img2);
                    $(".modal").modal();
            }
        });
    });
});