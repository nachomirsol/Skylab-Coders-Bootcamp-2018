//secuencia
/*
- Primero encontraremos la pantalla inicial, en la que aparecerá el botón de jugar y la caja de texto de ingresar el nombre de usuario
- Una vez introducido el nombe de usuario, desaparecerá la caja de texto y nos aparecerá la pantalla con el panel y la caja de texto 
con la primera pregunta, el tiempo empieza a correr
- Si le pulso sobre el boton enviar, el proceso será el siguiente: 
	-	Comprueba la respuesta checkAnswer()
	-	Si la respuesta es correcta o incorrecta, cambiale el color
	-	Pasa a la siguiente pregunta nextQuestion()
*/

var rankingUsers = [];// creamos un array donde insertaremos un objeto con usuario, puntos y fallos
	var reset = false;
	var user = false;// Si no hay ningun usuario activo, será false
	var users = 0;// Esto nos servirá para poder ir añadiendo usuarios al ranking según terminen o reseteen
	var userName;// guarda el nombre de usuario
	var time = false;// Por defecto el tiempo no corre, hasta que no le demos a jugar
	var totalTime = 10;//Se establece el tiempo inicial
	var startCount;// guardamos la variable para que empiece a contar el tiempo
	var hits = false;// por defecto los puntos estarán en false o desactivados
	var points = 0;// Los puntos empezarán a contar desde cero
	var mistakes = false;// los fallos también empezarán desactivados
	var fails = 0;// Los fallos empezarán a contar desde cero
	var round = 0;// variable global que utilizaremos como índice de array para recorrer preguntas de forma incremental (ordenadamente)
	var textBox1 = true;//Llamaremos textbox1 al cajetin donde se introduce el nombre para empezar la partida
	var textBox2 = false;// Llamaremos textnox2 al cajetin donde va la pregunta, el enviar y el pasar palabra, siempre que este activado textbox1, este estará desactivado
	var cajaTexto1;
	var cajaTexto2;
	var showQuit;
	var showPanel;// guardamos la variable que mostrará u ocultará el panel según indiquemos
	var cajaRanking;
	var userAnswer;// Almacenaremos la respuesta del jugador
	var continuePlaying = false;
	var puntuaciones = document.getElementById("puntuaciones");
	var questions = [
	{ letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
	];


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE ESCONDERÁ LA CAJA DE TEXTO DE INTRODUCCIÓN DE NOMBRE Y BOTON JUGAR PARA DAR LUGAR AL PANEL DE PREGUNTAS
/*********************************************************************************************************************************************/


function hideTextBox(){
	cajaTexto1 = document.getElementById("cajatexto1");
	userName = document.getElementById("nombreUsuario").value;
	if(textBox1 == true && userName!=""){
		cajaTexto1.style.display="none";
		textBox1=false;
		document.getElementById("resetear").style.display="block";
		reset=true;
		showInfo();
		showTextBox();
		countDown();
		users++;
		
	}else{
		alert("No puede dejar el campo vacío");
	}
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE MOSTRARÁ LA CAJA DE TEXTO CON LAS PREGUNTAS Y BOTONES PARTE DERECHA
/*********************************************************************************************************************************************/


function showTextBox(){
	if(textBox2==false){

		showPanel=document.getElementById("muestrapanel");
		showPanel.style.display = "block";
		showQuit=document.getElementById("quit");
		showQuit.style.display="block";
		cajaRanking = document.getElementById("clasificacion");
		cajaRanking.style.display = "inline";
		cajaTexto2 = document.getElementById("cajatexto2");
		cajaTexto2.style.display = "inline";
		textBox2 = true;
		showQuestions();
	}
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE MOSTRARÁ LA INFORMACIÓN EN PANTALLA (NOMBRE, PUNTUACIÓN Y TIEMPO) PARTE IZQUIERDA
/*********************************************************************************************************************************************/


function showInfo(){

	document.getElementById("info").style.display="block";
	document.getElementById("datosactuales").style.display="block";
	document.getElementById("muestratiempo").style.display="block";
	document.getElementById("title").style.display="none";

	var showName = document.getElementById("usuario");
	showName.innerHTML = "Jugador<br> "+userName;
	user=true;

	var showPoints = document.getElementById("puntos");
	showPoints.innerHTML = "Aciertos<br> "+points;
	hits=true;

	var showFails = document.getElementById("fallos");
	showFails.innerHTML = "Fallos<br> "+fails;
	mistakes=true;

	var showTime = document.getElementById("tiempo");
	showTime.innerHTML = totalTime;

}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE ACTIVARÁ EL CONTADOR DE TIEMPO SETINTERVAL, CUANDO SE ACABA EL TIEMPO SE PREGUNTA SI DESEA JUGAR OTRA PARTIDA MUESTRA RANKING Y RESETEA
/*********************************************************************************************************************************************/


/*function countDown(){
	if(textBox1==false){
		var showTime = document.getElementById('tiempo');
			startCount = setInterval(function(){
				totalTime--; 
				showTime.innerHTML = totalTime;
				if(totalTime <= 0){
					continuePlaying = confirm("tiempo!!! desea seguir jugando?");
					if(continuePlaying==true){
						clearInterval(startCount);
						totalTime;
						showRanking();
						resetGame();
					}else{
						quitGame();
					}
					
				}
			}, 1000);
	}
}
*/
/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE MOSTRARÁ LA SIGUIENTE PREGUNTA SIEMPRE QUE EL STATUS SEA 0, SI EL STATUS ES 1, SE PASA A LA PRÓXIMA PREGUNTA
/*********************************************************************************************************************************************/


function showQuestions(){
	var quest = document.getElementById("pregunta");
	//hacemos el recorrido por las preguntas, si el status de la pregunta es 0 se muestra, si no, pasamos a la siguiente
	if(round>25){round=0}
		if(questions[round].status===0 && round<=25){
			quest.innerHTML = questions[round].question;// muestra la pregunta, round hace referencia a la ronda, coincidirá con una letra concreta
		}else{
			next();
		}
	
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE DEJA LA CASILLA DEL INPUT VACÍA PARA ESCRIBIR LAS RESPUESTAS
/*********************************************************************************************************************************************/


function deleteInput(){
userAnswer = document.getElementById("respuestaUsuario");
userAnswer.value = "";
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE CONTEMPLA CUANDO HACEMOS CLICK EN PASAPALABRA
/*********************************************************************************************************************************************/


function next(){
	round++;//siguiente letra
	if(round>questions.length-1){//si llegamos a la última pregunta, empieza de cero hasta dar con una pregunta que tenga status 0 con showquestions()
		round=0;
	}
	deleteInput();
	showQuestions();
	document.getElementById("respuestaUsuario").focus();
}

/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE NOS PERMITE SABER S
/*********************************************************************************************************************************************/

function statusQuestion() {

      if ((points + fails) === questions.length){
      		var playMore=confirm("Enhorabuena, has finalizado tu partida, desea jugar otra?");
      		if(playMore===true){
      			resetGame();
      		}else{
      			quitGame();
      		}
      }

  }




/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE COMPRUEBA LA RESPUESTA INTRODUCIDA, SI RESPONDE
/*********************************************************************************************************************************************/


function checkAnswer(){

	userAnswer = document.getElementById("respuestaUsuario").value.toLowerCase();
	var questionAnswer = questions[round].answer;
	if(userAnswer==questionAnswer && round<=questions.length-1){

		alert("COOOORRECTO");
		questions[round].status = 1;
		changeToGreen();
		round++;
		points++;
		var showPoints = document.getElementById("puntos");
		showPoints.innerHTML =	"Aciertos<br> "+points;
		deleteInput();
		statusQuestion();
		showQuestions();
		document.getElementById("respuestaUsuario").focus();

	}else if(userAnswer==""){
		alert("Debe escribir una respuesta o pasar palabra");
	}else if(userAnswer!=questionAnswer && round<=questions.length-1){
		alert("NOOOO");
		questions[round].status = 1;
		changeToRed();
		round++;
		fails++;
		var showFails = document.getElementById("fallos");
		showFails.innerHTML =	"Fallos<br> "+fails;
		deleteInput();
		statusQuestion();
		showQuestions();
		document.getElementById("respuestaUsuario").focus();
	}

}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE CAMBIA A COLOR VERDE EL TEXTO SI ES CORRECTO
/*********************************************************************************************************************************************/


function changeToGreen(){
	var letter = "letter"
	var currentLetter = document.getElementById("letter"+round);
	currentLetter.style.background = "#059327";
	console.log(round);
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE CAMBIA A COLOR ROJO EL TEXTO SI NO ES CORRECTO
/*********************************************************************************************************************************************/

function changeToRed(){
	var letter = "letter"
	var currentLetter = document.getElementById("letter"+round);
	currentLetter.style.background = "red";
	console.log(round);
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE REINICIA EL JUEGO, TODO A CERO MENOS EL HISTÓRICO DE USUARIOS Y PUNTOS
/*********************************************************************************************************************************************/


function resetGame(){
	var rankingUsers = [];
	if(reset===true){
		document.getElementById("resetear").style.display="none";
		reset=false;
		showRanking();
		time=false;
		startCount;
		clearInterval(startCount);
		totalTime = 10;
		points = 0;
		fails = 0;
		round = 0;// variable global que utilizaremos como índice de array para recorrer preguntas de forma incremental (ordenadamente)
		cajaTexto1.style.display="block";
		cajaTexto2.style.display = "none";
		textBox1 = true;
		textBox2 = false;
		cajaTexto1;
		cajaTexto2;
		userAnswer;
		document.getElementById("title").style.display="block";
		document.getElementById("muestrapanel").style.display="none";
		var showName = document.getElementById("usuario");
		showName.innerHTML = "";
		document.getElementById("nombreUsuario").value="";
		user=false;
		users++;
		attempt = 0;

		var showPoints = document.getElementById("puntos");
		showPoints.innerHTML = "";
		hits=false;

		var showFails = document.getElementById("fallos");
		showFails.innerHTML = "";
		mistakes=false;

		var showTime = document.getElementById('tiempo');
		showTime.innerHTML = "";
		showTime.style.border="none";
		

		for(var i=0;i<questions.length;i++){
			questions[i].status=0;
			var letter = "letter";
			var currentLetter = document.getElementById("letter"+i);
			currentLetter.style.color = "white";
			currentLetter.style.background = "none";
		}
	}

}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE RESETEA VALORES A CERO, MISMO USUARIO
/*********************************************************************************************************************************************/


function resetValues(){
	points = 0;
	fails = 0;
	round = 0;
	
	var resetName = document.getElementById("usuario");
	resetName.innerHTML = "Jugador<br> "+userName;
	user=true;

	var resetPoints = document.getElementById("puntos");
	resetPoints.innerHTML = "Aciertos<br> "+points;
	hits=true;

	var resetFails = document.getElementById("fallos");
	resetFails.innerHTML = "Fallos<br> "+fails;
	mistakes=true;

	for(var i=0;i<questions.length;i++){
		questions[i].status=0;
		var letter = "letter";
		var currentLetter = document.getElementById("letter"+i);
		currentLetter.style.color = "white";
		currentLetter.style.background = "none";
	}
	showQuestions();

}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE FINALIZA EL JUEGO DEL TODO
/*********************************************************************************************************************************************/


function quitGame(){
	var rankingUsers = [];
	time=false;
	startCount;
	clearInterval(startCount);
	totalTime = 10;
	points = 0;
	fails = 0;
	round = 0;// variable global que utilizaremos como índice de array para recorrer preguntas de forma incremental (ordenadamente)
	cajaTexto1.style.display="block";
	cajaTexto2.style.display = "none";
	textBox1 = true;
	textBox2 = false;
	cajaTexto1;
	cajaTexto2;
	userAnswer;
	var showName = document.getElementById("usuario");
	showName.innerHTML = "";
	document.getElementById("nombreUsuario").value="";
	user=false;

	document.getElementById("info").style.display="none";
	showQuit.style.display="none";
	var showPoints = document.getElementById("puntos");
	showPoints.innerHTML = "";
	hits=false;

	var showFails = document.getElementById("fallos");
	showFails.innerHTML = "";
	hits=false;
	document.getElementById("muestratiempo").style.display="none";
	var showTime = document.getElementById('tiempo');
	showTime.innerHTML = "";

	document.getElementById("muestrapanel").style.display="none";
	document.getElementById("title").style.display="block";

	for(var i=0;i<questions.length;i++){
		questions[i].status=0;
		var letter = "letter";
		var currentLetter = document.getElementById("letter"+i);
		currentLetter.style.color = "white";
		currentLetter.style.background = "none";
	}
	document.getElementById("clasificacion").style.display="none";
puntuaciones.innerHTML="";

	
}


/*********************************************************************************************************************************************/
                        //FUNCIÓN QUE MUESTRA EL RANKING
/*********************************************************************************************************************************************/
function showRanking(){
	rankingUsers.push({usuario:userName,hits:points,fails:fails});
	puntuaciones.innerHTML += "<tr><td>"+rankingUsers[users].usuario+"</td><td>"+rankingUsers[users].hits+"</td><td>"+rankingUsers[users].fails+"</td></tr>";
}