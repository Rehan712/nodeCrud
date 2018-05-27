import axios from 'axios';

export async function getDataApi() {
	const res = await axios.get('/studentData');
	return res.data;
}

export async function submitDataApi(data) {
	const res = await axios.post('/postStudent', data);
	return res.data;
}

export async function loginDataApi(data) {
	const res = await axios.post('/loginStudent', data);
	console.log('this is from submitDataApi', res);
	return res.data;
}
