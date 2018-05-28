const jwt = require('jsonwebtoken');
const jwtOptions = require('../passport/jwtOptions');

// var users = [
// 	{
// 		name: 'rehan',
// 		password: 'rehan007'
// 	}
// ];

function varifyUser(name, password, users) {
	const userArray = users.filter(item => {
		if (name === item.name && password === item.password) {
			return true;
		} else {
			return false;
		}
	});

	return userArray;
}

module.exports = (req, res) => {
	console.log('this is body', req.body);

	var name = req.body.name;
	var password = req.body.password;

	require('../models/User').find({}, 'name password', (err, users) => {
		var userArray = varifyUser(name, password, users);
		if (userArray.length) {
			var user = userArray[0];
			if (user) {
				var payload = { name: user.name };
				var token = jwt.sign(payload, jwtOptions.secretOrKey, {
					expiresIn: 60 * 60
				});
				res.status(201).send({ name: user.name, token });
			} else {
				res.sendStatus(401);
			}
		}
	});
};

// var user=new require('../models/User')({
// 	name,
// 	password
// })

// user.save((err,user)=>{
// 	if(err){
// 		console.log('this is error from login',err)
// 	}else{
// 		res.status(201).send(user)
// 	}
// })
