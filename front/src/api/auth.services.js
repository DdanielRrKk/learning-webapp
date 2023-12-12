import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';

const testData = {
	id: 1,
	name: 'John',
	email: 'john@do.com',
	age: 30,
};

async function register(email, password) {
	return axios.post(`${API_URL}/register`, {
		email,
		password,
	});
}

async function login(email, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === 'admin@admin.com' && password === 'admin123') {
				resolve(testData);
			} else {
				reject('No such user.');
			}
		}, 1000);
	});
	// return axios
	// 	.post(`${API_URL}/login`, {
	// 		email,
	// 		password,
	// 	})
	// 	.then(response => {
	// 		if (response.data.accessToken) {
	// 			localStorage.setItem('user', JSON.stringify(response.data));
	// 		}

	// 		return response.data;
	// 	});
}

async function logout() {
	window.localStorage.removeItem('user');
}

export {register, login, logout};
