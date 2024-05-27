import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Camera = () => {
  return (
    <View>
        <View style={styles.camera}>
            <Image source={{uri:'https://img.icons8.com/ios-filled/50/EBEBEB/camera--v3.png'}} style={{width:40,height:40}}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camera:{
    justifyContent:'center',
    alignItems:'center',
    zIndex:3,
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'#bc6c25',
  }
});

export default Camera;
