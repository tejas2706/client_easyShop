import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, StyleSheet, View, Alert } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../../components/Cards';
import { SearchBar } from 'react-native-elements';
const _ = require("lodash")
import { addToCartAction, removeFromCartAction } from '../../redux/actions';
import { connect } from 'react-redux'

class CurrentStock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			productsList: [],
			Products:{
				"Product1": {
					"id": 1,
					"name": "Product1",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers_baby_dry_pants_in-packshot.png?v=3-201808031111"
				},
				"Product2": {
					"id": 2,
					"name": "Product2",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/premium-care-pants-2-packshot.png?v=2-201809051415"
				},
				"Product3": {
					"id": 3,
					"name": "Product3",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506181521/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/sensitive-wipes-packshot.png?v=1-201711080653"
				},
				"Product4": {
					"id": 4,
					"name": "Product4",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/in-packshots/pampers-newbaby-india.png?v=1-201804301122"
				},
				"Product5": {
					"id": 5,
					"name": "asdf",
					"qtyAvl": "1000",
					"url": "https://res.cloudinary.com/pmprs/image/upload/c_scale,f_auto,q_60/v20200506182213/pampersc1/en-in/-/media/pampers/pampers-in/images/products/product-oasis/pampers-baby-dry-diapers/closed-module/pampers-mainline-taped-non-pome-closed-module-banner-pack-150pi.png?v=1-201804241155"
	
				}
			}
		}
	}


	updateSearch = (search) => {
		this.setState({ search });

		console.log("CurrentStock -> updateSearch -> value", this.state.search)
		let filteredproducts = Object.keys(this.state.Products).filter((_eachProd)=>{
			let loweredCaseprod = _eachProd.toLowerCase();
			return loweredCaseprod.includes(search.toLowerCase())
		})
		console.log("CurrentStock -> updateSearch -> filteredproducts", filteredproducts)
		this.setState({productsList:[...this.state.productsList,["asd"]]})
		console.log("CurrentStock -> updateSearch -> this.state.productsList", this.state.productsList)
	}

	
	render() {
		const { search } = this.state;

		// console.log("RetailerOrderProducts -> render -> category", typeof Products[category])
		return (
			<ScrollView>
				<View>
					<SearchBar style={{ width: wp("100%"), height: hp("7%") }}
						placeholder="Type Here..."
						onChangeText={this.updateSearch}
						value={search}
						lightTheme={true}
					/>
				</View>
				
				<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
						{
							!_.isEmpty(this.state.Products) && _.isEmpty(this.state.productsList) ?
							
								Object.keys(this.state.Products).map((_eachProduct, index) =>
									(<View style={{ width: wp("100%"), height: hp("14%"), justifyContent: "center", alignItems: "center" }}>
										<Cards products={true} cardDimensions={{ width: wp("95%"), height: hp("13%") }} backgroundColor="white" fontWeight="200" title={this.state.Products[_eachProduct].name} price={this.state.Products[_eachProduct].price} quantity={this.state.Products[_eachProduct].qtyAvl} textSize={{ fontSize: hp("2%") }} uri={this.state.Products[_eachProduct].url} onPress={() => addButton(_eachProduct)} buttonToShow={false} field2="Qty in stock:"
										productId={this.state.Products[_eachProduct].id} addToCart={() => this.props.addToCart(this.state.Products[_eachProduct])} removeFromCart={() => { console.log("......................"); this.props.removeFromCart(this.state.Products[_eachProduct].id)}} />
									</View>)
								):

								!_.isEmpty(this.state.productsList)?

								Object.keys(this.state.productsList).map((_eachProduct, index) =>
									(<View style={{ width: wp("100%"), height: hp("14%"), justifyContent: "center", alignItems: "center" }}>
										<Cards products={true} cardDimensions={{ width: wp("95%"), height: hp("13%") }} backgroundColor="white" fontWeight="200" title={this.state.Products[_eachProduct].name} price={this.state.Products[_eachProduct].price} quantity={this.state.Products[_eachProduct].qtyAvl} textSize={{ fontSize: hp("2%") }} uri={this.state.Products[_eachProduct].url} onPress={() => addButton(_eachProduct)} buttonToShow={false} field2="Qty in stock:" />
									</View>)
								):

								(<View>
									<Text>You ran out of stock.</Text>
								</View>)
					}		
					</View>
					

			</ScrollView>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		cartItems : state.cartItems.cartItems
	}
}


const mapDispatchToProps = (dispatch) => {
  return {
		addToCart: (product) => dispatch(addToCartAction(product)),
		removeFromCart: (productId) => dispatch(removeFromCartAction(productId))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(CurrentStock)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center"
	}
})