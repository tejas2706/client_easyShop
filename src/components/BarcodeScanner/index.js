import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

class BarcodeScanner extends React.PureComponent {
  state = {
    type: RNCamera.Constants.Type.back,
  };

  flipCamera = () =>
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });

  takePhoto = async () => {
    const { onTakePhoto } = this.props;
    const options = {
      quality: 0.5,
      base64: true,
      width: 300,
      height: 300,
    };
    const data = await this.camera.takePictureAsync(options);
    onTakePhoto(data.base64);
  };
  render() {
    const { type } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          type={type}
          style={styles.preview}
          // onGoogleVisionBarcodesDetected={this.props.onBarCodeRead({barcodes})}
          onBarCodeRead={this.props.onBarCodeRead}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera to allow scanning the barcode.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        {this.props.flipCamButton? 
        <View style={styles.camButtons}>
          <TouchableOpacity onPress={this.flipCamera} style={styles.flipButton}>
            <Icon name="refresh" size={40} color="white" />
          </TouchableOpacity>
        </View>:
        <View></View>
        }
          {/* <TouchableOpacity onPress={this.takePhoto} style={styles.recordingButton}>
            <Icon name="camera" size={50} color="white" />
          </TouchableOpacity> */}
        
      </View>
    );
  }

  onBarCodeRead = (e) => {
    Alert.alert("Barcode value is"+e.data ,"Barcode type is"+e.type);
  }

  // barcodeRecognized = ({ barcodes }) => {
  //   barcodes.forEach(barcode => console.warn(barcode.data))
  // };
}

export default BarcodeScanner;