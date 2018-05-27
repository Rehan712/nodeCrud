
const jwt=require('jsonwebtoken');
const jwtOptions=require('../passport/jwtOptions')

const users=[
	{
		name:'rehan',
		password:'rehan007'
	}
]

function varifyUser(name,password) {
		const userArray=users.filter(item=>{
			if(name===item.name && password===item.password){
				return true
			}else{
				return false;
			}
		})

		return userArray
	}

module.exports=(req,res)=>{
	console.log('this is body',req.body)

	const name=req.body.name;
	const password=req.body.password;

	const userArray=varifyUser(name,password);
	if(userArray.length){
		const user=userArray[0];
		if (user) {
			const payload={name:user.name};
			const token=jwt.sign(payload,jwtOptions.secretOrKey,{
				expiresIn:60 * 60
			})
			res.status(201).send({name:user.name,token})
		}else{
			res.sendStatus(401);
		}
	}



	// const user=new require('../models/User')({
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
}