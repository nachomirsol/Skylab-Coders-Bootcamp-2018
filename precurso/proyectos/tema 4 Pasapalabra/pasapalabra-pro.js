var rankingUsers =[];
var countDown;

function pasapalabra(){
    var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")}
]
    var hits = 0;
    var fails = 0;
    var userName = prompt("Por favor, introduzca su nombre");
    var ready = confirm("Hola "+userName+" bienvenido a pasapalabra, preparado para jugar? ");
    var rounds = prompt("Cuantas rondas desea jugar?",3);

    if(ready==true){
        alert("Vamos con la primera palabra");
        playGame();
    }else{
        console.log("Tranquilo, tómate tu tiempo "+userName)
    }


/*********************************************************************************************************************************************/
                        //FUNCIÓN PARA SEGUIR LA LÓGICA DEL JUEGO PASO A PASO
/*********************************************************************************************************************************************/


    function playGame(){

        while(rounds>0){
            rounds--;
            questions.forEach(function(prop){// Ejecutamos una función para cada elemento(objeto) del array
                if(prop.status==0){
                    var nextQuestion = prompt(prop.question,"pasapalabra");
                    if(nextQuestion=="end"){
                        rounds=-1;
                        quitGame();
                    }else{
                        if(nextQuestion==prop.answer){
                            console.log("Correcto");
                            prop.status=1;
                            hits++;
                        }else if(nextQuestion=="pasapalabra"){
                            console.log("Ha pasado palabra");
                        }else{
                            console.log("Noooo");
                            fails++;
                            prop.status=1;
                        }
                    }

                }
                    
                
            });  
        
        }
            finishGame();
            usersRanking();

            var playAgain = confirm("You finished the rounds, do you want to play again?");
            if(playAgain==true){
                console.log("Siguiente jugador");
                pasapalabra();
            }else{
                console.log("Gracias por participar");
            }
    }


/*********************************************************************************************************************************************/
                        //FUNCIÓN PARA FINALIZAR EL JUEGO
/*********************************************************************************************************************************************/

    function quitGame(){
        console.log("Se acabo el juego, aquí su puntuacion")
        finishGame();
        
    }


/*********************************************************************************************************************************************/
                        //FUNCIÓN PARA MOSTRAR LA PUNTUACIÓN DEL USUARIO
/*********************************************************************************************************************************************/

    function finishGame(){
        console.log("You finished game, here you have your qualification");
        console.log("points: "+hits+" points "+"fails: "+fails+" fails");
    }


/*********************************************************************************************************************************************/
                        //FUNCIÓN PARA MOSTRAR EL RANKING DE LOS USUARIOS CON LA PUNTUACIÓN
/*********************************************************************************************************************************************/


function sortRanking(){
    rankingUsers.sort(function(a,b){return b-a});//No utilizada
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN PARA MOSTRAR EL RANKING DE LOS USUARIOS CON LA PUNTUACIÓN
/*********************************************************************************************************************************************/

    function usersRanking(){
        console.log("Your points: "+hits+" points, "+fails+" fails");
        console.log("Here is the qualification");
        rankingUsers.push({user:userName,points:hits,fails:fails});
        console.log(rankingUsers.sort(function(a,b){return (b.hits-a.hits)}));
    }
}

pasapalabra();//falta incluir tiempo