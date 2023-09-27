import { Stack } from "expo-router/stack";
import React, { useRef } from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { ExpandableButton } from "../components/Buttons";

const StyledView = styled(View);

export default function Layout() {
	const profileRef = useRef();
	const journalRef = useRef();

	return (
		<>
			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="login" />
			</Stack>
			<ExpandableButton
				btnStyles="absolute top-20 left-5"
				height={"h-[75px]"}
				iconSize={50}
				icon="person-circle-outline"
				expanded={false}
				expandedWidth={"65%"}
				collapsedWidth={"20%"}
				title="Profile"
				href="/profile"
				expandedHref="/feed"
				ref={profileRef}
				press={() => {
					if (journalRef.current.pressed)
						journalRef.current.toggleButton();
				}}
			/>
			<ExpandableButton
				btnStyles="absolute top-20 right-5"
				height={"h-[75px]"}
				iconSize={50}
				icon="journal-outline"
				expanded={false}
				expandedWidth={"65%"}
				collapsedWidth={"20%"}
				title="Journal"
				href="/journal"
				expandedHref="/feed"
				ref={journalRef}
				press={() => {
					if (profileRef.current.pressed)
						profileRef.current.toggleButton();
				}}
			/>
		</>
	);
}