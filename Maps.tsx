import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

const numbers = [1, 2, 3, 4, 5];
const numbersMapDuplicated = numbers.map((number) => number * 2);

function duplicateNumbers(toDuplicate: any){
    let length = Object.keys(toDuplicate).length;
    let numberKeys = Object.keys(toDuplicate);
    let numbersTransformed = [];
    for (let i = 0; i < length; i++){
        numbersTransformed[i]=toDuplicate[numberKeys[i]]*2;
    }
	console.log("Duplicated numbers: "+numbersTransformed);
    return numbersTransformed;
}

export default function App() {
	return (
		<View style={styles.container}>
            <Text>Numeros antes de transformarlos: {numbers}</Text>
            <Text>Numeros despues de transformarlos: {duplicateNumbers(numbers)}</Text>
			<Text>Numeros con el mapeo: {numbersMapDuplicated}</Text>
            <Button
				onPress={() => duplicateNumbers(numbers)}
				title="Transformar números"
				color="#1ACDA5"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
