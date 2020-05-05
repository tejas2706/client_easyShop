import React, { Component } from 'react';
import styles from './style';
import Cards from '../../components/Cards';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Testscreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Cards category ="true" backgroundColor="#FF7D7D" color="white" title="Baby Care" textSize={{fontSize:hp("3%")}} uri="https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"/>
        <Cards products="true" backgroundColor="white" cardDimensions={{width:wp("95%"), height:wp("25%")}} uri="https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png" title="Pampers" price="200" quantity="300" textSize={{fontSize:hp("2.3%")}}/>
      </View>
      
    );
  }
}