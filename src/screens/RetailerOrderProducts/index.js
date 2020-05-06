import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../../components/Cards';

export class RetailerOrderProducts extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Products={
			"Product1":{
				"name":"Product1",
				"price": "000",
				"qtyAvl":"1000",
				"url":"https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"
			},
			"Product2":{
				"name":"Product2",
				"price": "000",
				"qtyAvl":"1000",
				"url":"https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/premium-care-pants-2-packshot.png?v=2-201809051415"
			},
			"Product3":{
				"name":"Product3",
				"price": "000",
				"qtyAvl":"1000",
				"url":"https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/sensitive-wipes-packshot.png?v=1-201711080653"
			},
			"Product4":{
				"name":"Product4",
				"price": "000",
				"qtyAvl":"1000",
				"url":"https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers-newbaby-india.png?v=1-201804301122"
			},
			"Product5":{
				"name":"asdf",
				"price": "000",
				"qtyAvl":"1000",
				"url":"https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/pampers-baby-dry-diapers/closed-module/pampers-mainline-taped-non-pome-closed-module-banner-pack-150pi.png?v=1-201804241155"
			}
		}
		const addButton = () => {
			alert("jkadf")
		}
		return (
					<ScrollView>
						<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
					{
						
						Object.keys(Products).map((_eachProduct, index) =>
							
							(<View style={{ width: wp("100%"), height: hp("14%"), justifyContent: "center", alignItems: "center" }}>
								<Cards products="true" cardDimensions={{width:wp("95%"), height:hp("13%")}} backgroundColor="white" fontWeight="200" title={Products[_eachProduct].name} price={Products[_eachProduct].price} quantity={Products[_eachProduct].qtyAvl} textSize={{ fontSize: hp("2%") }} uri={Products[_eachProduct].url} onPress={addButton}/>
							</View>)
						)
					}
				</View>
					</ScrollView>
        )
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:"column",
		justifyContent: "center"
	}
})