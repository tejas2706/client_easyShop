import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TestScreen from './src/screens/TestScreen';
import RetailerHome from './src/screens/RetailerHome';
import { RetailerOrderProducts } from './src/screens/RetailerOrderProducts';
import SoldItems from './src/screens/SoldItems';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={TestScreen} />        
        <Stack.Screen name="RetailerHome" component={RetailerHome} />
        <Stack.Screen name="Retailer Order Products" component={RetailerOrderProducts} />        
        <Stack.Screen name="SoldItems" component={SoldItems} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

