import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center"
      },
      innerContainer:{
        flex:1,
        paddingTop:hp("4%")
      },
      Button:{
        width:wp("90%"),
        height:hp("15%")
      },
      listItems:{
        flex:0.85,
        borderWidth:1,
        borderColor:"green",
        paddingTop:hp("4%")
      },
      listProds:{
        borderBottomWidth:2,
        borderBottomColor:"grey",
        height: hp("10%"),
        width:wp("100%"),
        paddingLeft:wp("4%"),
        backgroundColor:"#DCDCDC",
        borderRadius:13,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      list:{
        height: hp("11%"),
      },
      textStyles:{
        fontSize:wp("4%")
      },
      orderButton:{
        flex:0.15,
        // borderWidth:1,
        width:wp("100%"),
        // height:hp("6%"),
        backgroundColor:"#e35454",
        alignItems:"center",
        justifyContent:"center"
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:"black"
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
    modalTextStyle:{
        "fontSize":wp("4%"),
        borderWidth:1
    },
    editTestStyle:{
        "fontSize": wp("4%"),
        borderWidth:1
    },
    modalImage:{
        borderRadius: 10,
        borderWidth:2,
        width: wp("30%"),
        height: hp("10%"),
    },
    modalInfoBox:{
        // paddingTop:hp("1%"),
        width:wp("70%"),
        // height:hp("12%"),
        borderWidth:2
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