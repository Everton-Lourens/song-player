import React, { useEffect, useState } from 'react';
import { Alert, Animated, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAssets } from 'expo-asset';
import { Storage } from '@/src/helpers';
import * as Updates from 'expo-updates';

import { Footer, Header, Section, Drawer } from '../../widgets';
import { Icon } from '../../components';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { getUriPicture } from '@/src/store/config';

const Index = () => {
	const [assets] = useAssets([require('@/src/assets/icons/hamburger.png'), require('@/src/assets/icons/search.png')]);
	const [drawer, setDrawer] = useState(false);
	const [urlImg, setUrlImg] = useState('https://img.freepik.com/premium-photo/headphones-music-background-generative-ai_1160-3253.jpg');

	useEffect(() => {
		const intervalId = setInterval(() => {
			setUrlImg(getUriPicture || urlImg);
		}, 1000);
		// Cleanup
		return () => clearInterval(intervalId);
	}, []);

	(async () => {
		await loadingAllFoundSongs();
	})();
	async function loadingAllFoundSongs() {
		try {
			const initializedSong = await Storage.get('initialized', true);
			if (!initializedSong) {
				await Storage.store('initialized', 'true', false);
				Alert.alert('Carregando músicas...', 'O aplicativo precisa ser reiniciado.', [{ text: 'OK', onPress: async () => await Updates.reloadAsync() }]);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Drawer active={drawer} current="home" onItemPressed={() => setDrawer(false)}>
			<ImageBackground style={styles.backgroundcontainer} source={{ uri: urlImg }} blurRadius={20} resizeMode="cover">
			<StatusBar style="light" backgroundColor='black' />

				<SafeAreaView style={styles.container}>
					<Header
						options={{
							left: {
								// @ts-ignore
								children: drawer ? <Icon name="x" color="red" /> : <Image source={require('@/src/assets/icons/hamburger.png')} resizeMode="contain" />,
								onPress: () => setDrawer(!drawer),
							},
						}}
					/>
					<View style={styles.sections}>
						<Section.Explore />
						<Section.Recent style={{ marginTop: 30 }} />
						<Section.Playlist style={{ marginTop: 30 }} />

						<ScrollView>
							<View style={{
								flex: 1,
								marginTop: Dimensions.get('screen').height * 0.025,
							}}>
							</View>
						</ScrollView>

					</View>
					<Footer />
				</SafeAreaView>

			</ImageBackground>
		</Drawer>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundcontainer: {
		flex: 1,
		backgroundColor: 'black',
		paddingTop: Constants.statusBarHeight,
	},
	sections: {
		flex: 1,
		marginTop: Dimensions.get('screen').height * 0.025,
	},
});
