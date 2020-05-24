import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet, Dimensions, Alert, Text, Modal } from 'react-native';
import BarcodeScanner from '../../components/BarcodeScanner';
import styles from './style';
import Button from '../../components/Button';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const _ = require("lodash");
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const config = require("../../config.json");

export default class AddProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            BarcodeScanning: false,
            editPressed:false,
            products: {
                // "8902102230519": {
                //     "productName": "Margo Soap",
                //     "price": 120,
                //     "brand": "Masta brand",
                //     "qty": 100
                // },
                // "8902579103409":{
                //     "productName": "Appy Fizz",
                //     "price": 10,
                //     "brand": "Parle Agro",
                //     "qty": 100
                // }
            },
            data: "",
            modalVisible: false,
            showProdDetails: false
        }
    }
    

  async componentWillMount(){
    console.log("......................................")
    let res = await fetch(`${config.apiUrl}/readFile?filename=products.json`,{
      method: "GET"
    })

    let response = await res.json();
    console.log("PastOrders -> componentWillMount -> response", response)
    let allProducts = {}
    if(!_.isEmpty(response.data)){
        response.data.map((each)=>{
            allProducts[each["barcodeId"]] = each
        })
    }
    await this.setState({products: allProducts})
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
                                                this.state.products[this.state.data]?
                                                <View style={styles.modalInfoBox}>
                                                    <Text style={styles.modalTextStyle}>Product already exists</Text>                                                    
                                                    <TextInput style={styles.modalTextStyle} placeholder="Product Name:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"name":e}})}>{this.state.products[this.state.data].name}</TextInput>
                                                    <TextInput style={styles.modalTextStyle} placeholder="Price:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"price":e}})}>{this.state.products[this.state.data].price}</TextInput>
                                                    <TextInput style={styles.modalTextStyle} placeholder="Quantity:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"qtyAvl":e}})}>{this.state.products[this.state.data].qtyAvl}</TextInput>
                                                </View>
                                                :
                                                // this.state.products[this.state.data]?
                                                // (
                                                //     <View style={styles.modalInfoBox}>
                                                //         <Text style={styles.modalTextStyle}>Product already exists</Text>
                                                //         <Text style={styles.modalTextStyle}>{this.state.products[this.state.data].name}</Text>
                                                //         <Text style={styles.modalTextStyle}>{this.state.products[this.state.data].price}</Text>
                                                //         <Text style={styles.modalTextStyle}>{this.state.products[this.state.data].qtyAvl}</Text>
                                                //     </View>
                                                // )
                                                // :
                                                (
                                                    <View style={styles.modalInfoBox}>
                                                        <Text style={styles.modalTextStyle}>Add Product</Text>                                                    
                                                        <TextInput style={styles.modalTextStyle} placeholder="Product Name:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"name":e}})}></TextInput>
                                                        <TextInput style={styles.modalTextStyle} placeholder="Price:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"price":e}})}></TextInput>
                                                        <TextInput style={styles.modalTextStyle} placeholder="Quantity:" onChangeText={(e)=> this.setState({"editedProd":{...this.state.editedProd,"qtyAvl":e}})}></TextInput>
                                                    </View>
                                                )
                                            }
                                        <View style={{flexDirection:"row", justifyContent:"space-between", width:wp("40%")}}>
                                        <TouchableHighlight
                                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                            onPress={() => {
                                                fetch(`${config.apiUrl}/addProduct`,{
                                                    method: "POST",
                                                    headers: {
                                                        Accept: 'application/json',
                                                        'Content-Type': 'application/json'
                                                      },
                                                      body: JSON.stringify(this.state.editedProd)
                                                })
                                                // this.setState({ "editPressed": true })
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Save</Text>
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
                            this.setState({ "showProdDetails": true , "editedProd":{ "barcodeId":e.data } ,"modalVisible":true, data:e.data, "BarcodeScanning":false})
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
                            this.setState({ "showProdDetails": true ,  "editedProd":{ "barcodeId":e.data } ,"modalVisible":true, data:e.data, "BarcodeScanning":false})
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