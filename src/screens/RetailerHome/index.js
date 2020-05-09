import Cards from '../../components/Cards';
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Banner from '../../components/Banner'

export default class RetailerHome extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const categories = {
			"Baby Care": {
				"id":1,
				"src": "https://images.ctfassets.net/oe48y40ukei6/2TtBscOnMAos8gmggiw0sU/0a694de7b466846f7ed0d8370047ef46/Pampers.jpg"
			},
			"Fabric Care": {
				"id":2,
				"src": "https://images.ctfassets.net/oe48y40ukei6/1MILu4apX228SuCIYWKISW/c5653c685616cdfa99f898deada635ad/Ariel.jpg"
			},
			"Family Care": {
				"id":3,
				"src": "https://images.ctfassets.net/oggad6svuzkv/44K1LkQpBemQ4oq8uyIIwe/a645095be4a3aa3ee8e63e92a1ebf6a5/puffs-logo.jpg"
			},
			"Feminine Care": {
				"id":4,
				"src": "https://images.ctfassets.net/oe48y40ukei6/55h0o4qUfbjjLLVhg0s4zg/d5463cfd2af7559cbf0a9a79d8e3c932/Whisper.jpg"
			},
			"Gromming": {
				"id":5,
				"src": "https://images.ctfassets.net/oe48y40ukei6/5ZMikcd2HOAJ9ESWBw70f9/507672811bfb317222e467bb6bcbf876/Gillette.jpg"
			},
			"Hair Care": {
				"id":6,
				"src": "https://images.ctfassets.net/oe48y40ukei6/1ozmOnj1uguUwkaIe2Yc4e/f2c36f6883f93f0d82c6b990e8b4ea65/Pantene.jpg"
			},
			"Home Care": {
				"id":7,
				"src": "https://images.ctfassets.net/oe48y40ukei6/1nXPO4DPFOCcCOyYAm0W8k/18e24ee2665446443132fbecf56f1ada/Ambi-pur.jpg"
			},
			"Oral Care": {
				"id":8,
				"src": "https://images.ctfassets.net/oe48y40ukei6/16nBuk19Misk4kku0aks2m/70f7558977bba08d0ad6000e4237cf41/Oral-B.jpg"
			},
			"Skin & Personal Care": {
				"id":9,
				"src": "https://images.ctfassets.net/oe48y40ukei6/3PNis6ONrOsoaCYuQ2WC2Y/f38c1128971a10f524ee0b17e9b96c58/Olay.jpg"
			}
		};
		const products = (categoryId) =>{
			this.props.navigation.navigate("Retailer Order Products",{"category":categoryId})
		}
		return (
			// <SafeAreaView>
			<ScrollView style={styles.screenStyles}>
				<Banner />
				<View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
					{
						Object.keys(categories).map((_eachCategory, index) =>
							(<View style={{ width: wp("50%"), height: hp("14%"), justifyContent: "center", alignItems: "center" }}>
								{/* <Text>Test2</Text> */}
								<Cards category="true" onPress={()=>products(categories[_eachCategory].id)} backgroundColor="white" fontWeight="bold" title={_eachCategory} textSize={{ fontSize: hp("1.8%") }} uri={categories[_eachCategory]["src"]} />
							</View>)
						)
					}
				</View>
			</ScrollView>
			// </SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	screenStyles: {
		// flex: 1,
		// backgroundColor: "green",
	}
})