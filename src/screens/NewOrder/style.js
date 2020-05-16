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
      checOutText:{
        fontSize:wp("6%")
      }
})