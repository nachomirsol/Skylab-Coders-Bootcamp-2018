//1 - Preguntamos el nombre de usuario
//2 - Si el usuario escribe algo:
//3 - Bienvenido usuario, aquí tiene su cartón, generateCard(), showCard()
//4 - Desearía otro cartón? if true, generateCard(),showCard(), if false, playgame()
//5 - Este es su cartón, vamos con la primera bola, la extraemos del bombo generado con números aleatorios. Es un 7, desea continuar? if yes, siguientebola, if not, finish game.
//6 - if siguiente bola coincide con el cartón, hay un match, reemplazar por la X,
//7 - if linea llena de X canta linea
//8 - if todo cartón lleno de X, canta bingo
//9 - if bingo, muestro puntuación, a menos rondas mas puntos
var rankingUsers = [];
function bingo(){
	var drum = [];
	var bingoCard = [];
	var users = [];
	var totalBalls = 200;
	var rounds = 0;
	var userName = prompt("Please introduce your user name");

	if(userName!=""){
		var ready = confirm("Welcome to bingo game "+userName+" are you ready?");
		if(ready===true){
			playGame();
		}else{
			console.log("Hasta la próxima "+userName);
		}
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA APLICAR LA LÓGICA DEL JUEGO DE FORMA ORDENADA
	/****************************************************************************************************************************************************************************/

	function playGame(){
			
		while(play!=true){
			bingoCard = [];//reseteamos el cartón y generamos uno nuevo
			var play = confirm("Here you have your bingo Card, do you want to replace it?");
			bingoCard = [];//reseteamos el cartón y generamos uno nuevo
			generateCard();
		}


		console.log("Ha decidido jugar con el cartón:");
		console.log(bingoCard);
		alert("Atento a la primera bola");
		generateDrum();

		for(var i=0;i<drum.length;i++){//probar while
			
			var ball = confirm("Ronda "+rounds+": Ha salido la bola numero: "+drum[i]+" continue playing?");

			if(ball===true){
				rounds++;
				var ballNumber = drum[i];
				var indice = bingoCard.indexOf(ballNumber);
				if(indice!=-1){
					console.log("There is a match in number "+ballNumber);
					bingoCard[indice]="X";
					showCard();
					checkLine(bingoCard);
				}
			}else{
				i=drum.length;
				alert("Ha decidido terminar, gracias por participar");

			}
		}
		showPoints();
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA GENERAR EL CARTÓN DEL BINGO, CONDICIÓN: NÚMEROS ALEATORIOS Y SIN REPETIRSE
	/****************************************************************************************************************************************************************************/


	function generateCard(){			
		for(var i=0;i<15;i++){
			var randomNum = randomNumber();
			if(bingoCard.indexOf(randomNum)==-1){
				bingoCard.push(randomNum);
			}else{
				i--
			}
		}
		showCard();
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA MOSTRAR POR CONSOLA EL CARTÓN DEL BINGO EN 3 LINEAS
	/****************************************************************************************************************************************************************************/


	function showCard(){
		var line1 =	bingoCard.slice(0,5); 
		var line2 = bingoCard.slice(5,10); 
		var line3 = bingoCard.slice(10,15); 
		console.log(line1);
		console.log(line2);
		console.log(line3);
		console.log("*********");
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA GENERAR NÚMEROS ALEATORIOS
	/****************************************************************************************************************************************************************************/

	function randomNumber(){
		var random = Math.round(Math.random()*99);
		if(random!=0){
			return random;
		}else{
			return random+1;
		}
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA GENERAR EL BOMBO DEL BINGO CON 100 NÚMEROS EN ORDEN ALEATORIO
	/****************************************************************************************************************************************************************************/

	function generateDrum(){
		for(var i=0;i<totalBalls;i++){
			var randomNum = randomNumber();
			if(drum.indexOf(randomNum)==-1){
				drum.push(randomNum);
			}
		}
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA COMPROBAR SI HAY LÍNEA
	/****************************************************************************************************************************************************************************/
	function checkLine(arrayLine){// if we have a line plenty of "XXXXX" we obtain a line
		line1 = arrayLine.slice(0,5);
		line2 = arrayLine.slice(5,10);
		line3 = arrayLine.slice(10,15);
		if(line1.join("")=="XXXXX"||line2.join("")=="XXXXX"||line3.join("")=="XXXXX"){
			console.log("Linea");
		}

		if(line1.join("")=="XXXXX"&&line2.join("")=="XXXXX"&&line3.join("")=="XXXXX"){
			console.log("bingo");
			showPoints();
		}
		return arrayLine;		
	}


	/****************************************************************************************************************************************************************************/
											//FUNCION PARA RESETEAR LOS VALORES Y EMPEZAR
	/****************************************************************************************************************************************************************************/


	function reset(){
		var drum = [];
		var bingoCard = [];
		var totalBalls = 200;
		var rounds = 0;
		playGame();
	}



	/****************************************************************************************************************************************************************************/
											//FUNCION PARA VER PUNTUACIONES
	/****************************************************************************************************************************************************************************/

	function showPoints(){
		console.log("Estas son sus puntuaciones: ");
		rankingUsers.push({usuario:userName,puntos:rounds});
		console.log(rankingUsers);
		bingo();
	}


}

bingo();