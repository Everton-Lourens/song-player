import React, { useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAssets } from 'expo-asset';
import { connect } from 'react-redux';
import * as MediaLibrary from 'expo-media-library';
import { Header, Section, Drawer } from '../../widgets';
import { Icon } from '../../components';
import { getAllSongs } from '@/src/store/playlist';

const Index = ({ songs }: any) => {
	const [assets] = useAssets([require('@/src/assets/icons/hamburger.png'), require('@/src/assets/icons/search.png')]);
	const [drawer, setDrawer] = useState(false);
	const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
	const [allSongs, setAllSongs] = useState(null);



	return (
		<Drawer active={drawer} current="songs" onItemPressed={() => setDrawer(false)}>
			<SafeAreaView style={styles.container}>
				<Header
					options={{
						left: {
							// @ts-ignore
							children: drawer ? <Icon name="x" color="red" /> : <Image source={require('@/src/assets/icons/hamburger.png')} resizeMode="contain" />,
							onPress: () => setDrawer(!drawer),
						},
						middle: {
							show: true,
							text: 'All Songs',
						},
						right: {
							show: false,
						},
					}}
				/>
				<View style={styles.sections}>
					{<Section.MusicList audios={songs} indicator={false} />}
				</View>
			</SafeAreaView>
		</Drawer>
	);
};

const mapStateToProps = (state: any) => ({ songs: state?.player?.songs });
export default connect(mapStateToProps, null)(Index);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sections: {
		flex: 1,
		marginTop: Dimensions.get('screen').height * 0.025,
	},
});
