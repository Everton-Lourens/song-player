import millisToMin from './millisToMin';
import * as Storage from './storage';


/*
import * as MediaLibrary from 'expo-media-library';

 ERROR  TypeError: Cannot read property 'inst' of null
  ERROR  TypeError: Cannot read property 'inst' of null
   ERROR  TypeError: Cannot read property 'inst' of null
    ERROR  TypeError: Cannot read property 'inst' of null
     ERROR  TypeError: Cannot read property 'inst' of null
     
(async () => {
	/*
	const songs = await getAllSongs();
	console.log('@@@@@@@@@@@@@@@@@@@@@');
	console.log(songs);
	console.log('@@@@@@@@@@@@@@@@@@@@@');
	*/

	const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
	if (permissionResponse?.status !== 'granted') {
		requestPermission();
	}
})();


*/

export { millisToMin, Storage };
