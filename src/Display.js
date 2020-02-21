import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    text1: {
        color: '#fff',
        fontFamily: 'DIN Condensed Bold',
        fontSize: 45,
        alignSelf: 'flex-start',
        bottom: -20,
        paddingRight: 15
    },
    text2: {
        color: '#fff',
        fontFamily: 'DIN Condensed Bold',
        fontSize: 20
    },
    display: {
        bottom: -20,
        alignContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    displayValue: {
        
        fontSize: 70,
        fontFamily: 'DIN Condensed Bold',
        color: '#fff',
    }
})

export default props => 
    <View style={styles.display}>
        <View style={{flexDirection: "row"}}>
            <Text style={styles.text1}>R$</Text>
            <Text style={styles.displayValue}
                numberOfLines={1}>{props.value}</Text>
        </View>
            
            <Text style={styles.text2}>TOTAL A PAGAR</Text>
    </View>