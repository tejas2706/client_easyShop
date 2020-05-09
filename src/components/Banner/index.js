import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import style from './styles'
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Banner extends React.Component {
  render() {
    const categories = [
      {
        "type": "Baby Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/2TtBscOnMAos8gmggiw0sU/0a694de7b466846f7ed0d8370047ef46/Pampers.jpg"
      },
      {
        "type": "Fabric Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/1MILu4apX228SuCIYWKISW/c5653c685616cdfa99f898deada635ad/Ariel.jpg"
      },
      {
        "type": "Family Care",
        "src": "https://images.ctfassets.net/oggad6svuzkv/44K1LkQpBemQ4oq8uyIIwe/a645095be4a3aa3ee8e63e92a1ebf6a5/puffs-logo.jpg"
      },
      {
        "type": "Feminine Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/55h0o4qUfbjjLLVhg0s4zg/d5463cfd2af7559cbf0a9a79d8e3c932/Whisper.jpg"
      },
      {
        "type": "Gromming",
        "src": "https://images.ctfassets.net/oe48y40ukei6/5ZMikcd2HOAJ9ESWBw70f9/507672811bfb317222e467bb6bcbf876/Gillette.jpg"
      },
      {
        "type": "Hair Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/1ozmOnj1uguUwkaIe2Yc4e/f2c36f6883f93f0d82c6b990e8b4ea65/Pantene.jpg"
      },
      {
        "type": "Home Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/1nXPO4DPFOCcCOyYAm0W8k/18e24ee2665446443132fbecf56f1ada/Ambi-pur.jpg"
      },
      {
        "type": "Oral Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/16nBuk19Misk4kku0aks2m/70f7558977bba08d0ad6000e4237cf41/Oral-B.jpg"
      },
      {
        "type": "Skin & Personal Care",
        "src": "https://images.ctfassets.net/oe48y40ukei6/3PNis6ONrOsoaCYuQ2WC2Y/f38c1128971a10f524ee0b17e9b96c58/Olay.jpg"
      }
    ];

    return (

      <View style={style.banner}>
         <View style={style.textContainer}>
         <Image source={require("../Banner/images/P_G_Logo.png")} style={{ flex: 1, width:wp("20%"), height:hp("20%"),resizeMode: "contain", justifyContent: "center" }}/> 
        </View>
        <View style={style.imgContainer}>
          <Swiper autoplay dot={<View />} activeDot={<View />} >
              {categories.map((eachCategory) => {
                return (
                  <Image source={{uri :eachCategory.src}} style={{ flex: 1, width:wp("35%"), height:hp("50%"),resizeMode: "contain", justifyContent: "center" }}/>
                )
              })}
            </Swiper>
        </View>
      </View>
      




      // <View style={style.banner}>
      //   <View style={style.textContainer}>
      //     {/* <Text style={style.headText} >P & G</Text> */}
      //     <Image source={{uri :"https://images.ctfassets.net/oe48y40ukei6/7znyJc3Y7SecEoKSYKWoaQ/823b9197d34f0dcb0f3dee778dc625a7/P_G_Logo_RGB.svg"}}/> 
      //   </View>
      //   <View style={style.imgContainer}>
      //     <Swiper autoplay dot={<View />} activeDot={<View />} >
      //       {categories.map((eachCategory) => {
      //         return (
      //           <ImageBackground source={{uri :eachCategory.src}} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
      //             {/* <View style={style.textContainer}>
      //               <Text style={style.headText} >P&G</Text>
      //               <Text style={style.headText} >Stay Safe</Text>
      //             </View> */}
      //           </ImageBackground>
      //         )
      //       })}
      //     </Swiper>
      //    </View>
      //  </View>
    );
  }
}