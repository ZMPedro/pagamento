import * as React from 'react';
import styles from '../Styles';
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function TelaNotaFiscal({ navigation }) {
    return (
      <LinearGradient start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}}  colors={['#07d8ac', '#c26fd5']} style={styles.linearGradient}  >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: '#000' }}>
          <ImageBackground
            source={require('../components/images/Recibo_background.png')}
            style={{
              height: Dimensions.get('window').width / 1.2,
              width: Dimensions.get('window').width / 1.8,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                bottom: 0, // position where you want
                left: 0
              }}
            >
              
            </Text>
          </ImageBackground>
        </View>
      </LinearGradient>
      
    );
  }