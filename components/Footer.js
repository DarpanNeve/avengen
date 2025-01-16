import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Calculator by Darpan</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 16,
  },
});