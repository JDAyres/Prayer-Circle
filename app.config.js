export default {
	expo: {
		name: 'Prayer Circle',
		scheme: 'prayer-circle',
		slug: 'prayer-circle',
		version: '0.0.2',
		orientation: 'portrait',
		icon: './assets/Squared_Logo_Dark.png',
		userInterfaceStyle: 'dark',
		splash: {
			backgroundColor: '#121212'
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
			bundleIdentifier: 'com.prayercircle.prayercircle',
			userInterfaceStyle: 'dark'
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/Logo_Dark.png',
				backgroundColor: '#121212'
			},
			package: 'com.prayercircle.prayercircle',
			userInterfaceStyle: 'dark'
		},
		web: {
			favicon: './assets/favicon.png'
		},
		extra: {
			eas: {
				projectId: 'ba379de7-859d-424a-a1be-46c133aab81a'
			}
		},
		owner: 'prayer-circle',
		runtimeVersion: {
			policy: 'appVersion'
		},
		updates: {
			url: 'https://u.expo.dev/ba379de7-859d-424a-a1be-46c133aab81a'
		},
		plugins: ['expo-router']
	}
};