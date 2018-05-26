// const {ExtractJwt}=require('passport-jwt');

// const jwtOptions={}

// jwtOptions.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey='mySecret';

// module.exports=jwtOptions

const {ExtractJwt}=require('passport-jwt');

const jwtOptions={};

jwtOptions.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey='mySecret';

module.exports=jwtOptions