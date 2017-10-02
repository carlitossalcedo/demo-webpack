let login = (username, password) => {
	if (username !== 'admin' || password !== 'radical') {
		console.log('incorrect login');
	} else {
		console.log('correct login');
	}
};

// login('admin', 'uniendo');
export { login };
