import 'react-native-gesture-handler';
import * as React from 'react';

import { View, Text, Button, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./src/Styles";

import TelaPagamento from "./src/screens/TelaPagamento";
import TelaNotaFiscal from "./src/screens/TelaNotaFiscal";

export default function App() {
    return (
        <TelaPagamento />
    );
}