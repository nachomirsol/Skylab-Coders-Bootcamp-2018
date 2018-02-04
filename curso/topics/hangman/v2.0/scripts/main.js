$(document).ready(function(){
    var play;
    $(".result").hide();
    $("#boton").click(function(e){
        e.preventDefault();
        //Guardamos el número inicial de itentos y la palabra introducida 
        $(".finish").hide();
   
        var inputValue = $("#input").val();// the word we input to play
        play = new Hangman(inputValue,15)// Instance of the hangman object in hangman.js
        
        $(".enterword").hide();
        $(".result").show();


        $("#botontry").click(function(e){
            e.preventDefault();
            var charValue = $("#character").val();// we get the value of the character input
            $("#character").val(""); // we get the input empty
            
            play.try(charValue);

            $(".showlength p").html("Final Word: ");
                
        });
    });

});