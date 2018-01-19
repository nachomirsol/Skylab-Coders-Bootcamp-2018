function bingo(){


	var totalBalls = 100;
	var bingoCard = createCard(); // llamada a la función createCard que crea los 15 números aleatorios
	var attempts = 0;
	console.log(bingoCard);
	var drumofBalls = generateRandom();
	var attempts = 0;
	var user = sayHello();
	for(var i=0;i<totalBalls;i++){	
			
		attempts++;
		var randBall = drumofBalls[i];
		var proceed = confirm("You have the ball number "+randBall+" continue playing?");
		if(proceed==true){	
				bingoCard = checkCard(bingoCard,randBall);
				showCard(bingoCard);
				if(checkBingo(bingoCard)==true){
					var cont=confirm("Congrats"+user+ ", you made bingo in "+attempts+ " attempts, continue playing?");
					if(cont==true){
						bingo();
					}else{
						console.log("Thanks for playing bingo game "+user);
						break;
					}
				}
		}else{
			console.log("Thank you for play bingo game "+user);
			break;
		}
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function sayHello(){ // this function is to welcome user to introduce username
		var userName = prompt("Please introduce your user name");
		return userName;
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function createCard(){// this funcion creates the bingo card in an array of 15 random numbers
			var arrayCard = [];
			for(var i=0;i<15;i++){
				var randomNumber = Math.floor(Math.random()*99);
				if(arrayCard.indexOf(randomNumber)==-1){
					arrayCard.push(randomNumber);
				}else{
					i--;
				}
			}
			return arrayCard;
	}

	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function generateRandom(){//function to generate random numbers without repeating, we keep it in the array as a drum
	var max = totalBalls;
	var random = [];
	for(var i = 0;i<max ; i++){
		var temp = Math.floor(Math.random()*max);
		if(random.indexOf(temp) == -1){
			random.push(temp);
		}else{
			i--;
		}
    }
    return(random);
	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function checkCard(arrayBingoCard,ballNumber){// this function compares the ball with the generated bingoCard, if there is a match it changes number for an "X"
		var i = arrayBingoCard.indexOf(ballNumber);//try to find if in the array we could find the ball number
		if(i !=-1){
			console.log("There is a match in your card with ball "+arrayBingoCard[i]);
			arrayBingoCard[i] = "X";

		}
		return arrayBingoCard;
	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function checkLine(arrayLine){// if we have a line plenty of "XXXXX" we obtain a line

		line1 = arrayLine.slice(0,5);
		line2 = arrayLine.slice(5,10);
		line3 = arrayLine.slice(10,15);
		if(line1.join("")=="XXXXX"||line2.join("")=="XXXXX"||line3.join("")=="XXXXX"){
			console.log("Linea");
		}
		return arrayLine;
		
	}




	function checkBingo(arrayCard){// if we all the numbers are turned into "X" we have a bingo, review it to improve
		var bingo = false;
		if(arrayCard.join("")=="XXXXXXXXXXXXXXX"){
			console.log("BINGO");
			return true;
		}
	}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function showCard(arrCard){
		line1 = arrCard.slice(0,5);
		line2 = arrCard.slice(5,10);
		line3 = arrCard.slice(10,15);
		console.log(line1);
		console.log(line2);
		console.log(line3);
		console.log("-----");
	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
bingo();