module.exports = (app) => {

	app.get('/users', (req, res) => {
		res.statusCode = 200;
		res.setHeader('Contetnt-Type', 'application/json');
		res.json({
			users: [{
				name: 'Weslly',
				email: 'wesllyakasuka@hotmail.com',
				id: 7
			}]
		});
	
	});
	
	app.post('/users', (req, res) => {

		res.json(req.body);
		
		
	
	});
	
};

