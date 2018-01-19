/*proceso a seguir:
1- La calculadora está desactivada, muestra el número cero
2- Si apretamos un número, lo muestra en pantalla, activamos la calculadora, calculadora activada
3- Si apretamos otro número y la calculadora está activada, lo muestra al lado del número anterior √
*/

var pantalla = document.getElementById("pantalla");
var init = false;// variable que inicializa la calculadora, por defecto a false 
var numberInit = 0;// el número que mostrará en pantalla cuando la calculadora esté sin inicializar
var keepNumber1; // variable que guardará el primer número que vayamos escribiendo
var keepNumber2;// variable que guardará el segundo número que vayamos escribiendo (si hiciera falta)
var tempNumber;
var operator = false; // variable que inicializará el operador
pantalla.innerHTML = numberInit // mostrará en pantalla el número cero
var keepOperator;
var result;
var keepResult;// variable que guardará el resultado si seguimos operando


/************************************************************************************************************************************************/
							//FUNCION PARA MOSTRAR EN PANTALLA Y GUARDAR EL NÚMERO SELECCIONADO PARA OPERAR
/************************************************************************************************************************************************/


function getNumber(number){
	if(init==false && numberInit==0){ // si la calculadora no está inicializada y el número inicial es cero
		pantalla.innerHTML=number;// muestra en pantalla el número presionado
		keepNumber1 = number;// guarda el número presionado
		init=true; // activa la calculadora
		numberInit = 1;
	}
	else if(init==true && numberInit!=0){// en el caso de que la calculadora ya esté inicializada y exista un número escrito
		pantalla.innerHTML+=number; // muestra el número a continuación del anterior escrito
		keepNumber1+=number; // guardalo en pantalla
	}
}



/************************************************************************************************************************************************/
											//FUNCION PARA CAPTURAR Y MOSTRAR EL OPERADOR CON 2 SUMANDOS
/************************************************************************************************************************************************/


function operador1(op){// capturamos el operador con el this y lo mostramos en pantalla
	if(operator==false){				
		tempNumber=Number(keepNumber1);
		switch(op.id){
			case "+":
			keepOperator = "+";
			pantalla.innerHTML = keepNumber1+" "+keepOperator
			break;

			case "-":
			keepOperator = "-";
			pantalla.innerHTML = keepNumber1+" "+keepOperator
			break;

			case "x":
			keepOperator = "x";
			pantalla.innerHTML = keepNumber1+" "+keepOperator
			break;

			case "/":
			keepOperator = "/";
			pantalla.innerHTML = keepNumber1+" "+keepOperator
			break;

			case "√":
			keepOperator = "√";
			pantalla.innerHTML = keepNumber1+" "+keepOperator
		}

		operator=true;
		init=false;//Reiniciamos la calculadora para introducir el segundo operando desde cero
		numberInit=0;		
	}
}

/************************************************************************************************************************************************/
											//FUNCION PARA CAPTURAR Y MOSTRAR EL OPERADOR CON 1 SUMANDO(raiz)
/************************************************************************************************************************************************/


function result2(){

		keepResult = Math.sqrt(Number(keepNumber1));
		pantalla.innerHTML = keepResult;
		operator=false;

}


/************************************************************************************************************************************************/
											//FUNCION PARA MOSTRAR Y GUARDAR EL RESULTADO
/************************************************************************************************************************************************/

function result(){// si pulsamos sobre el igual, muestra el resultado
	
	switch(keepOperator){

		case "+":
		keepResult = Number(tempNumber) + Number(keepNumber1);
		pantalla.innerHTML = keepResult;
		break;

		case "-":
		keepResult = Number(tempNumber) -  Number(keepNumber1);
		pantalla.innerHTML = keepResult;
		break;

		case "x":
		keepResult = Number(tempNumber) * Number(keepNumber1);
		pantalla.innerHTML = keepResult;
		break;

		case "/":
		keepResult = Number(tempNumber) / Number(keepNumber1);
		pantalla.innerHTML = keepResult;
		break;
	}
	operator=false;

}

/************************************************************************************************************************************************/
											//FUNCION PARA RESETEAR TODOS LOS DATOS
/************************************************************************************************************************************************/

function reset(){
	init = false;
	numberInit = 0;
	operator = false;
	pantalla.innerHTML=numberInit;
}



/************************************************************************************************************************************************/
											//FUNCION PARA BORRAR NUMEROS 1 A 1
/************************************************************************************************************************************************/
function getBack(){
	
		numberBack = keepNumber1.split("");//convertimos el número escrito en un array
		if(numberBack.length>1){
			numberBack.splice(numberBack.length-1,1);//eliminamos el último elemento del número
			backNumber = numberBack.join("");//volvemos a convertir el array en string
			pantalla.innerHTML = backNumber;//Lo mostramos en pantalla
			keepNumber1 = backNumber;// Guardamos el número resultante en la variable inicial
		}else{// Si sólo queda un número por borrar, pon la calculadora a cero.
			reset();
		}

	
}