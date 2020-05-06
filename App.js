import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './src/screens/TestScreen';
import RetailerHome from './src/screens/RetailerHome';

export default function App() {
  return (
    <View style={styles.container}>
      <RetailerHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
