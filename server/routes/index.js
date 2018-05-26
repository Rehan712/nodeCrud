module.exports=app=>{

	// api routes
	app.get('/studentData',require('passport').authenticate('jwt',{session:false}),require('../handlers/getDataHandler'));
	app.post('/loginStudent',require('../handlers/loginStudentHandler'));
	app.post('/postStudent',require('../handlers/postStudentHandler'));

	// ##############______________________################

	// fallback routes ==>> means that routing of the routes

	app.get('/login',(req,res)=>{
		res.sendFile(require('path').join(__dirname,'../../dist/index.html'))
	})
	app.get('/signIn',(req,res)=>{
		res.sendFile(require('path').join(__dirname,'../../dist/index.html'))
	})
	app.get('/home',(req,res)=>{
		res.sendFile(require('path').join(__dirname,'../../dist/index.html'))
	})
	app.get('/data',(req,res)=>{
		res.sendFile(require('path').join(__dirname,'../../dist/index.html'))
	})
}