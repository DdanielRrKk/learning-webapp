export function getStorageData(keyName, defaultValue) {
	try {
		const data = window.localStorage.getItem(keyName);
		if (data) {
			return JSON.parse(data);
		} else {
			window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
			return defaultValue;
		}
	} catch (error) {
		return defaultValue;
	}
}
