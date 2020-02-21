import React from 'react';
import { Image, Text, View, Button } from "react-native";
import TelaNotaFiscal from './screens/TelaNotaFiscal';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
function abrirTelaNotaFiscal() {
    return(
        <TelaNotaFiscal />
    )
}

export default function Icon(props) {

    return(
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center'}}>
            <TouchableOpacity onPress={() => <TelaNotaFiscal />} >
                <Image source={props.source} style={{width: 40, height: 40}}  />
                <Text style={{color: '#000', fontFamily: 'DIN Condensed Bold', fontSize: 20}}>{props.label}</Text>
            </TouchableOpacity>
        </View>
        
    );
}
