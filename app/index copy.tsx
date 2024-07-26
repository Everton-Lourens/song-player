/*
// App.js
import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
    useEffect(() => {
        setupPlayer();
        return () => {
            TrackPlayer.destroy();
        };
    }, []);

    const setupPlayer = async () => {
        await TrackPlayer.setupPlayer();
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            ],
        });

        await TrackPlayer.add({
            id: 'trackId',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'SoundHelix Song',
            artist: 'SoundHelix',
            artwork: 'https://res.cloudinary.com/jsxclan/image/upload/v1623987985/GitHub/Projects/Musicont/mock/images/therefore-i-am_t9xxfs.jpg',
        });
			

        TrackPlayer.addEventListener('playback-track-changed', async (data: any) => {
            const track = await TrackPlayer.getTrack(data.nextTrack);
            console.log('Track changed to: ', track);
        });

        TrackPlayer.play();
    };

    const playPause = async () => {
        const state = await TrackPlayer.getState();
        if (state === TrackPlayer.STATE_PLAYING) {
            TrackPlayer.pause();
        } else {
            TrackPlayer.play();
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Play/Pause" onPress={playPause} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

*/