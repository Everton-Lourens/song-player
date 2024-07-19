import React, { useEffect } from 'react';
import { Provider as RRProvider } from 'react-redux';
import { usePermissions } from 'expo-media-library';
import store from '@/src/store';
import Screens from '@/src/screens';

export default function App() {
	const [permissionResponse, requestPermission] = usePermissions();

	useEffect(() => {
		if (permissionResponse?.status !== 'granted') {
			requestPermission();
		}
	}, [permissionResponse]);

	return permissionResponse?.status === 'granted' ? (
		<RRProvider store={store}>
			<Screens />
		</RRProvider>
	) : null;
}

