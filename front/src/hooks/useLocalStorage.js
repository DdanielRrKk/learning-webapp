import {useState} from 'react';
import {getStorageData} from '../utils/storage';

function useLocalStorage(key, defValue) {
	const [value, setValue] = useState(getStorageData(key, defValue));

	function setItem(newValue) {
		try {
			window.localStorage.setItem(key, JSON.stringify(newValue));
		} catch (error) {}
		setValue(newValue);
	}

	return [value, setItem];
}

export {useLocalStorage};
