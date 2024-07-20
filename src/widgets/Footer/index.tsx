import React, { useEffect, useRef, useState, memo } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { connect } from 'react-redux';
import Slider from '@react-native-community/slider';

import Icon from '../../components/Icon';
import { DISPATCHES, SCREENS } from '@/src/constants';
import { Audio } from '../../hooks';
import { Storage } from '../../helpers';
import { getAllSongs } from '@/src/store/playlist';
import songDetail from '@/src/store/states/player';

const { width } = Dimensions.get('screen');

const Index = ({ song, songs, dispatch }: any) => {
	const { navigate } = useNavigation();
	const stopBtnAnim = useRef(new Animated.Value(song?.soundObj?.isPlaying ? 1 : 0.3)).current;
	const [newList, setNewList] = useState(null);
	const [shuffle, setShuffle] = useState(false);
	const [actions, setActions] = useState({
		prev: false,
		play: false,
		stop: false,
		next: false,
	});

	const soundDetailRecovery = async () => {
		if (!song?.detail) {
			song.detail = await Storage.get('detail', true);
		}
	}

	const newListOfSongs_OLD = async () => {
		try {
			if (!newList) {
				const allSongs: any = await getAllSongs();
				songs = allSongs;
				setNewList(allSongs);
				setShuffle(await Storage.get('shuffle', false) == 'true' ? true : false);
			}
			if (shuffle) {
				// @ts-ignore
				const listLength = newList.length;
				// Cria uma lista de IDs únicos
				const uniqueIDs = Array.from({ length: listLength }, (_, index) => index);
				// Embaralha a lista de IDs únicos
				uniqueIDs.sort(() => Math.random() - 0.5);
				// Atribui os IDs embaralhados aos itens da lista
				// @ts-ignore
				return songs = [...newList].map((song: any, index) => ({ ...song, id: uniqueIDs[index] })); // shueffled list
			}
			return songs = newList ? newList : songs; // original list
		} catch (error: any) {
			console.error(error);
		}
	}

	const newListOfSongs = async () => {
		/*
		try {
									setShuffle(await Storage.get('shuffle', false) == 'true' ? true : false); 
			if (shuffle) {
				// @ts-ignore
				const listLength = songs.length;
				const uniqueIDs = Array.from({ length: listLength }, (_, index) => index);
				uniqueIDs.sort(() => Math.random() - 0.5);
				// @ts-ignore
				return songs = [...songs].map((song: any, index) => ({ ...song, id: uniqueIDs[index] })); // shueffled list
			}
			return songs = songs ? songs : songs; // original list
		} catch (error: any) {
			console.error(error);
		}
			*/
	}

	const _e = (arg = {}) => {
		setActions({
			...actions,
			...arg,
		});
	};

	const addToRecentlyPlayed = async (index: any) => {
		const recents = await Storage.get('recents', true);
		if (recents === null) {
			await Storage.store('recents', [index], true);
		} else {
			const filtered = recents.filter((i: any) => i !== index).filter((i: any) => recents.indexOf(i) < 9);
			filtered.unshift(index);
			await Storage.store('recents', filtered, true);
		}

		dispatch({
			type: DISPATCHES.STORAGE,
			payload: {
				recents: await Storage.get('recents', true),
			},
		});
	};

	const onPlaybackStatusUpdate: any = (playbackStatus: any) => {
		dispatch({
			type: DISPATCHES.SET_CURRENT_SONG,
			payload: {
				playbackStatus,
			},
		});

		if (playbackStatus?.didJustFinish) {
			handleNext();
		}
	};

	const configAndPlay = (shouldPlay = false) => {
		// ERROR INIT: Audio Error: "playbackObj" was set to an invalid value.
		if (!song?.soundObj?.isLoaded) {
			return Audio.configAndPlay(
				song?.detail?.uri,
				shouldPlay
			)((playback, soundObj) => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						playback,
						soundObj,
					},
				});

				addToRecentlyPlayed(songs.findIndex((i: any) => i.id === song?.detail?.id));
			})(onPlaybackStatusUpdate);
		}
	};

	const handlePlayAndPause = async () => {
		_e({ play: true });

		if (!song?.soundObj?.isLoaded) {
			configAndPlay(true);
			_e({ play: true });
		}

		if (song?.soundObj?.isLoaded && song?.soundObj?.isPlaying) {
			return Audio.pause(song?.playback)((soundObj) => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						soundObj,
					},
				});

				_e({ play: false });
			});
		}

		if (song?.soundObj?.isLoaded && !song?.soundObj?.isPlaying) {
			return Audio.resume(song?.playback)((soundObj: any) => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						soundObj,
					},
				});

				_e({ play: false });
			});
		}
	};

	const handleStop = async (after = () => { }) => {
		_e({ stop: true });
		await newListOfSongs();
		if (song?.soundObj?.isLoaded) {
			return Audio.stop(song?.playback)(() => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						soundObj: {},
					},
				});

				after();
				_e({ stop: false });
			});
		}

		after();
		_e({ stop: false });
	};

	const handlePrev = async () => {
		_e({ prev: true });
		await newListOfSongs();
		const currentIndex = songs.findIndex((i: any) => i.id === song?.detail?.id);
		const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
		const prevSong = songs[prevIndex];

		return handleStop(() => {
			Audio.play(
				song?.playback,
				prevSong?.uri
			)((soundObj) => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						soundObj,
						detail: prevSong,
					},
				});

				addToRecentlyPlayed(prevIndex);
				_e({ prev: false });
			})(onPlaybackStatusUpdate);
		});
	};

	async function handleNext() {
		_e({ next: true });
		const currentIndex = songs.findIndex((i: any) => i.id === song?.detail?.id);
		const randomIndex = Math.floor(Math.random() * songs.length);
		const nextIndex = shuffle ? randomIndex : (currentIndex === songs.length - 1 ? 0 : currentIndex + 1);
		const nextSong = songs[nextIndex];

		return handleStop(() => {
			Audio.play(
				song?.playback,
				nextSong?.uri
			)((soundObj) => {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						soundObj,
						detail: nextSong,
					},
				});
				(async () => {
					await Storage.store('detail', (song?.detail || songDetail?.currentSong?.detail), true);
				})();

				addToRecentlyPlayed(nextIndex);
				_e({ next: false });
			})(onPlaybackStatusUpdate);
		});
	}

	useEffect(() => {
		if (song?.soundObj?.isPlaying) {
			Animated.timing(stopBtnAnim, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(stopBtnAnim, {
				toValue: 0.3,
				duration: 1000,
				useNativeDriver: true,
			}).start();
		}
	}, [song]);

	useEffect(() => {
		(async () => {
			setShuffle(await Storage.get('shuffle', false) == 'true' ? true : false);
			await soundDetailRecovery();
			await newListOfSongs();
			await Audio.init();
			configAndPlay();
		})();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.tracker}>
				<View
					style={{
						...StyleSheet.absoluteFill as any,
						zIndex: 99,
					}}
				/>
				<Slider
					minimumValue={0}
					maximumValue={song?.detail?.durationMillis}
					minimumTrackTintColor="#C07037"
					thumbTintColor="transparent"
					maximumTrackTintColor="transparent"
					value={song?.playbackStatus?.positionMillis || 0}
				/>
			</View>
			<View style={styles.left}>
				{/*// @ts-ignore*/}
				<TouchableWithoutFeedback onPress={() => navigate(SCREENS.PLAYING)}>
					<View style={styles.coverArtContainer}>
						<Image
							style={{
								width: 130,
								height: 130,
								position: 'absolute',
								right: -6,
								opacity: 0.5,
								alignSelf: 'center',
							}}
							source={{ uri: song?.detail?.img }}
							resizeMode="cover"
							borderRadius={150}
							blurRadius={100}
						/>
						<Image style={styles.coverArt} source={{ uri: song?.detail?.img }} resizeMode="cover" borderRadius={150} />
					</View>
				</TouchableWithoutFeedback>
			</View>
			<View style={styles.content}>
				<Text style={styles.songTitle} numberOfLines={1}>
					{song?.detail?.title}
				</Text>
				<Text style={styles.songArtist} numberOfLines={1}>
					{song?.detail?.author}
				</Text>
			</View>
			<View style={styles.actions}>
				<TouchableOpacity style={styles.btn} onPress={handlePrev} disabled={actions?.prev}>
					{/*// @ts-ignore*/}
					<Icon name="skip-back" color="#C4C4C4" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={handlePlayAndPause} disabled={actions?.play}>
					{/*// @ts-ignore*/}
					<Icon name={song?.soundObj?.isPlaying ? `pause` : `play`} color={song?.soundObj?.isPlaying ? `#C07037` : `#C4C4C4`} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={() => (song?.soundObj?.isPlaying ? handleStop(() => { }) : () => { })} disabled={actions?.stop}>
					<Animated.View style={{ opacity: stopBtnAnim }}>
						{/*// @ts-ignore*/}
						<Icon family="Ionicons" name="stop-outline" color="#C4C4C4" />
					</Animated.View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={handleNext} disabled={actions?.next}>
					{/*// @ts-ignore*/}
					<Icon name="skip-forward" color="#C4C4C4" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const mapStateToProps = (state: any) => ({ song: state?.player?.currentSong, songs: state?.player?.songs });
const mapDispatchToProps = (dispatch: any) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(memo(Index));

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width,
		height: 80,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	tracker: {
		position: 'absolute',
		width,
		top: -10,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0, 0, 0, .08)',
	},
	left: {
		flexBasis: 110,
	},
	coverArtContainer: {
		position: 'absolute',
		width: 135,
		height: 135,
		left: -20,
		bottom: -20,
	},
	coverArt: {
		width: 135,
		height: 135,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 20,
	},
	songTitle: {
		color: '#555555',
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 1.5,
	},
	songArtist: {
		color: '#555555',
	},
	actions: {
		flexBasis: 150,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 5,
	},
	btn: {
		padding: 5,
	},
});
