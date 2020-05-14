import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TestScreen from './src/screens/TestScreen';
import RetailerHome from './src/screens/RetailerHome';
import { RetailerOrderProducts } from './src/screens/RetailerOrderProducts';
import SoldItems from './src/screens/SoldItems';
import {CurrentStock} from './src/screens/CurrentStock';
import { Cart } from './src/screens/Cart';
import NewOrder from './src/screens/NewOrder';
import Router from './Router';
import createReduxStore from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {

  const store = createReduxStore()
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}


