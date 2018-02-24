const net = require("net")
const client = new net.Socket();
client.connect(3000, '192.168.0.16', function() {
	console.log('Connected niggaaaaa');
	client.write('');
});

client.on("data", data => console.log(data.toString()))//escuchador
//TCP es un protocolo de transferencia de datos entre cliente o navegador al servidor
//Nos conectamos a un puerto de entrada y el servidor nos da un puerto de salida
// Ejemplo UPS, puerta a puerta de direccion a direccion