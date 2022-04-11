import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function Card (props) {
    
    return (

        <View style={{...styles.inputContainer, ...props.style}}>
             {props.children}
        </View>
            
    )
}

const styles = StyleSheet.create ({
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
  
})

export default Card