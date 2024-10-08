import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useAssets } from 'expo-asset';
import { connect } from 'react-redux';

import { DISPATCHES, SCREENS } from '../constants';
import { Storage } from '../helpers';
import { getAllSongs } from '../store/config';
//import { Ads } from '../components';

const { width, height } = Dimensions.get('screen');

const Loading = ({ songs, dispatch, navigation: { replace } }: any) => {
	const [assets] = useAssets([require('@/src/assets/splash.png')]);

	const getStorage = () => {
		return new Promise<void>(async (resolve) => {
			const favourites = await Storage.get('favourites', true);
			const recents = await Storage.get('recents', true);
			const playlists = await Storage.get('playlists', true);

			dispatch({
				type: DISPATCHES.STORAGE,
				payload: {
					favourites,
					recents,
					playlists,
				},
			});

			const allSongs = await getAllSongs();
			songs = allSongs.length > 0 ? allSongs : songs;

			if (recents && recents.length > 0) {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						detail: songs[recents[0]],
						songs: allSongs,
					},
				});
			}

			//await Ads.interstitialAds();
			resolve();
		});
	};

	const init = async () => {
		await getStorage();
		replace(SCREENS.HOME);
	};

	useEffect(() => {
		init();
	}, []);

	return <Image style={styles.img} source={require('@/src/assets/splash.png')} resizeMode="cover" />;
};

const mapStateToProps = (state: any) => ({ songs: state?.player?.songs });
const mapDispatchToProps = (dispatch: any) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Loading);

const styles = StyleSheet.create({
	img: {
		width,
		height,
	},
});
