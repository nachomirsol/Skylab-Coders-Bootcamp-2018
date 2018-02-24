$(document).ready(function(){

    $("#enviar").click(function(){

        var captureInput = $("#valor").val(); 
        $("#lista").append("<li>"+captureInput+" <a>✔</a></li>");
        console.log($("li"));

        $("form").trigger("reset");
        $("li").click(function(){
            $(this).remove();
        });
    });


    
});