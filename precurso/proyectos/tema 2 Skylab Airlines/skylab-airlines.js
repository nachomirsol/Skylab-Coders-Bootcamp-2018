function skylabAirlines(){
	
	//preguntamos el nombre de usuario y lo guardamos en una variable para dar la bienvenida
	
	var user = prompt ("Welcome to Skylab Airlines, please specify your username");
	console.log ("Hi "+user+", welcome to Skylab Airlines, please find below the information related to your flights ");
		
	var flights = [
	{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
	{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
	{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
	{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
	{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
	{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
	{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
	{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
	{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
	{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
	]
	
	// Creamos una función con un condicional para que muestre en pantalla una u otra cosa según el vuelo efectúe escalas o no
	function scaleFlights(elm){
		if(elm.scale==false){
			return "No realiza ninguna escala";
		}else{
			return "Realiza una escala";
		}
	}
	
	// Ahora recorremos el array de objetos de forma amigable para mostrar la información de los vuelos, con especial atención a la parte de la escala, donde llamaremos a la función anteriormente establecida
	for(var i=0;i<flights.length;i++){
		console.log("El vuelo con origen: "+flights[i].from+" y destino: "+flights[i].to+" tiene un coste de: "+flights[i].cost+" y "+ scaleFlights(flights[i]));
	}

	// Vamos a mostrar el coste medio de los vuelos, para ello necesitamos recorrer el array de objetos para centrarnos en el coste total y dividirlo entre el total de vuelos-
	var totalCost = ""; // guardamos el acumulador fuera del bucle para que en cada vuelta vaya sumandose.
	var totalFlights = flights.length; // Guardamos el número total de vuelos
	flights.forEach(function(obj){
		totalCost = Math.floor(totalCost+obj.cost);
	});

	var costAverage = Math.floor(totalCost/totalFlights);
	console.log("The average cost for the whole flights is "+costAverage);

	//Vamos a ver cuantos vuelos efectúan escalas, para ello necesitamos filtrar y mostrarla longitud del array resultante
	function scaleFilter(elm){
		return elm.scale === true;
	}
	var howMuchScales = (flights.filter(scaleFilter)).length;
	console.log("There are at the end "+ howMuchScales+ " flights making scales today");

	// Creamos una función que nos filtre los últimos 5 vuelos, para lo cual utilizamos el id 
	function lastFiveFlights(elm){

		return elm.id > 04;		
	}

	var showLastFive = flights.filter(lastFiveFlights);
	showLastFive.forEach(function(obj){
		console.log("Flight destiny with id: "+obj.id+" is "+obj.to);
	});

}

skylabAirlines();