import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../constantes/Colors';

function Header (props) {
    const {title} =  props;
    return (

        <View style={styles.headerContainer}>
            <Text style= { styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({

    headerContainer:{
        backgroundColor: Colors.light,
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'



    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold'


    }
})

export default Header