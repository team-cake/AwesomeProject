import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'

export default function HomeScreen({ route, navigation }) {
	const [count, setCount] = useState(1)

	useEffect(() => {
		if (route.params && route.params.count) {
			setCount(route.params.count)
		}
	}, [route.params])
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: 30,
					textAlign: 'center',
					marginBottom: 30,
				}}
			>
				Gamers unite!
			</Text>
			<Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30 }}>
				Times i've been here: {count}
			</Text>
			<Button
				title='Go to Game'
				onPress={() =>
					navigation.navigate('Game', { screen: 'Play', params: { count } })
				}
			/>
		</View>
	)
}
