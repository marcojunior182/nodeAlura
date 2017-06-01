/* require = função do JS dentro no note para importar tudo o que precisamos*/

var http = require('http');

var server = http.createServer(function(request, response){
	if(request.url == "/produtos"){
		response.end("<html><body><h1>Listando os produtos</h1></body></html>")
	}else{
		response.end("<html><body><h1>Bem vindo a home!</h1></body></html>")
	}

	
});
server.listen(3000);


console.log("Servidor rodando")