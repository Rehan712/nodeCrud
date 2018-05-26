const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
	name:String,
	fatherName:String,
	age:String,
	address:String
})

module.exports=mongoose.model('Student',StudentSchema)