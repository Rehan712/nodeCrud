module.exports=(req,res)=>{
	console.log('this is body',req.body)
	const name=req.body.name;
	const fatherName=req.body.fatherName;
	const age=req.body.age;
	const address=req.body.address

	res.status(201).send('loginConfirmed')
}