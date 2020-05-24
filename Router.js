import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, } from '@react-navigation/drawer';

import TestScreen from './src/screens/TestScreen';
import RetailerHome from './src/screens/RetailerHome';
import RetailerOrderProducts from './src/screens/RetailerOrderProducts';
import SoldItems from './src/screens/SoldItems';
import CurrentStock from './src/screens/CurrentStock';
import Cart  from './src/screens/Cart';
import NewOrder from './src/screens/NewOrder';
import AddProducts from './src/screens/AddProducts'
import PastOrder from './src/screens/PastOrders'

import Profile from './src/screens/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { Text, View, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

function StackRouterNavigation() {
  return (
    <Stack.Navigator> 
        <Stack.Screen name="RetailerHome" component={RetailerHome} />
        <Stack.Screen name="AddProducts" component={AddProducts} />     
        <Stack.Screen name="Retailer Order Products" component={RetailerOrderProducts} />        
        <Stack.Screen name="Cart" component={Cart} /> 
        <Stack.Screen name="Home" component={TestScreen} />    
        <Stack.Screen name="My Stock" component={CurrentStock} /> 
        <Stack.Screen name="NewOrder" component={NewOrder} />        
        <Stack.Screen name="SoldItems" component={SoldItems} /> 
        <Stack.Screen name="PastOrders" component={PastOrder} />   
      </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackRouterNavigation} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="PastOrders" component={PastOrder} />
        <Drawer.Screen name="Retailer Order Products" component={RetailerOrderProducts} /> 
        <Drawer.Screen name="AddProducts" component={AddProducts} />  
        <Drawer.Screen name="My Stock" component={CurrentStock} /> 
        <Drawer.Screen name="SoldItems" component={SoldItems} /> 
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: "center",
    borderWidth: 1
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});