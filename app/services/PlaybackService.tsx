// src/services/PlaybackService.ts
//import TrackPlayer from 'react-native-track-player';
import {NativeModules} from 'react-native';


/*
import { NativeModules } from 'react-native';
console.log(NativeModules)// Saída: {}
const { TrackPlayerModule } = NativeModules;
export default TrackPlayerModule;
*/
//export default TrackPlayerModule;

export const PlaybackService = async function () {
    //TrackPlayer.play()
    setTimeout(() => {
        console.log('@@@@@@@@@@@@@@@@@@@')// Saída: {}
        console.log(NativeModules)// Saída: {}
    }, 5000);
    // ...

};