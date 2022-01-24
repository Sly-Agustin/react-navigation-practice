import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

let textGlobalVariable = <Text>Im a global text variable inside the app</Text>;
const items = [
	{ id: '0', text: 'Item0' },
	{ id: '1', text: 'Item1' },
	{ id: '2', text: 'Item2' },
	{ id: '3', text: 'Item3' },
	{ id: '4', text: 'Item4' },
]

export default function App() {
	let textLocalVariable = <Text>Im a local text variable inside the app</Text>;
	const [text, setText] = useState('');

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: 'https://www.reactnative.express/static/logo.png' }} />
			{textGlobalVariable}
			{textLocalVariable}
			<Text>Write something</Text>

			<TextInput
				value={text}
				style={{ fontSize: 42, color: 'steelblue' }}
				placeholder="Type here..."
				onChangeText={(text) => {
					setText(text);
				}}
			/>
			<Text style={{ fontSize: 24 }}>
				{'\n'}You entered: {text}
			</Text>

			<Button
				onPress={() => alert('This is a button! The text entered on the field is: ' + text)}
				title="Press me!"
				color="#1ACDA5"
			/>

			<FlatList
				style={styles.flatlist}
				data={items}
				renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
				keyExtractor={(item) => item.id}
			/>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
	},
	flatlist: {
		flex: 1
	},
	row: {
		padding: 15,
		marginBottom: 5,
		backgroundColor: 'skyblue',
	}
});
