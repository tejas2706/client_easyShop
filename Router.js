import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TestScreen from './src/screens/TestScreen';
import RetailerHome from './src/screens/RetailerHome';
import { RetailerOrderProducts } from './src/screens/RetailerOrderProducts';
import SoldItems from './src/screens/SoldItems';
import CurrentStock from './src/screens/CurrentStock';
import { Cart } from './src/screens/Cart';
import NewOrder from './src/screens/NewOrder';

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="My Stock" component={CurrentStock} />  */}
        <Stack.Screen name="SoldItems" component={SoldItems} />   
        <Stack.Screen name="Retailer Order Products" component={RetailerOrderProducts} />        
        <Stack.Screen name="RetailerHome" component={RetailerHome} />
        <Stack.Screen name="Cart" component={Cart} /> 
        <Stack.Screen name="NewOrder" component={NewOrder} />        
        <Stack.Screen name="Home" component={TestScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();