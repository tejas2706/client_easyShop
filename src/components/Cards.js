import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './Button';

export default class Cards extends Component {
    
    render() {
        return (

            this.props.category?

            <TouchableOpacity onPress={this.props.onPress} style={{...styles.RectangleShapeView,backgroundColor:this.props.backgroundColor}}>
                <View style={styles.textWrapper}>
                    <Text style={{...styles.category, color:this.props.color, fontWeight:this.props.fontWeight, fontSize:this.props.textSize.fontSize}}>{this.props.title}</Text>
                    <Image source={{uri:this.props.uri}} style={{width:wp("24%"), height:hp("11%"), borderRadius:20}}></Image>
                </View>
            </TouchableOpacity>

            : this.props.products?

            <View style={{...styles.RectangleShapeView,width:this.props.cardDimensions.width,height:this.props.cardDimensions.height,backgroundColor:this.props.backgroundColor}}>
                <View style={styles.textWrapper}>
                    <Image source={{uri:this.props.uri}} style={{width:wp("22%"), height:hp("11%"), backgroundColor:"#ECEEEC", borderRadius:10}}></Image>
                    <View style={{flexDirection:"column", paddingLeft:7, width:wp("42%")}}>
                        <Text style={{...styles.category, color:this.props.color, fontWeight:this.props.fontWeight, fontSize:this.props.textSize.fontSize}}>{this.props.title}</Text>
                        <Text style={{...styles.category, color:this.props.color, fontWeight:this.props.fontWeight, fontSize:this.props.textSize.fontSize}}>Price: {this.props.price}</Text>
                        <Text style={{...styles.category, color:this.props.color, fontWeight:this.props.fontWeight, fontSize:this.props.textSize.fontSize}}>Qty avl: {this.props.quantity}</Text>
                    </View>
                    <View alignSelf="center">
                        <Button backgroundColor="#4CAF50" buttonTitle="Add" onPress={this.props.onPress}></Button>
                    </View>
                </View>
            </View>

            :
            
            <View style={styles.textWrapper}>
                    <Text style={{...styles.category, color:this.props.color, fontSize:this.props.fontSize}}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textWrapper: {
        paddingLeft: wp("3%"),
        paddingTop: hp("0.3%"),
        width: wp('20%'),
        flexDirection:"row"
    },
    category: {
        fontSize: hp('2%'),
    },
    RectangleShapeView: {
        width: wp('45%'),
        height: hp('12%'),
        backgroundColor: '#FF7D7D',
        borderRadius: 20,
        shadowColor: "#F07474",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
});