module.exports=(req,res)=>{
	console.log('this is body',req.body)
	const name=req.body.name;
	const password=req.body.password;

	res.status(201).send('loginConfirmed')
}