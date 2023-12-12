import React from 'react';
import {getStorageData} from '../utils/storage';

function useLocalstorage(keyName, defaultValue) {
	const [storedValue, setStoredValue] = React.useState(getStorageData(keyName, defaultValue));

	function setValue(newValue) {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (error) {}
		setStoredValue(newValue);
	}

	return [storedValue, setValue];
}

export {useLocalstorage};
