import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux'

class PastOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        { id: "1",  orderId: "PG-12345", dateOfOrder: "2020-05-06", status: "pending", statusColor: "red", image: require('./images/shoppingBags.jpg') },
        { id: "2",  orderId: "PG-11123", dateOfOrder: "2020-05-01", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "3",  orderId: "PG-10998", dateOfOrder: "2020-04-26", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "4",  orderId: "PG-10757", dateOfOrder: "2020-04-06", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "5",  orderId: "PG-10555", dateOfOrder: "2020-03-05", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "6",  orderId: "PG-10382", dateOfOrder: "2020-02-23", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "8",  orderId: "PG-10001", dateOfOrder: "2020-01-20", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "9",  orderId: "PG-999", dateOfOrder: "2019-12-29", status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
        { id: "10", orderId: "PG-872", dateOfOrder: "2019-11-10",status: "cleared", statusColor: "green", image: require('./images/shoppingBags.jpg') },
      ]
    };
  }

  renderItem = (item) => {
    return (
      <View style={styles.row}>
        <Image source={require('./images/shoppingBags.jpg')} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Order Number: {item.orderId}</Text>
            <Text style={styles.mblTxt}>{item.dateOfOrder}</Text>
          </View>
          <View style={styles.msgContainer}>
            <Text style={{ ...styles.msgTxt, color: 'red' }}>{item.status}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }} >
          {this.props.orders.map(eachItem => {
            return this.renderItem(eachItem)
          })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log("mapStateToProps -> state", state)
  return {
      orders : state.orders
  }
}

export default connect(mapStateToProps)(PastOrders)
