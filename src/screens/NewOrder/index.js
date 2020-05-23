import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import BarcodeScanner from '../../components/BarcodeScanner';
import styles from './style';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
const _ = require("lodash");
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class NewOrder extends Component {
  state = {
    BarcodeScanning: false,
    cart: {},
    products: {
      "8902102230519": {
        "productName": "Margo Soap",
        "price": 120,
        "brand": "Masta brand",
        "Qty": 100
      },
      "8902242600593": {
        "productName": "Long book",
        "price": 55,
        "brand": "Sundaram",
        "Qty": 200
      },
      "8906044330207": {
        "productName": "Water Bottle",
        "price": 20,
        "brand": "Bisleri",
        "Qty": 300
      },
      "1234567890": {
        "productName": "Powder",
        "price": 110,
        "brand": "Ponds",
        "Qty": 450
      },
      "1234567890128": {
        "productName": "idk",
        "price": 110,
        "brand": "Ponds",
        "Qty": 450
      },
      "72527273070": {
        "productName": "something",
        "price": 110,
        "brand": "Ponds",
        "Qty": 450
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.BarcodeScanning ?
          <View>
            <BarcodeScanner flipCamButton={true} onBarCodeRead={(e) => this.onBarCodeRead(e)} ></BarcodeScanner>
            <View style={styles.innerContainer}>
              <ScrollView style={styles.listItems}>
                {
                  !_.isEmpty(this.state.cart) ?
                    Object.keys(this.state.cart).map((eachProd) => {
                      return (
                        <View style={styles.list}>
                          <View style={styles.listProds}>
                            <View>
                              <Text style={styles.textStyles}>Product Name: {this.state.cart[eachProd].productName}</Text>
                              <Text style={styles.textStyles}>Price: {this.state.cart[eachProd].price}</Text>
                              <Text style={styles.textStyles}>Quantity: {this.state.cart[eachProd].qty}</Text>
                            </View>
                            <Icon name="delete" style={{ paddingRight: widthPercentageToDP("4%"), paddingTop: heightPercentageToDP("1%") }} size={30} onPress={()=>this.removeProduct(eachProd)} color="#ff4d00" />

                          </View>
                        </View>
                      )
                    })

                    :
                    <Text style={styles.textStyles}>Scan barcode to add items</Text>
                }
              </ScrollView>
              {/* <View style={styles.orderButtonContainer}> */}
              <TouchableOpacity style={styles.orderButton} onPress={this.props.onPress}>
                <Text style={styles.checOutText}>Checkout</Text>
              </TouchableOpacity>
              {/* </View> */}
            </View>
          </View> :
          <Button buttonTitle="Create New Order" onPress={() => this.onPress()} ></Button>

        }
      </View>
    );
  }

  removeProduct = (eachProd) =>{
    Alert.alert(
      'Remove product',
      'Are you sure you want to remove this product?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Remove', onPress: async () => {
            delete this.state.cart[eachProd];
            this.setState({ "cart": this.state.cart })
          }
        },
      ]
    );
  }



  onBarCodeRead = async (e) => {
    console.log("NewOrder -> onBarCodeRead -> e.data", e.data)
    let toBeInsertedProd = {}
    if (this.state.cart[e.data]) {
      console.log("-----------EXISTS-------------------")
      toBeInsertedProd[e.data] = this.state.cart[e.data]
      Alert.alert(
        'Product already exists',
        'Add quantity',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Add', onPress: async () => {
              toBeInsertedProd[e.data]["qty"] = this.state.cart[e.data]["qty"] + 1
              this.setState({ "cart": { ...this.state.cart, ...toBeInsertedProd } })
            }
          },
        ]
      );
    } else {
      console.log("-----------NOT EXISTS-------------------")
      toBeInsertedProd[e.data] = this.state.products[e.data];
      Alert.alert(
        'Product Details',
        JSON.stringify(this.state.products[e.data]),
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Add', onPress: async () => {
              toBeInsertedProd[e.data]["qty"] = 1;
              this.setState({ "cart": { ...this.state.cart, ...toBeInsertedProd } })
            }
          },
        ]
      );
    }
  }

  onPress = async () => {
    this.setState({ "BarcodeScanning": true })
  }
  getCode = () => {
    Alert.alert("Hi")
  }
}
