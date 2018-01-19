Skylab Airlines! :airplane::small_airplane:

(Los datos de los vuelos est�n al final del enunciado, pod�is usarlos en vuestro c�digo)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondr� de 10 vuelos para el dia de hoy, para empezar, estos vuelos estar�n declarados de manera global, cuando se llame a la funci�n:

Se preguntar� por el nombre de usuario y dar� la bienvenida.
El usuario visualizar� todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX� y no realiza ninguna escala.
A continuaci�n, el usuario ver� el coste medio de los vuelos.
Tambi�n podr� ver cuantos vuelos efect�an escalas.
Y, sabiendo que los ultimos 5 vuelos (los �ltimos 5 ID's) son los �ltimos del d�a, muestra al usuario sus destinos.
PRO!:

Despu�s de ver toda la informaci�n el programa pedir� al usuario si es ADMIN/USER, dependiendo de la elecci�n, el programa se comportar� de la siguiente manera:

Si eres ADMIN, la funci�n deber�a permitir:

Poder crear, m�s vuelos, pidiendo la informaci�n por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno m�s, saltar� un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la funci�n deber�a permitir:

Buscar por precio ( m�s alto, m�s bajo o igual), el usuario deber�a mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responder�: "Gracias por su compra, vuelva pronto."
_Resources: http://stackoverflow.com/questions/1290131/javascript-how-to-create-an-array-of-object-literals-in-a-loop

http://stackoverflow.com/questions/15742442/declaring-array-of-objects

// This is a example of array of objects... each position of array contains one object...
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
console.log(flights[0].to) //output: New York