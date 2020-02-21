import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'
import styles from "./Styles";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Button(props) {
    const stylesButton = [styles.button]

        return (
            <TouchableOpacity onPress={() => props.onClick(props.label)}>
                <Text style={stylesButton}>{props.label}</Text>  
            </TouchableOpacity>
        )

    
}