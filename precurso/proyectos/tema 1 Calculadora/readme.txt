Calculator! :heavy_division_sign::heavy_plus_sign:

http://68.media.tumblr.com/de1929de660b1b76d148b69e04a79402/tumblr_o8pup1GkBq1st5lhmo1_1280.jpg

Haz una calculadora. Un �nico programa al que le pasar�s dos par�metros y el usuario podr� visualizar por consola la suma, resta, multiplicaci�n y divisi�n entre ambos n�meros. El resultado deber�a ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean n�meros.

Si el usuario introduce un solo numero, deber� mostrar SOLO su ra�z cuadrada, si vuelve a introducir los dos, volver� a mostrar las 4 operaciones de siempre.
Los resultados deber�an almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

PRO.

Podr�as hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion? Hint => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments Hint => https://msdn.microsoft.com/es-es/library/he95z461
function sum(){
    var acc = 0;
    for (num in arguments){
    console.log(num)
    acc += arguments[num]   
    }
    return acc
}
sum(2,3,4) // acc=9
Despu�s de hacer todas las operaciones, el programa deber� preguntar al usuario si desea volver a realizar otra operaci�n, volviendo a almacenar m�s resultados y mostr�ndolos.
calculator(n1,n2)
//Output => sum, subs, mult, div...
prompt("New numbers? y/n")
    Case "y" => calculator(n1,n2)
                //Output => sum1, subs1, mult1, div1, sum2, subs2, mult2, div2...
    Case "n" => "Bye!"