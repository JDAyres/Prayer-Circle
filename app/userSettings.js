import React from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { styled } from 'nativewind';
import { Button } from '../components/Buttons';

const StyledSafeArea = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page() {
	return (

		<StyledSafeArea className='bg-offblack border' style={{ flex: 1 }}>
			<StyledView className='flex-1 items-center mt-45 pt-10'>
				<StyledText className='text-3xl text-white text-center tracking-widest leading-10'>
					Settings
				</StyledText>
				<Button 
					icon='person-circle-outline'
					href='/profile'
					btnStyles={'absolute bottom-10 left-5'}
					width={'w-[60px]'}
					height={'h-[60px]'}
					iconSize={35}
			
				>
				</Button>
			</StyledView>
		</StyledSafeArea>
	);
}
