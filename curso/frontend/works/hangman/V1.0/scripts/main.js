$(document).ready(function(){
    $(".result").hide();
    $("#boton").click(function(e){
        e.preventDefault();
        //Guardamos el número inicial de itentos y la palabra introducida 
        $(".finish").hide();
        function array_filled(num,elm){
            if(typeof num==="number" && typeof elm != "object"){
                var arr = [];
                for(var i = 0;i<num;i++){
                    arr.push(elm);
                }
                return arr;
            }else{
                return "You need to put number as first param and string or number as second";
            }
        }


        var attempts = 15;
        var hits = 0;
        var inputValue = $("#input").val();
        var arrayValue = inputValue.split("");
        var guiones = array_filled(arrayValue.length," _ ");


       /* for(var i=0;i<arrayValue.length;i++){
            arrayValue[i]="_";
        }
        */

        $(".showlength p").html("Final Word: "+guiones.join(""));
        $(".intends p").html("Attempts: "+attempts);
        //alert(inputValue);
        
        $(".enterword").hide();
        $(".result").show();
        var addChar =[];


        $("#botontry").click(function(e){
            e.preventDefault();
            var charValue = $("#character").val();
            
            if(inputValue.indexOf(charValue)!=-1){
                alert("yes");
                hits++;
                addChar.push(charValue);
                
                $(".showright p").html("Chars: "+addChar);
                //$(".showlength p").html("Final Word: "+arrayValue);
                $("#character").val("");
                
                for(var i=0;i<arrayValue.length;i++){
                    if(arrayValue[i]===charValue){
                        guiones[i] = charValue;                    
                    } 
                }
                $(".showlength p").html("Final Word: "+ guiones.join(''));

            }else{ 
                alert("no");
                attempts --;
                $(".intends p").html("Attempts: "+attempts);
                $("#character").val("");
            }

            if(hits===(arrayValue.length)){
                $(".finish").css("display","block");
                var playAgain = confirm("finish game, do you want to play again?(y/n)");
                if(playAgain=="y"){
                    $(".result").hide();
                    $(".enterword").show();
                }else{
                    alert("THANKS FOR PLAY");
                }
                if(attemts===0){
                    alert("LOOOOSER");
                }
            }
        });
    });

});