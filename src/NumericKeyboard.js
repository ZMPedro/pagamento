import React, {Component} from 'react';
import styles from './Styles';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from './Button';
import Display from './Display';
import Icon from "react-native-vector-icons/FontAwesome5";

const initialState = {
  displayValue: '0,00',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class NumericKeyboard extends Component {

    state = { ...initialState }

    addDigit = n => {
      const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay
      
      if (n === '.' && !clearDisplay 
        && this.state.displayValue.includes('.')) {
        return
      }

      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n
      this.setState({ displayValue, clearDisplay: false })

      if (n !== '.') {
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[this.state.current] = newValue
        this.setState({ values })
      }
    } 

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = 
          eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true,
        values,
      })
    }
  }

  render() {
    return (
          
            <View style={styles.container}>
              <View>
                <Display value={this.state.displayValue} />
              </View>
              
              <View style={styles.buttons}>
                <Button label='3' onClick={this.addDigit} />
                <Button label='2' onClick={this.addDigit} />
                <Button label='1' onClick={this.addDigit} />
                <Button label='6' onClick={this.addDigit} />
                <Button label='5' onClick={this.addDigit} />
                <Button label='4' onClick={this.addDigit} />
                <Button label='9' onClick={this.addDigit} />
                <Button label='8' onClick={this.addDigit} />
                <Button label='7' onClick={this.addDigit} />
                <Icon name="backspace" style={styles.icon} color="#fff" />
                <Button label='0' onClick={this.addDigit} />
              </View>
            </View>
    );
  }
}