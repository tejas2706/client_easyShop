import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Button extends Component{

    render(){
        return (
            <TouchableOpacity style={{...styles.buttonStyles, backgroundColor:this.props.backgroundColor }} onPress={this.AddButton}>
                <Text>
                    {this.props.buttonTitle}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    buttonStyles:{
        width:wp("20%"),
        height:hp("4%"),
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1, 
        borderRadius:10, 
        borderColor:"black"
    }
})