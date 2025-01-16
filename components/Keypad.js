import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

export default  Keypad = ({ onNumber, onOperator, onEqual, onClear }) => {
  const renderButton = (text, onPress, style = {}) => (
    <Button text={text} onPress={onPress} style={style} />
  );

  return (
    <View style={styles.keypad}>
      <View style={styles.row}>
        {renderButton('C', onClear, styles.functionButton)}
        {renderButton('±', () => {}, styles.functionButton)}
        {renderButton('%', () => {}, styles.functionButton)}
        {renderButton('÷', () => onOperator('/'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('7', () => onNumber('7'))}
        {renderButton('8', () => onNumber('8'))}
        {renderButton('9', () => onNumber('9'))}
        {renderButton('×', () => onOperator('*'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('4', () => onNumber('4'))}
        {renderButton('5', () => onNumber('5'))}
        {renderButton('6', () => onNumber('6'))}
        {renderButton('-', () => onOperator('-'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('1', () => onNumber('1'))}
        {renderButton('2', () => onNumber('2'))}
        {renderButton('3', () => onNumber('3'))}
        {renderButton('+', () => onOperator('+'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('0', () => onNumber('0'), styles.zeroButton)}
        {renderButton('.', () => onNumber('.'))}
        {renderButton('=', onEqual, styles.equalButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keypad: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  functionButton: {
    backgroundColor: '#a6a6a6',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  equalButton: {
    backgroundColor: '#4cd964', // Green background for equal button
  },
  zeroButton: {
    flex: 2,
    marginRight: 10,
  },
});
