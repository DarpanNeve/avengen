import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './Display';
import Keypad from './Keypad';
import Footer from './Footer';

export default  Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  
  const handleNumber = (num) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <View style={styles.calculator}>
      <Display value={display} equation={equation} />
      <Keypad 
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEqual={handleEqual}
        onClear={handleClear}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});