import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'green',
    },
    preview: {
      width:widthPercentageToDP("100%"),
      height:heightPercentageToDP("30%"),
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex:1
    },
    camButtons: {
      width: Dimensions.get('window').width,
      height: heightPercentageToDP("15%"),
      justifyContent:"space-between",
      flexDirection:"row",
      backgroundColor:"black"
    },
  
    flipButton: {
      alignSelf:"center",
      alignContent:"flex-end",
      marginRight:widthPercentageToDP("5%")
    },
    recordingButton: {
      alignSelf:"center",
      marginLeft:widthPercentageToDP("44%")
    },
    listItems:{
      flex:1,
      borderWidth:5,
      // borderColor:"red"
    }
  });

export default styles