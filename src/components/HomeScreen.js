import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import MyButton from './MyButton'

export default function HomeScreen({ route, navigation }) {
	const [count, setCount] = useState(1)

	useEffect(() => {
		if (route.params && route.params.count) {
			setCount(route.params.count)
		}
	}, [route.params])
	return (
		<>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						flex: 1,
						height: '10%',
					}}
				>
					<View
						style={{
							flex: 1,
							height: '25%',
							backgroundColor: 'rebeccapurple',
						}}
					/>
					<View
						style={{
							flex: 2,
							height: '50%',
							backgroundColor: 'crimson',
						}}
					/>
					<View
						style={{
							flex: 3,
							height: '80%',
							backgroundColor: 'gold',
						}}
					/>
				</View>
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
					Times I've been here: {count}
				</Text>
				<MyButton
					title='Go to Game'
					onPress={() =>
						navigation.navigate('Game', { screen: 'Play', params: { count } })
					}
				/>
				<View
					style={{
						alignItems: 'flex-end',
						flexDirection: 'row',
						flex: 3,
						height: '10%',
					}}
				>
					<View
						style={{
							flex: 2,
							height: '90%',
							backgroundColor: 'gold',
						}}
					/>
					<View
						style={{
							flex: 1,
							height: '70%',
							backgroundColor: 'crimson',
						}}
					/>
					<View
						style={{
							flex: 3,

							height: '35%',
							backgroundColor: 'rebeccapurple',
						}}
					/>
				</View>
			</View>
		</>
	)
}
