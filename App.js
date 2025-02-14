// App.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet,Text } from 'react-native';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Calculator />
      {/* <Text>Calculator App</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text:{
    color:"#fff"
  }
});

