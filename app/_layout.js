import { Stack } from 'expo-router/stack';
import React, { useEffect, useState } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SplashScreen } from 'expo-router';
import { Provider, useAuth } from './context/auth';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { readData, writeData } from '../backend/firebaseFunctions';
import { encrypt, decrypt } from 'react-native-simple-encryption';
import * as Config from '../app.config';
import { auth } from '../backend/config.js';
import { useStore } from './global.js';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, setLoaded] = useState(false);
	const setHaptics = useStore((state) => state.setHaptics);

	useEffect(() => {
		(async () => {
			setTimeout(async () => {
				let haptics = await readData(
					`prayer_circle/users/${auth.currentUser.uid}/private/settings/haptics`
				);
				setHaptics(haptics);
			}, 1000);

			let latestVersion = await readData(
				'prayer_circle/constants/minimum_stable_version'
			);
			if (latestVersion > Config.default.expo.version) {
				alert(
					'A new version of Prayer Circle is available. Please update to the latest version to continue using the app.'
				);
			} else {
				setLoaded(true);
			}
		})();
	}, []);

	useEffect(() => {
		if (loaded) {
			setTimeout(() => {
				SplashScreen.hideAsync();
			}, 100);
		}
	}, [loaded]);

	return (
		<Provider>
			<AnimatedSplash
				backgroundColor={'#121212'}
				translucent={true}
				logoImage={require('../assets/Squared_Logo_Dark.png')}
				logoHeight={240}
				logoWidth={240}
				isLoaded={loaded}
			>
				<RootLayoutNavigation />
			</AnimatedSplash>
		</Provider>
	);
}

function RootLayoutNavigation() {
	const { authInitialized, user } = useAuth();

	if (!authInitialized && !user) return null;

	return (
		<BottomSheetModalProvider>
			<Stack
				screenOptions={{ headerShown: false, gestureEnabled: false }}
			>
				<Stack.Screen
					name='(aux)/circleSettings'
					options={{ presentation: 'modal' }}
				/>
				<Stack.Screen
					name='(aux)/shareCircle'
					options={{ presentation: 'modal' }}
				/>
			</Stack>
		</BottomSheetModalProvider>
	);
}
