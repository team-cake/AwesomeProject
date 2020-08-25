import React from 'react'
import { Text, View, Alert } from 'react-native'
import MyButton from './MyButton'

export default function AboutScreen() {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
			<Text
				style={{
					fontSize: 30,
					textAlign: 'center',
					marginBottom: 30,
				}}
			>
				This is an awesome game I developed using React Native, React Navigation
				and the accelerometer of my phone!
			</Text>
			<MyButton
				title='What is my GitHub handle?'
				onPress={() => Alert.alert('Github.com/team-cake')}
			/>
		</View>
	)
}
