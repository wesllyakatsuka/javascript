

const express = require ('express');

let app = express();

app.get('/', (req, res)=>{

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Olá</h1>');

});

app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Contetnt-Type', 'application/json');
	res.json({
		users: [{
			name: 'Weslly',
			email: 'wesllyakasuka@hotmail.com',
			id: 1
		}]
	});

});


app.listen(3000, '127.0.0.1', ()=>{

console.log('servidor rodando!');

});


