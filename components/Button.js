import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default  Button = ({ text, onPress, style }) => (
  <TouchableOpacity 
    style={[styles.button, style]} 
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});