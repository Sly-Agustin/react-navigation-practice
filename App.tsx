import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState } from 'react'

let textGlobalVariable = <Text>Im a global text variable inside the app</Text>

export default function App() {
	let textLocalVariable = <Text>Im a local text variable inside the app</Text>
	const [text, setText] = useState('')
	
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			{textGlobalVariable}
			{textLocalVariable}

			<TextInput
					value={text}
					style={{ fontSize: 42, color: 'steelblue' }}
					placeholder="Type here..."
					onChangeText={(text) => {
					setText(text)
					}}
			/>
			<Text style={{ fontSize: 24 }}>
				{'\n'}You entered: {text}
			</Text>

			<Button
              onPress={() => alert('This is a button! The text entered on the field is: '+text)}
              title="Press me!"
              color="#1ACDA5"
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
});
