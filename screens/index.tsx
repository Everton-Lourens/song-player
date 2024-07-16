/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Search, Playing, Home, Songs, Favourite, Recent, Playlists, Playlist } from './screens';
import { SCREENS } from '../constants';

const Stack = createStackNavigator();

const StackNavigation = () => (
	<Stack.Navigator initialRouteName={SCREENS.LOADING}>
		<Stack.Screen name={SCREENS.LOADING} component={Loading} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.SEARCH} component={Search} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.PLAYING} component={Playing} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.HOME} component={Home} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.SONGS} component={Songs} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.FAVOURITE} component={Favourite} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.RECENT} component={Recent} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.PLAYLISTS} component={Playlists} options={{ headerShown: false }} />
		<Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} options={{ headerShown: false }} />
	</Stack.Navigator>
);

const Index = () => (
	<NavigationContainer>
		<StackNavigation />
	</NavigationContainer>
);

export default Index;
*/





/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Search, Playing, Home, Songs, Favourite, Recent, Playlists, Playlist } from './screens';
import { SCREENS } from '../constants';

const Stack = createStackNavigator();
const StackNavigation = () => (
	// @ts-ignore
	<Stack.Navigator headerMode="none" initialRouteName={SCREENS.LOADING}>
		<Stack.Screen name={SCREENS.LOADING} component={Loading} />
		<Stack.Screen name={SCREENS.SEARCH} component={Search} />
		<Stack.Screen name={SCREENS.PLAYING} component={Playing} />
		<Stack.Screen name={SCREENS.HOME} component={Home} />
		<Stack.Screen name={SCREENS.SONGS} component={Songs} />
		<Stack.Screen name={SCREENS.FAVOURITE} component={Favourite} />
		<Stack.Screen name={SCREENS.RECENT} component={Recent} />
		<Stack.Screen name={SCREENS.PLAYLISTS} component={Playlists} />
		<Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} />
	</Stack.Navigator>
);

const Index = () => {
	return (
		<NavigationContainer independent={true}>
			<StackNavigation />
		</NavigationContainer>
	);
};

export default Index;

*/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Search, Playing, Home, Songs, Favourite, Recent, Playlists, Playlist } from './screens';
import { SCREENS } from '../constants';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    // @ts-ignore  
	headerMode="none"
      initialRouteName={SCREENS.LOADING}
      screenOptions={{
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen name={SCREENS.LOADING} component={Loading} />
      <Stack.Screen name={SCREENS.SEARCH} component={Search} />
      <Stack.Screen name={SCREENS.PLAYING} component={Playing} />
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.SONGS} component={Songs} />
      <Stack.Screen name={SCREENS.FAVOURITE} component={Favourite} />
      <Stack.Screen name={SCREENS.RECENT} component={Recent} />
      <Stack.Screen name={SCREENS.PLAYLISTS} component={Playlists} />
      <Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} />
    </Stack.Navigator>
  );
};

const Index = () => {
  return (
    <NavigationContainer independent={true}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Index;