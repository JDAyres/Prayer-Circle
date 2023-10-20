import React, { useState } from 'react';
import { SafeAreaView, Text, View, StatusBar, Switch } from 'react-native';
import { styled } from 'nativewind';
import { Button } from '../components/Buttons';

const StyledSafeArea = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page() {
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(true); // default to true

    return (
        <StyledSafeArea className='bg-offblack border' style={{ flex: 1 }}>
            <StyledView className='flex-1 items-center mt-45 pt-10'>
                <StyledText className='text-3xl text-offwhite text-center tracking-widest leading-10'>
                    Settings
                </StyledText>
					<View className="flex-row items-center mt-5 px-5">
						<View className="flex-row justify-between items-center bg-grey p-3 w-full rounded-xl">
							<Text className="mr-3 text-lg text-offwhite">
								Notifications
							</Text>
							<Switch
								trackColor={{ false: '#cc2500', true: '#00a55e' }}
								thumbColor={isNotificationsEnabled ? '#fffbfc' : '#fffbfc'}
								ios_backgroundColor='#cc2500'
								onValueChange={() => setNotificationsEnabled(previousState => !previousState)}
								value={isNotificationsEnabled}
							/>
						</View>
					</View>

                    <View className="flex-row items-center mt-5 px-5">
                        <View className="flex-row justify-between items-center bg-grey p-3 w-full rounded-xl">
                            <Text className="mr-3 text-lg text-offwhite">
                                Reset Password
                            </Text>
                            <Button 
                                title="Reset"
                                width={'w-[70px]'}
                                height={'h-[40px]'}
                                btnStyles='border-gold textColor-gold'
                                textColor={'gold'}
                                bgcolor={'offblack'}
                                borderColor={'gold'}
                                onPress={() => {
                                    // Handle password reset logic here
                                }}
                                // Add any other desired styles or props for the button
                            />
                        </View>
                    </View>
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
