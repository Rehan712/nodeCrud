const express=require('express');
const app=express();


require('./middleware')(app);

require('./passport')();

require('./routes')(app);



require('mongoose').
	connect('mongodb://rehan007:rehan6300487@ds233320.mlab.com:33320/school')
	.then(()=>console.log('connection Successfull'))


app.listen(3000,()=>{
	console.log('node is listening on port 3000');
})