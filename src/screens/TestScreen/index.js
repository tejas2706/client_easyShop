import React, { Component } from 'react';
import styles from './style';
import Cards from '../../components/Cards';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Testscreen extends Component{
  constructor(props) {
    super(props);
}
  render(){
    const pressMe = () =>{
      console.log("Hi")
      this.props.navigation.navigate('RetailerHome')
    }
    return (
      <View style={styles.container}>
        <Cards category ="true" backgroundColor="#FF7D7D" color="white" title="Retailer" textSize={{fontSize:hp("3%")}} onPress={pressMe}/>
      </View>
      
    );
  }
}