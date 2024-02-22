import React from 'react';
import { Text, View, Image } from 'react-native';
import { styled } from 'nativewind';
import { timeSince } from '../backend/functions';
import CachedImage from 'expo-cached-image';
import shorthash from 'shorthash';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export const Comment = (comment) => {
	return (
		<StyledView className='flex flex-row w-[90%] items-center px-1 my-2'>
			<CachedImage
				className='rounded-[5px]'
				width={40}
				height={40}
				cacheKey={shorthash.unique(comment.img)}
				source={{
					uri: comment.img
				}}
			/>
			<StyledView className='flex-1 ml-[8px]'>
				<StyledView className=' flex flex-row items-center'>
					<StyledText className='font-bold text-[18px] text-white'>
						{comment.name}
					</StyledText>
					<StyledText className='text-[14px] text-outline'>
						{`${comment.edited ? ' (edited)' : ''}`}
					</StyledText>
				</StyledView>
				<StyledText className='text-white text-[16px]'>
					{comment.content}
				</StyledText>
			</StyledView>
			<StyledView className='w-[35px] flex flex-col items-end justify-center'>
				<StyledText className='text-[13px] text-white'>
					{timeSince(comment.timestamp)}
				</StyledText>
			</StyledView>
		</StyledView>
	);
};
