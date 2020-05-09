import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

let style = StyleSheet.create({
    banner: {
        width: wp("80%"),
        height: hp('40%'),
        flexDirection: "row",
        backgroundColor: "#FFF",
        // marginRight: wp("10%"),
        // marginLeft: wp("10%"),
        // marginTop: wp("10%"),
        margin: wp("10%"),
        elevation: 10,
        borderRadius: 15

    },
    textContainer: {
        flex: 0.5,
        justifyContent: "center",
        margin: 20
        // flexWrap: "wrap",
        // backgroundColor: 'red'
    },
    imgContainer: {
        flex: 0.5,
        justifyContent: "center",
        // backgroundColor: 'black'
    }
});

export default style;
