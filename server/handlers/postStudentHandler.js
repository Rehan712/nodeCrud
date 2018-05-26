const Student=require('../models/Student');

module.exports=(req,res)=>{
	console.log('this is body',req.body)
	const name=req.body.name;
	const fatherName=req.body.fatherName;
	const age=req.body.age;
	const address=req.body.address

	const student=new Student({
		name,fatherName,age,address
	})

	student.save((err,student)=>{
		if(err){
			console.log('this is error from database',err)
		}else{
			res.status(201).send(student)
		}
	})

	
}