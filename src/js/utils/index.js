import jwt_decode from 'jwt-decode';

export function isTokenValid() {
	const token=localStorage.getItem('token')
	
	if(token){
		const decoded=jwt_decode(token);
		return decoded.exp > Date.now()/1000
	}else{
		return false;
	}
	
}