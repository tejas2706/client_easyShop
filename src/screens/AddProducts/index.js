import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet, Dimensions, Alert, Text, Modal } from 'react-native';
import BarcodeScanner from '../../components/BarcodeScanner';
import styles from './style';
import Button from '../../components/Button';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const _ = require("lodash");
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class AddProducts extends Component {
    state = {
        BarcodeScanning: false,
        editPressed:false,
        products: {
            "8902102230519": {
                "productName": "Margo Soap",
                "price": 120,
                "brand": "Masta brand",
                "qty": 100
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.BarcodeScanning ?
                    <View>
                        <BarcodeScanner onBarCodeRead={(e) => this.onBarCodeRead(e)} ></BarcodeScanner>
                    </View> :
                    this.state.showProdDetails ?
                    <View>
                    {
                        this.state.modalVisible &&
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                            {
                                                this.state.editPressed?
                                                <View style={styles.modalInfoBox}>
                                                    <Text style={styles.modalTextStyle}>Product already exists</Text>                                                    
                                                    <TextInput style={styles.modalTextStyle}><Text>Product Name:</Text> {this.state.products[this.state.data].productName}</TextInput>
                                                    <TextInput style={styles.modalTextStyle}><Text>Brand:</Text> {this.state.products[this.state.data].brand}</TextInput>
                                                </View>
                                                :
                                                this.state.products[this.state.data]?
                                                (
                                                    <View style={styles.modalInfoBox}>
                                                        <Text style={styles.modalTextStyle}>Product already exists</Text>
                                                        <Text style={styles.modalTextStyle}>Product Name:{this.state.products[this.state.data].productName}</Text>
                                                        <Text style={styles.modalTextStyle}>Brand: {this.state.products[this.state.data].brand}</Text>
                                                    </View>
                                                )
                                                :
                                                (
                                                    <View style={styles.modalInfoBox}>
                                                        <Text style={styles.modalTextStyle}>Add Product</Text>                                                    
                                                        <TextInput style={styles.modalTextStyle}><Text>Product Name:</Text></TextInput>
                                                        <TextInput style={styles.modalTextStyle}><Text>Brand:</Text></TextInput>
                                                    </View>
                                                )
                                            }
                                        <View style={{flexDirection:"row", justifyContent:"space-between", width:wp("40%")}}>
                                        <TouchableHighlight
                                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                            onPress={() => {
                                                this.setState({ "editPressed": true })
                                            }}
                                        >
                                            <Text style={styles.textStyle}>{this.state.products[this.state.data]?"Edit":"Save"}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                            onPress={() => {
                                                this.setState({ "modalVisible": false, "BarcodeScanning":true })
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    }
                    </View>
                        :
                        <Button buttonTitle="Add New Product" onPress={() => this.onPress()} ></Button>

                }
            </View>
        );
    }


    removeProduct = (eachProd) => {
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
        if (this.state.products[e.data]) {
            console.log("-----------EXISTS-------------------")
            Alert.alert(
                'Product already exists',
                'Do you wish to edit the product?',
                [
                    {
                        text: 'cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Edit', onPress: async () => {
                            this.setState({ "showProdDetails": true , "modalVisible":true, data:e.data, "BarcodeScanning":false})
                            //   toBeInsertedProd[e.data]["qty"] = this.state.products[e.data]["qty"] + 1
                            //   this.setState({ "cart": { ...this.state.products, ...toBeInsertedProd } })
                        }
                    },
                ]
            );
        } else {
            console.log("-----------NOT EXISTS-------------------")
            Alert.alert(
                'Add Product',
                'Click add to insert product details',
                [
                    {
                        text: 'cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Add', onPress: async () => {
                            this.setState({ "showProdDetails": true , "modalVisible":true, data:e.data, "BarcodeScanning":false})
                        }
                    }
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