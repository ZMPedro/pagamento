import React, {Component} from 'react';
import styles from '../Styles';
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from '../Icon';
import NumericKeyboard from '../NumericKeyboard';
import BottomTab from "../BottomTab";
import Swiper from 'react-native-swiper';


export default class TelaPagamento extends Component {


  render() {
    return (
      <View style={styles.container}>
          <LinearGradient start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}} colors={['#6910b5', '#b860c8']} style={styles.linearGradient}>
            <NumericKeyboard />
            <BottomTab />
          </LinearGradient>
      </View>
    );
  }
}