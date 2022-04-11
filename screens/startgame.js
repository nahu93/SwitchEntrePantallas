import React , { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native'
/* import Card from '../components/card';*/
import Colors from '../constantes/Colors';
import Input from '../components/Input';


function StartGame(props){

 const [enteredValue, setEnteredValue] = useState ('')

 const onHandlerTextChange = text =>{
     setEnteredValue(text.replace(/[^0-9]/g,''));
 }
  
    return (

        <View style={styles.screen}>

            <Text style={styles.startText} > Comenzar juego </Text>

            <View style={styles.inputContainer}>
            
                    <Text > Elija un numero </Text>
                    <Input
                    style={styles.Input}
                    blurOnSubmit
                    keyboardType='numeric'
                    autoCorrect={false}
                    autoCapitalization="none"
                    maxLenght={2}
                    onChangeText={onHandlerTextChange}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                    <Button title='limpiar' color={Colors.primary}/>
                    <Button title='confirmar' color={Colors.accent}/>
                    </View>
                    <Button onPress={()=>props.onStartGame (enteredValue)} title="start Game" color='grey' />
         </View>
        
            
        </View>
        
    )
}

const styles = StyleSheet.create ({



    screen:{
        backgroundColor: '#fff',
        
        justifyContent: 'center',
        alignItems: 'center'



    },
    startText:{
        fontSize: 20,
        
        fontFamily: 'Bebas',

    },

    inputContainer:{
        alignItems:'center',
        backgroundColor:'#A4E3CD',
        width:300,
        padding:20,
        borderRadius:20,
       // shadowColor:'black',
       // shadowOffset:{width:3,height:2},
       // shadowRadius:6,
       // shadowOpacity:0.26,
       elevation: 5 ,
        
          
      
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:300,
    }

  
});

export default StartGame;