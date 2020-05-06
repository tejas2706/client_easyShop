import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF7D7D",
    width: wp("100%"),
    height: wp("30%")
  },
  avatar: {
    width: wp("35%"),
    height: wp("35%"),
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: 'center',
    position: 'absolute',
    marginTop: wp("10 %")
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: wp("10%")
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  contactInfo: {
    fontSize: 16,
    color: "#000000",
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 10,
    marginRight: 10,
    height: wp("10%"),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp("40%"),
    borderRadius: 30,
    backgroundColor: "#FF7D7D",
  }
});
export default styles;