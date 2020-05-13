import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center"
      },
      Button:{
        width:wp("90%"),
        height:hp("15%")
      }
})