import React from 'react'

export default function AboutScreen() {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
			<Text
				style={{
					fontSize: 30,
					textAlign: 'center',
				}}
			>
				This is an awesome game I developed using React Native, React Navigation
				and the accelerometer of my phone!
			</Text>
		</View>
	)
}
