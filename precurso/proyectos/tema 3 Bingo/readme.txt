BINGO GAME! :game_die::slot_machine:

Realiza un programa que simule un Bingo. Cuando se ejecute, pedir� el nombre del jugador y deber� guardarse. Durante el primer turno se mostrar� un cart�n con 15 n�meros (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deber� confirmar mediante confirm() visualiz�ndose otro n�mero, si coincide con alguno de los existentes en el cart�n, cambiar� por una "X" o un 0. El cart�n se mostrar�, al final de cada turno, con los cambios efectuados, indic�ndole al usuario qu� n�mero se ha encontrado. El programa deber� preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se contin�e, seguir� el mismo patr�n que hasta el momento.

Por supuesto, cuando todos los n�meros de una misma linea est�n en "X", mostrar� un mensaje "LINEA!", pero la ejecuci�n seguir�, el juego solo acabar� cuando todos los n�meros est�n a "X".

Cuando el juego concluya, deber� decirle al usuario en cuantos turnos se ha completado el cart�n. Por �ltimo, deber� preguntar si desea volver a jugar.

Secuence:
>>> bingo()
<<< prompt('Tell me, who are you?')
>>> Hello *name*, ready to play? This is your card:
...
<<< confirm('Next turn, you confirm?') // true / false
>>> We find 1 match! This is the status of your card now:
...
...
>>> Congrats! You finish the Bingo game in X turns! Do you want to play again?
<<< confirm('Play again?') // true / false
Pro ????

Cuando se muestre la carta, se preguntar� al usuario si realmente quiere ese cart�n o generar otro, si realmente quiere ese cart�n, deber� responder "yes" para proceder
Establece un sistema de puntos, en cuantos m�s turnos se complete el cart�n, menos puntos (el sistema de puntos int�gralo como quieras), por el contrario, a menos turnos, m�s puntos.
Antes de empezar el juego, muestra el sistema de puntos al usuario.
Ranking de usuarios (ordenado por puntos).
Resources_ http://dlevin.pcprofessor.net/javaScript/bingo/bingo.html https://www.w3schools.com/jsref/jsref_random.asp

Hint_

var bingoCard = [
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    //next line
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false}
]