import React, { useState } from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAssets } from 'expo-asset';

import { Footer, Header, Section, Drawer } from '../../widgets';
import { Icon } from '../../components';

import { getAllSongs } from '@/store/playlist';

const Index = () => {
	const [assets] = useAssets([require('@/assets/icons/hamburger.png'), require('@/assets/icons/search.png')]);
	const [drawer, setDrawer] = useState(false);
	const [showMusicList, setShowMusicList] = useState(false);
	const [allSongs, setAllSongs] = useState(null);


	const handlePress = async () => {
		const allSongsTest: any = await getAllSongs();
		setAllSongs(allSongsTest);
		setShowMusicList(true);
	};

	return (
		<Drawer active={drawer} current="home" onItemPressed={() => setDrawer(false)}>
			<SafeAreaView style={styles.container}>
				<Header
					options={{
						left: {
							// @ts-ignore
							children: drawer ? <Icon name="x" color="red" /> : <Image source={require('@/assets/icons/hamburger.png')} resizeMode="contain" />,
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

							<>
								<Button title="Carregar Lista de Músicas" onPress={handlePress} />

								{/* show if true */}
								{showMusicList && allSongs !== null && (
									<Section.MusicList
										audios={allSongs}
										indicator={false}
									/>
								)}
							</>

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
