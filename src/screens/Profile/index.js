import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ratingCount: 3,
      editPressed: false
    }
  }


  startComponent = () => {
    let ratingArr = new Array(this.state.ratingCount).fill(1);
    let remainingRatingArr = new Array(5 - ratingArr.length).fill(1)

    return (
      <View style={{ flexDirection: "row" }}>

        {ratingArr.map(() => {
          return (
            <View style={{ alignSelf: "center", elevation: 5 }}>
              <Icon name={"star"} size={30} color="#FFD700" />
            </View>
          )
        })}
        {remainingRatingArr.map(() => {
          return (
            <View style={{ alignSelf: "center", elevation: 15 }}>
              <Icon name={"star-border"} size={20} color="#FFD700" />
            </View>
          )
        })

        }
      </View>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <View style={styles.bodyContent}>
          {this.state.editPressed ?
            <>
              <TextInput style={{ borderWidth: 1, height: 50, ...styles.name }} defaultValue={this.props.name || "Anonymous"} placeholder="tfgyjiogfxdcgh"></TextInput>
              <TextInput style={{ borderWidth: 1, height: 40, ...styles.info }}>{this.props.shopName || "My Shop Name"}</TextInput>
              <TextInput style={{ borderWidth: 1, height: 40, ...styles.contactInfo }}>Contact Details : {this.props.contactDetails || "+91 999999999"}</TextInput>
            </>
            :
            (
              <>
                <Text style={styles.name}>{this.props.name || "Anonymous"}</Text>
                <Text style={styles.info}>{this.props.shopName || "My Shop Name"}</Text>
                <Text style={styles.contactInfo}>Contact Details : {this.props.contactDetails || "+91 999999999"}</Text>
              </>
            )}
          <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10, height: 50 }}>
            <Text style={styles.contactInfo}>Rating:</Text>
            {this.startComponent()}
          </View>
          <View style={{ flexDirection: "row"}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.setState({ editPressed: !this.state.editPressed }) }}>
              <Text style={{ color: "white" }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.setState({ editPressed: !this.state.editPressed }) }}>
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
