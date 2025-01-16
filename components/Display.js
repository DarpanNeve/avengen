import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Display = ({ value, equation }) => (
  <View style={styles.display}>
    <Text style={styles.equation}>{equation}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  equation: {
    color: '#888',
    fontSize: 24,
  },
  value: {
    color: '#fff',
    fontSize: 48,
  },
});