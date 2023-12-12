function isEmptyString(string) {
	return string.trim().length === 0;
}

function doArrayHaveEmptyStrings(array) {
	return array.filter(item => isEmptyString(item)).length > 0;
}

function isPasswordDifferent(password, confirmPassword) {
	return password !== confirmPassword;
}

export {doArrayHaveEmptyStrings, isPasswordDifferent};
