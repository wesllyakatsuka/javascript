
let express = require('express')
let routes = express.Router();

routes.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Contetnt-Type', 'application/json');
	res.json({
		users: [{
			name: 'Weslly',
			email: 'wesllyakasuka@hotmail.com',
			id: 13
		}]
	});

});

routes.get('/admin', (req, res) => {
    res.statusCode = 200;
	res.setHeader('Contetnt-Type', 'application/json');
	res.json({
		users: []
	});

})

module.exports = routes;