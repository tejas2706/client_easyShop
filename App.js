import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './src/screens/TestScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TestScreen />
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
