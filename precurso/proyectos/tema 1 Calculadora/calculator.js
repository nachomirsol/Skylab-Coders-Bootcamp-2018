function calculator(num1,num2){
	if(arguments.length>1){ // Si le pasamos a la función más de un parámetro
		if(!isNaN(num1) && !isNaN(num2)){ // Si además estamos introduciendo números en lugar de strings
				var results = []; // creamos el array para añadirle elementos
				results.push(num1+num2);
				results.push(num1-num2);
				results.push(num1*num2);
				results.push(num1/num2);
				for(var i = 0; i < results.length; i++){ // hacemos un bucle que recorra los resultados del array 
					if(!Number.isInteger(results[i])){// detectamos cual tiene decimales
						results[i] = results[i].toFixed(3); // que no sean más de tres
					}
			}
				console.log("La suma es: "+results[0]+"; La resta es: "+results[1]+"; La multiplicación es: "+results[2]+"; La división es: "+results[3]);// mostramos en la consola
		}else{ // Si no has introducido 2 strings, avisa al usuario por consola
			console.log("You must introduce 2 numbers")
		}
	}else if(arguments.length<=1 && (!isNaN(num1))){ // si no se han introducido 2 parámetros, en este caso 1 y además es un número
		var sqrt = Math.sqrt(num1);
		console.log(sqrt.toFixed(3)); // muestra el resultado de la raíz
	}else{
		console.log("You must introduce one number");
	}
}
calculator(3,4);