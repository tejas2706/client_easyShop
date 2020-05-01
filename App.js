import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Testscreen from './src/screens/Testscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Testscreen />
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
