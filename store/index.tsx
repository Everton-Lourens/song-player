
/*
import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers({
	app: reducers.app,
	player: reducers.player,
	storage: reducers.storage,
});

const store = createStore(reducer);

export default store;
*/


import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';
import * as MediaLibrary from 'expo-media-library';
import { Platform, PlatformOSType } from 'react-native';

const OS: PlatformOSType = Platform.OS;

(async () => {
	try {
		await getPermission();
	} catch (error: any) {
		console.log(`[Error][getPermission]: ${error?.message}`);
	}
})();

async function getPermission() {
	if (OS === 'android') {
		const permissionResponse = await MediaLibrary.getPermissionsAsync();
		if (permissionResponse?.status !== 'granted') {
			await MediaLibrary.requestPermissionsAsync();
		}
	} else return null;
}


const reducer = combineReducers({
	app: reducers.app,
	player: reducers.player,
	storage: reducers.storage,
});

const store = createStore(reducer);

export default store;
