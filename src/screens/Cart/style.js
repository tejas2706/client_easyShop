import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        "flex":1,
        "borderTopWidth":0.5,
    },
    innerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
        height: hp("8%"),
        justifyContent:"space-around"
    },
    image:{
        borderRadius: 20,
        borderWidth:1,
        width: wp("15%"),
        height: wp("13%"),
        backgroundColor:"#E8E7E7"
    },
    modalImage:{
        borderRadius: 10,
        borderWidth:2,
        width: wp("30%"),
        height: hp("10%"),
    },
    textStyle:{
        "fontSize":wp("3.2%")
    },
    modalTextStyle:{
        "fontSize":wp("4%")
    },
    infoBox:{
        // borderWidth:1,
        // paddingLeft:wp("3%"),
        // borderWidth:1,
        width:wp("40%"),
        height:hp("7%")
    },
    modalInfoBox:{
        paddingTop:hp("1%"),
        width:wp("40%"),
        height:hp("12%"),
    },
    modify:{
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-around",
        width:wp("20%")
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width:hp("10%"),
        alignItems:"center",
    }

})