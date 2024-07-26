/*
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import MusicControl from 'react-native-music-control';

export default function MusicControlApp() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [track, setTrack] = useState({
		title: 'Billie Jean',
		artist: 'Michael Jackson',
		album: 'Thriller',
		genre: 'Post-disco, Rhythm and Blues, Funk, Dance-pop',
		duration: 294,
		artwork: 'https://i.imgur.com/e1cpwdo.png',
	});

	useEffect(() => {
		// Verifica se a música está tocando
		setIsPlaying(false)

		// Obtém os detalhes da música
		//MusicControl.getNowPlaying().then(n => setTrack(n));

		// Habilita os controles
		MusicControl.enableControl('play', true);
		MusicControl.enableControl('pause', true);
		MusicControl.enableControl('nextTrack', true);
		MusicControl.enableControl('previousTrack', true);
		MusicControl.enableControl('changePlaybackPosition', true);
		MusicControl.enableControl('skipForward', true, { interval: 30 });
		MusicControl.enableControl('skipBackward', true, { interval: 15 });

		// Habilita o modo de fundo
		MusicControl.enableBackgroundMode(true);
	}, []);

	const togglePlay = () => {
		console.log('play / pause');
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={togglePlay}>
				<Text>{isPlaying ? 'Pause' : 'Play'}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={togglePlay}>
				<Text>Saltar para a próxima música</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={togglePlay}>
				<Text>Saltar para a música anterior</Text>
			</TouchableOpacity>
			<Text>Titulo: {track.title}</Text>
			<Text>Artista: {track.artist}</Text>
			<Text>Dura o: aaaaaaaaaa</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		margin: 10,
	}
});


*/