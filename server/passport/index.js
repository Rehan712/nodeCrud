// const passport=require('passport');
// const {Strategy}=require('passport-jwt');

// const users=[
// 	{
// 		name:'rehan',
// 		password:'rehan007'
// 	}
// ]

// module.exports=()=>{
// 	const strategy=new Strategy((jwt_payload,next)=>{
// 		const user=users.filter(item=>{
// 			return user.name === jwt_payload.name
// 		})[0]
// 		if(user){
// 			next(null,user)
// 		}else{
// 			next(null,false)
// 		}
// 	});

// 	passport.use(strategy);
// }

var passport=require('passport');
var {Strategy}=require('passport-jwt')

var users=[
	{
		name:'rehan',
		password:'rehan007'
	}
]

module.exports=()=>{
	var strategy=new Strategy(require('./jwtOptions'),(jwt_payload,next)=>{
		console.log('this is payload from passport strategy',jwt_payload)
		var user=users.filter(item=>{
			return item.name === jwt_payload.name
		})[0];
		if(user){
			next(null,user)
		}else{
			next(null,false)
		}
	})
	passport.use(strategy);
}