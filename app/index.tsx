import React from 'react';
import { Provider as RRProvider } from 'react-redux';

import store from '@/store';
import Screens from '@/screens';

export default function App() {
	return (
		<RRProvider store={store}>
			<Screens />
		</RRProvider>
	);
}
