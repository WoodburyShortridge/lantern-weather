/**
 * State sync w/ local storage for return visitor ux
 *
 * @param key // storage key
 * @param defaultValue
 *
 * @return [value, setValue]
 */

import {useState, useEffect, Dispatch, SetStateAction} from 'react'

const getLocalStorage = <T>(key: string): T | undefined => {
	const store = localStorage.getItem(key)
	if (!store) return
	try {
		return JSON.parse(store)
	} catch (err) {
		console.log(err)
	}
}

const useStorageState = <T>(key: string, defaultValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(
		getLocalStorage<T>(key) || defaultValue
	);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export { useStorageState }