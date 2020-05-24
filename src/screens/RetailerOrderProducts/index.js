import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, StyleSheet, View, Alert, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../../components/Cards';
const _ = require("lodash")
import { addToCartAction, removeFromCartAction } from '../../redux/actions';
import { connect } from 'react-redux'

class RetailerOrderProducts extends Component {
	constructor(props) {
		super(props);
		this.state={
			buttonToShow:false
		}
	}

	render() {
		const Products = {
			"1": {
				"Product1": {
					"id":"1",
					"name": "Product1",
					"price": "000",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"
				},
				"Product2": {
					"id":"2",
					"name": "Product2",
					"price": "000",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/premium-care-pants-2-packshot.png?v=2-201809051415"
				},
				"Product3": {
					"id":"13",
					"name": "Product3",
					"price": "000",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/sensitive-wipes-packshot.png?v=1-201711080653"
				},
				"Product4": {
					"id":"14",
					"name": "Product4",
					"price": "000",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers-newbaby-india.png?v=1-201804301122"
				},
				"Product5": {
					"id":"15",
					"name": "asdf",
					"price": "000",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/pampers-baby-dry-diapers/closed-module/pampers-mainline-taped-non-pome-closed-module-banner-pack-150pi.png?v=1-201804241155"
				}
			}
		}
		const addButton = (prod) => {
			Alert.alert("Added to cart", prod)
			this.setState({buttonToShow:false})
		}
		const productsToDisplay = Products[this.props.route.params.category]

		// console.log("RetailerOrderProducts -> render -> category", typeof Products[category])
		return (
			<ScrollView>
				<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
					{
						!_.isEmpty(productsToDisplay) ?
							Object.keys(productsToDisplay).map((_eachProduct, index) =>

								(<View style={{ width: wp("100%"), height: hp("14%"), justifyContent: "center", alignItems: "center" }}>
									<Cards products={true} cardDimensions={{ width: wp("95%"), height: hp("13%") }} backgroundColor="white" fontWeight="200" title={productsToDisplay[_eachProduct].name} price={productsToDisplay[_eachProduct].price} quantity={productsToDisplay[_eachProduct].qtyAvl} textSize={{ fontSize: hp("2%") }} uri={productsToDisplay[_eachProduct].url} onPress={() => addButton(_eachProduct)} buttonToShow={this.state.buttonToShow} field1="Price:" field2="Qty avl:" addToCart={() => this.props.addToCart(Products["1"][_eachProduct])} removeFromCart={() => { console.log("........"); this.props.removeFromCart(Products["1"][_eachProduct].id)}}/>
								</View>)
							)
							:
							<View>
								<Text>No products found</Text>
							</View>
					}
				</View>
				<Button  title="Cart" onPress={()=> this.props.navigation.navigate("Cart")}/>

			</ScrollView>
		)
	}
}

const mapStateToProps = (state) =>{
	console.log("mapStateToProps -> state", state)
	  return {
		  cartItems : state.cartItems
	  }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
	return {
		  addToCart: (product) => dispatch(addToCartAction(product)),
		  removeFromCart: (productId) => dispatch(removeFromCartAction(productId))
	}
  }
  
  export default connect( mapStateToProps, mapDispatchToProps )(RetailerOrderProducts)
  

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center"
	}
})