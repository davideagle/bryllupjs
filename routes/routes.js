var register = require('config/register');
var invites = require('config/invite')

module.exports = function(router) {
	router.get('/', function(req, res) {
		res.end("Node-bryllup"); 
	});

	
	router.post('/invites/register', function(req,res){
		var email 		= req.body.email;
       	var invitecode 	= req.body.invitecode;
       	
       	console.log(new Date());
		console.log("GOT POST")
       	console.log(req.body);
       	
		invites.findOne({'invite': invitecode.toUpperCase()}, function(err, response){
			if(err || response == null){
				console.log(new Date());
				console.log("InviteCode Not Found");
				res.status(401).send("InviteCode Not Found");
			}
			else{
				console.log("hello");
				response.email = email;				
				
				response.save(function(err,b){
					if(err){
						console.log(new Date());
						console.log(err);
						res.status(503).send(err);
					}
					else{
						console.log(new Date());
						console.log(b);
						res.json(response);
					}
				});
				
			}
		});		
	});
	
	router.post('/invites/update', function(req,res){
		var email 		= req.body.email;
       	var invitecode 	= req.body.invitecode;
       	var persons		= req.body.persons;

		invites.findOne({'invite': invitecode}, function(err, response){
			if(err || response == null){
				console.log(new Date());
				console.log("InviteCode Not Found");
				res.status(401).send("InviteCode Not Found");
			}
			else{
				
				response.email = email;
				response.invitecode = invitecode;
				response.persons = persons
				
				response.save(function(err,b){
					if(err){
						console.log(new Date());
						console.log(err);
						res.status(503).send(err);
					}
					else{
						console.log(new Date());
						console.log(b);
						res.status(201).send(b);
					}
				});
				
			}
		});		
	});
	
	router.get('/invites/list', function(req,res){
		invites.find('invite', function(err, response){
			if(err){
				console.log(new Date());
				console.log("Error: " + err);
				res.status(503).send(err);
			} else {
				console.log(new Date());
				console.log(response);
				res.json(response);
			}
		});
	});
	
};
