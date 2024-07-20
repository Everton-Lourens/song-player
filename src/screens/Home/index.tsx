import React, { useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAssets } from 'expo-asset';
import { Storage } from '@/src/helpers';
import * as Updates from 'expo-updates';

import { Footer, Header, Section, Drawer } from '../../widgets';
import { Icon } from '../../components';

const Index = () => {
	const [assets] = useAssets([require('@/src/assets/icons/hamburger.png'), require('@/src/assets/icons/search.png')]);
	const [drawer, setDrawer] = useState(false);

	(async () => {
		await loadingAllFoundSongs();
	})();
	async function loadingAllFoundSongs() {
		try {
			const initializedSong = await Storage.get('initialized', true);
			if (!initializedSong) {
				await Storage.store('initialized', 'true', false);
				Alert.alert('Carregando músicas...', 'Isso não vai demorar.', [{ text: 'OK', onPress: async () => await Updates.reloadAsync() }]);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Drawer active={drawer} current="home" onItemPressed={() => setDrawer(false)}>
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
		</Drawer>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sections: {
		flex: 1,
		marginTop: Dimensions.get('screen').height * 0.025,
	},
});
