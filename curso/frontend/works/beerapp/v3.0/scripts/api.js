var beersApi;
(function(){

    function call(url,handleSuccess){// llamada ajax preparada
        $.ajax({
            url: url,
            success: handleSuccess
        });
    }

    beersApi = {
        baseUrl: "https://quiet-inlet-67115.herokuapp.com/api/",
        search: function(query,handleResults){
            call(this.baseUrl + "search/all?q=" + query,handleResults);
        },

        showDetails: function(idBeer,handleDetail){
            call(this.baseUrl + "beer/" + idBeer,handleDetail);
        }
    }
})()