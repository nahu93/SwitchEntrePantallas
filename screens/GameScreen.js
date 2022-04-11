import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native'


const generateNumber = (min,max) => {
    min = Math.ceil(min)
    max= math.floor(max)

    return Math.floor(Math.random()*(max - min) + min);
}

function GameScreen (props) {
    const [currentGuess, setCurrentGuess] = useState (generateNumber(1,100));

    return (
        <View>
            <Text>Pantalla GAME SCREEN</Text>
            <Text>{currentGuess}</Text>
            <Button title="Back" color="blue" onPress={() => props.onBack(null)}></Button>
        </View>
    )
}

export default GameScreen;