import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import BarcodeScanner from '../../components/BarcodeScanner';
import styles from './style';
import Button from '../../components/Button';

export default class NewOrder extends Component {
  state = {
    BarcodeScanning: false
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.BarcodeScanning ?
        <View>
          <BarcodeScanner getCode={()=>this.getCode()}></BarcodeScanner>
        </View>:
        <Button buttonTitle="Create New Order" onPress={()=>this.onPress()} ></Button>
          
        }
      </View>
    );
  }

  onPress = async () =>{
    this.setState({"BarcodeScanning":true})
  }
  getCode = () =>{
    Alert.alert("Hi")
  }
}
