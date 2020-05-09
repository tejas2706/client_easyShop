import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Picker,
  Modal,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Dimensions } from "react-native";

export default class SoldItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        { id: "1", orderId: "BL-12345", dateOfOrder: "2020-05-06", amount: "2000", image: require('./images/bill.png') },
        { id: "2", orderId: "BL-11123", dateOfOrder: "2020-05-01", amount: "2000", image: require('./images/bill.png') },
        { id: "3", orderId: "BL-10998", dateOfOrder: "2020-04-26", amount: "2000", image: require('./images/bill.png') },
        { id: "4", orderId: "BL-10757", dateOfOrder: "2020-04-06", amount: "2000", image: require('./images/bill.png') },
        { id: "5", orderId: "BL-10555", dateOfOrder: "2020-03-05", amount: "2000", image: require('./images/bill.png') },
        { id: "6", orderId: "BL-10382", dateOfOrder: "2020-02-23", amount: "2000", image: require('./images/bill.png') },
        { id: "8", orderId: "BL-10001", dateOfOrder: "2020-01-20", amount: "2000", image: require('./images/bill.png') },
        { id: "9", orderId: "BL-999", dateOfOrder: "2019-12-29", amount: "99", image: require('./images/bill.png') },
        { id: "10", orderId: "BL-872", dateOfOrder: "2019-11-10", amount: "10", image: require('./images/bill.png') },
      ],
      products: {
        "BL-12345": [
          { productName: "Pampers", quantity: 10, amount: "1000" },
          { productName: "Olay", quantity: 10, amount: "1000" }
        ]
      },
      pickedValue: "Select Date",
      toDisplayProducts: false,
      modalVisible: false,
      orderId: null,
    };
  }

  renderItem = (item) => {
    return (
      //this.setState({ modalVisible: true })
      <TouchableOpacity onPress={() => this.displayModal(item.orderId)}>
        <View style={styles.row}>
          <Image source={item.image} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Order Number: {item.orderId}</Text>
              <Text style={styles.mblTxt}>{item.dateOfOrder}</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={{ ...styles.msgTxt }}>Rs.{item.amount}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  handleDateChangeFilter = (data) => {
    if (data === '*') {
      this.setState({ pickedValue: "Select Date" })
      this.setState({ toDisplayProducts: this.state.calls })
    } else {
      this.setState({ pickedValue: data })
      let newData = this.state.calls.filter((eachFilter) => {
        return eachFilter.dateOfOrder == data
      })
      this.setState({ toDisplayProducts: newData })
    }
  }

  renderProducts = (item) => (
    <View style={styles.row}>
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Product Name: {item.productName}</Text>
          <Text style={styles.mblTxt}>Rs. {item.amount}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msgTxt}>Product Qty: {item.quantity}</Text>
        </View>
      </View>
    </View>
  )


  displayModal = (props) => {
    console.log(props)
    this.setState({ modalVisible: true, orderId: props })
  }

  render() {
    let productsToDisplay = this.state.toDisplayProducts || this.state.calls
    return (
      <ScrollView>
        <View>
          <View styles={{ flex: 1, justifyContent: "flex-end" }}>
            <Picker
              selectedValue={this.state.pickedValue}
              value={this.state.pickedValue}
              style={{
                height: 50,
                alignContent: "stretch",
                flex: 1
              }}
              onValueChange={this.handleDateChangeFilter}
            >
              <Picker.Item key={"*"} label={"Select Date"} value={"*"} />
              {this.state.calls.map((item, id) => {
                return <Picker.Item key={id} label={item.dateOfOrder} value={item.dateOfOrder} />;
              })}
            </Picker>
          </View>
        </View>
        <View style={{ flex: 1 }} >
          {productsToDisplay.map(eachItem => {
            return this.renderItem(eachItem)
          })}
        </View>

        {this.state.modalVisible &&
          <View style={stylesx.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
                <View style={stylesx.centeredView}>
                  <View style={stylesx.modalView}>
                    {this.state.orderId && this.state.products[this.state.orderId] ? 
                      this.state.products[this.state.orderId].map(eachProduct => this.renderProducts(eachProduct))
                    :
                    <View>
                      <Text> Looks like there are not products in here </Text>
                    </View>
                    }
                    <TouchableHighlight
                      style={{ ...stylesx.openButton, backgroundColor: "#2196F3" }}
                      onPress={() => {
                        this.setState({ modalVisible: false })
                      }}
                    >
                      <Text style={stylesx.textStyle}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
            </Modal>
          </View>
        }
      </ScrollView>
    );
  }
}

const stylesx = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

