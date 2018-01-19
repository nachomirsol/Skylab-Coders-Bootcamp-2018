function pasapalabra(){// función padre, cuando se llama empieza el juego

    var usersRanking=[];

    startGame();

/*******************************************************************************************************************************/
                //Función encargada de aplicar la lógica del juego de forma ordenada y en la que se llamarán a las demás funciones
/*******************************************************************************************************************************/

    function startGame(){
        var questions = [
            { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
            { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
            { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") }
        ];

        var hits = 0;
        var fails = 0;
        

        var userName = prompt("Por favor introduzca su nombre");
        if(userName!=""){
            alert("Hola "+userName+" bienvenido a pasapalabra")
        }


        checkUserAnswer();

/*******************************************************************************************************************************/
                //Función que se encarga de recorrer las preguntas y revisar el resultado el número de rondas que le marquemos
/*******************************************************************************************************************************/

        function checkUserAnswer(){
            var rounds = prompt("Indica el número de rondas que desea jugar",3);
            do{
                rounds--;
                

                 for(prop in questions){   
                    
                    if(questions[prop].status==0){         

                        var userAnswer = prompt(questions[prop].question,"pasapalabra");

                        if(userAnswer.toLowerCase()==questions[prop].answer){
                            hits++;
                            questions[prop].status=1;
                            alert("Correcto");

                        }else if(userAnswer.toLowerCase()=="pasapalabra"){
                            alert("Has pasado palabra, pasamos a la siguiente pregunta");

                        }else{
                            fails++;
                            questions[prop].status=1;
                            alert("Has fallado");
                        } 
                    }                        
                }
                if(rounds==0){
                    finishGame();
                }

            }while(rounds>0)
        }


/*******************************************************************************************************************************/
                //Función que se aplica cuando terminas el número de rondas, muestra el resultado final y llama a playagain para volver a jugar
/*******************************************************************************************************************************/

        function finishGame(){
            usersRanking.push({name:userName,points:hits});
            console.log("resultado: "+hits+" aciertos y "+fails+" fallos");
            sortRanking();
            playAgain();
        }


/*******************************************************************************************************************************/
                //Función que se aplica cuando terminas el numero de rondas, si le dices que si, se reinicia el juego
/*******************************************************************************************************************************/


        function playAgain(){
            var play = prompt("¿desea volver a jugar?(s/n)");
            if(play=="s"){
               startGame();
            }else{
                console.log("Gracias por haber jugado");
            }
        }


/*******************************************************************************************************************************/
                //Función para ordenar los resultados finales que se aplica a la función UsersRanking
/*******************************************************************************************************************************/

        function sortRanking(){
            console.log(usersRanking.sort(function (a, b){return (b.points - a.points)}));
        }



    }

}
pasapalabra();