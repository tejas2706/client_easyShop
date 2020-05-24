import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import styles from './style';
export default class WholeSalerHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calls: [
                { id: "1", shopName: "Shop1", orderId: "PG-12345", dateOfOrder: "2020-05-06", status: "pending", statusColor: "red" },
                { id: "2", shopName: "Shop2", orderId: "PG-11123", dateOfOrder: "2020-05-01", status: "delivered", statusColor: "green" },
                { id: "3", shopName: "Shop3", orderId: "PG-10998", dateOfOrder: "2020-04-26", status: "delivered", statusColor: "green" },
                { id: "4", shopName: "Shop4", orderId: "PG-10757", dateOfOrder: "2020-04-06", status: "delivered", statusColor: "green" },
                { id: "5", shopName: "Shop5", orderId: "PG-10555", dateOfOrder: "2020-03-05", status: "delivered", statusColor: "green" },
                { id: "6", shopName: "Shop6", orderId: "PG-10382", dateOfOrder: "2020-02-23", status: "delivered", statusColor: "green" },
                { id: "8", shopName: "Shop7", orderId: "PG-10001", dateOfOrder: "2020-01-20", status: "delivered", statusColor: "green" },
                { id: "9", shopName: "Shop8", orderId: "PG-999", dateOfOrder: "2019-12-29", status: "delivered", statusColor: "green" },
                { id: "10",shopName: "Shop9", orderId: "PG-872", dateOfOrder: "2019-11-10",status: "delivered", statusColor: "green" },
            ]
        }
    }

    renderItem = (item) => {
        return (
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <View style={styles.orderDetails}>
                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Order Number: {item.orderId}</Text>
                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Shop Name: {item.shopName}</Text>
                </View>
                <Text style={styles.mblTxt}>{item.dateOfOrder}</Text>
              </View>
              <View style={styles.msgContainer}>
                <Text style={{ ...styles.msgTxt, color: item.statusColor }}>{item.status}</Text>
              </View>
            </View>
          </View>
        );
      }

    render() {
        return (
          // <Text>Hi</Text>
            <ScrollView>
                <View style={{ flex: 1 }} >
                    {this.state.calls.map(eachItem => {
                        return this.renderItem(eachItem)
                    })}
                </View>
            </ScrollView>
        )
    }
}