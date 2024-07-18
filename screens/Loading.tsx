import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useAssets } from 'expo-asset';
import { connect } from 'react-redux';

import { DISPATCHES, SCREENS } from '../constants';
import { Storage } from '../helpers';
import musicData from '@/store/states/player';
//import { Ads } from '../components';

const { width, height } = Dimensions.get('screen');

const Loading = ({ songs, dispatch, navigation: { replace } }: any) => {
	const [assets] = useAssets([require('@/assets/splash.png')]);

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

			if (recents && recents.length > 0) {
				dispatch({
					type: DISPATCHES.SET_CURRENT_SONG,
					payload: {
						detail: songs[recents[0]],
					},
				});
			}

			//await Ads.interstitialAds();
			resolve();
		});
	};

	const init = async () => {
		//console.log('@@@@@@@@@@@@@@@');
		//console.log(musicData);
		//console.log('@@@@@@@@@@@@@@@');
		await getStorage();
		replace(SCREENS.HOME);
	};

	useEffect(() => {
		init();
	}, []);

	return <Image style={styles.img} source={require('@/assets/splash.png')} resizeMode="cover" />;
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
