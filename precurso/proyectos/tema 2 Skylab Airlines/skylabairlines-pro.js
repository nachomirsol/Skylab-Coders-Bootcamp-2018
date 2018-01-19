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
];

function skylab(){

//preguntamos por el nombre de usuario y lo guardamos
	var userName = prompt("Please insert your user name","nachal");
	console.log("Hi "+userName+" welcome to skylab airlines, here you have the flights info");



// funcion condicional a que haga escala o no
	function scaleFlight(elm){
		if(elm===false){
			return "No realiza ninguna escala";
		}else{
			return "Realiza una escala";
		}
	}


// recorremos el array de objetos para mostrar la información al usuario de forma amigable

	flights.forEach(function(elm){
		console.log("El vuelo con origen "+elm.from+" y destino "+elm.to+" tiene un coste de "+elm.cost+" y "+scaleFlight(elm.scale));
	});


//Ahora calcularemos el coste medio de los vuelos, primero cogemos todos los costes de los vuelos para luego poder sumarlos.
	function coste(x){return x.cost}
	var costes = flights.map(coste);
	console.log("Array con todos los costes: "+costes);

//Ahora con reduce sumamos todos los costes

	function costeTotal(acc,next){return acc+next;}
	var totalCost = costes.reduce(costeTotal);
	console.log("Suma de todos los vuelos = "+totalCost);

//Calculamos la media
	var averageCost = totalCost/flights.length;
	console.log("El coste medio de todos los vuelos de hoy es de: "+averageCost);


//Vemos cuantos billetes tienen escala, para ello filtramos
	function scaleNum(x){return x.scale===true}
	var escalas = flights.filter(scaleNum);
	console.log("Hay un total de "+escalas.length+" vuelos que hacen escala");

/////////////////////////////////////////////////////////////////////////////////PRO//////////////////////////////////////////////////////////////////////////////


///////// Introducimos si somos usuario o admin
	function user(){
		var userAdmin= prompt("Es usted usuario o administrador(user/admin)","admin");
		if(userAdmin=="user"){
			searchFlights();
			selectFlight();
		}

		if(userAdmin=="admin"){
			createDelete();
		}	
	}
	user();



/////// funcion para buscar vuelos por precio
	function searchFlights(){
		var search = prompt("Por favor, introduzca el precio máximo que está dispuesto a pagar","400");
		function searchPrice(x){return x.cost<=search;}
		console.log(flights.filter(searchPrice));

	}



////////Seleccionaremos el id para elegir el vuelo que deseamos adquirir
	function selectFlight(){
		var select = prompt("Por favor, seleccione el id del vuelo que desee adquirir","7");
		function selectId(x){return x.id==select;}
		var selected = flights.filter(selectId);
		console.log(selected);
		//Acordarse de incluir entre corchetes el indice del array porque filter te devuelve un array aunque sea de objetos
		console.log("Ha elegido el vuelo "+selected[0].id+" con origen "+selected[0].from+" y destino "+selected[0].to+" por un precio de: "+selected[0].cost);

	}



//////////Creamos una función que nos permita añadir vuelos
	function createFlights(){		
			var idFlight = flights.length;
			var destino = prompt("Por favor ingrese el destino del vuelo creado");
			var origen = prompt("Por favor ingrese el origen del vuelo creado");
			var coste = prompt("Coste del vuelo creado");
			var haceEscala = prompt("true o false si hace escala o no");
			flights.push({id:idFlight,to:destino,from:origen,cost:Number(coste),scale:haceEscala});
			console.log(flights);				
	}



///////// funcion para para añadir mas vuelos con bucle
function createMoreFlights(){
	var moreFlights = prompt("Do you want to create more flights(y/n)","y");
	if(moreFlights=="y"){
		createFlights();
	}else{
		console.log("Gracias por utilizar skylab airlines");
	}
}



////////function delete flights
function deleteFlight(){

	var eraseFlight = prompt("Seleccione el id del vuelo que desea eliminar",7);
	var eliminar = Number(eraseFlight)
	flights.splice(eliminar,1);
	console.log(flights);
}



//////////////queremos crear o eliminar
function createDelete(){
	while(createDel!="end"){
		var createDel = prompt("Seleccione si desea crear o eliminar un vuelo(crear/eliminar), para finalizar introduzca end","eliminar");
		if(createDel=="eliminar"){
			deleteFlight();
		}else{
			createMoreFlights();
		}
	}
}

}

skylab();