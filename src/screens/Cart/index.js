import React, { Component } from "react";
import { Text, View, Image, ScrollView, Alert, Modal, TouchableHighlight, Button } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import {generateBillAction} from '../../redux/actions'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [
                {
                    "name": "Product1",
                    "qty": "100",
                    "price": "200",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"

                },
                {
                    "name": "Product2",
                    "qty": "100",
                    "price": "200",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"

                },
                {
                    "name": "Product1",
                    "qty": "100",
                    "price": "200",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"
                },
                {
                    "name": "Product2",
                    "qty": "100",
                    "price": "200",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/premium-care-pants-2-packshot.png?v=2-201809051415"
                },
                {
                    "name": "Product3",
                    "qty": "100",
                    "price": "100",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/sensitive-wipes-packshot.png?v=1-201711080653"
                },
                {
                    "name": "Product4",
                    "qty": "100",
                    "price": "500",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers-newbaby-india.png?v=1-201804301122"
                },
                {
                    "name": "asdf",
                    "qty": "100",
                    "price": "300",
                    "url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/pampers-baby-dry-diapers/closed-module/pampers-mainline-taped-non-pome-closed-module-banner-pack-150pi.png?v=1-201804241155"

                }
            ],
            modalVisible: false,
            total:0
        }
    }


    generateBill = () => {
      let orderDetails = {
        orderId: Math.floor(Math.random() * 10000),// Generate a random number
        products: this.props.cartItems,
        dateOfOrder: new Date().toISOString(),
        status: "pending",
      }
      this.props.generateBill(orderDetails)
      this.props.navigation.navigate("PastOrders")
    }


    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View style={{height:hp("4%"), backgroundColor:"white", justifyContent:"space-between", alignItems:"center", flexDirection:"row", borderBottomWidth:2}}>
                        <Text style={{paddingLeft:wp("20%")}}>Products</Text>
                        <Text style={{paddingRight:wp("8%")}}>Amount</Text>
                    </View>
                    {this.props.cartItems.map(each => {
                        return this.renderItems(each)
                    })}
                <View style={{height:hp("6%"), borderTopWidth:2,backgroundColor:"white", justifyContent:"flex-end", alignItems:"center", flexDirection:"row"}}>
                    <Text style={{paddingLeft:wp("20%")}}>Total:   </Text>
                    <Text style={{paddingRight:wp("8%")}}>{this.getProductsTotal()}</Text>
                </View>
                <View>
                    <Button title="Place Order" onPress = {()=> this.generateBill()}/>
                </View>
                </View>
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
                                    <Image source={{ uri: this.state.data.url }} style={styles.modalImage}></Image>
                                    <View style={styles.modalInfoBox}>
                                        <Text style={styles.modalTextStyle}>Price:{this.state.data.price}</Text>
                                        <Text style={styles.modalTextStyle}>Quantity: {this.state.data.qty}</Text>
                                        <Text style={styles.modalTextStyle}>Total Amt:{parseInt(this.state.data.price) * parseInt(this.state.data.qty)}</Text>
                                    </View>
                                    <View style={{flexDirection:"row", justifyContent:"space-between", width:wp("40%")}}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.setState({ "modalVisible": false })
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Edit</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            this.setState({ "modalVisible": false })
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
            </ScrollView>
        )
    }

    renderItems = (eachItem) => {
        return (
            <View style={styles.innerContainer}>
                <Image source={{ uri: eachItem.url }} style={styles.image}></Image>
                <View style={styles.infoBox}>
                    <Text style={styles.textStyle}>Price:{100}</Text>
                    <Text style={styles.textStyle}>Quantity: {eachItem.units}</Text>
                    <View style={styles.modify}>
                        <Icon name="delete" size={wp("4.5%")} color="#999999" onPress={() => { Alert.alert("Delete Icon Clicked") }} />
                        <Icon name="edit" size={wp("4.5%")} color="#999999" onPress={() => this.displayModal(eachItem)} />
                    </View>
                </View>
                    <Text style={styles.textStyle}>{parseInt(100) * parseInt(eachItem.units)}</Text>
            </View>
        )
    }

    displayModal = (item) => {
        this.setState({ "modalVisible": true, data: item })
    }

    getProductsTotal= () =>{
        let total = this.props.cartItems.reduce((prev, eachItem)=>{
            return prev+parseInt(100) * parseInt(eachItem.units)

        },0)
    return <Text>{total}</Text>
    }
}

const mapStateToProps = (state) =>{
      console.log("mapStateToProps -> state", state)
      return {
          cartItems : state.cartItems
      }
}

const mapDispatchToProps = (dispatch)=>{

  return {
    generateBill: (orderDetails) => dispatch(generateBillAction(orderDetails))
  }
}



export default connect( mapStateToProps,mapDispatchToProps)(Cart)