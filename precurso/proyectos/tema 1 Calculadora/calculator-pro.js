function calculatorPro(){

	var totalSum = arguments[0];
	var totalSubs = arguments[0];
	var totalMult = arguments[0];
	var totalDiv = arguments[0];
	var results = [];

	for(var i=1;i<arguments.length;i++){
		totalSum = totalSum+arguments[i];
		totalSubs = totalSubs-arguments[i];
		totalMult = totalMult*arguments[i];
		totalDiv = totalDiv/arguments[i];
	}

	results.push({Suma:totalSum.toFixed(3),Resta:totalSubs.toFixed(3),multiplicacion:totalMult.toFixed(3),division:totalDiv.toFixed(3)});
	return results;

}
calculatorPro(2,4,7,8);






function startCalculator(){

	var userData = prompt("introduce numbers separated by spaces");
	var arrayData = userData.split(" ");

	for(var i=0;i<arrayData.length;i++){
		arrayData[i]=Number(arrayData[i]);
	}

	calculatorPro(arrayData);
	var cont=prompt("Do you want to introduce more numbers (y/n)");
	if(cont=="y"){
		startCalculator();
	}else{
		alert("Thank you for use calculator ")
	}

	function calculatorPro(arrNumbs){
		var totalSum = arrNumbs[0];
		var totalSubs = arrNumbs[0];
		var totalMult = arrNumbs[0];
		var totalDiv = arrNumbs[0];
		var results = [];

	for(var i=1;i<arrNumbs.length;i++){
		if(!isNaN(arrNumbs[i])){
			totalSum = totalSum+arrNumbs[i];
			totalSubs = totalSubs-arrNumbs[i];
			totalMult = totalMult*arrNumbs[i];
			totalDiv = totalDiv/arrNumbs[i];
		}else{
			console.log("Be sure you introduce numeric values");
		}
	}

	results.push({Suma:totalSum.toFixed(3),Resta:totalSubs.toFixed(3),multiplicacion:totalMult.toFixed(3),division:totalDiv.toFixed(3)});
	console.log("Los numeros elegidos son "+arrayData);
	console.log(results);
	}
}
startCalculator();