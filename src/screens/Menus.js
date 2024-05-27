import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Menus = () => {
    return (
        <View>
            <Menu desc="DAFTAR WAJAH"/>
            <Menu desc="RIWAYAT ABSENSI"/>
            <Menu desc="DATA REAL TIME"/>
            <Menu desc="DATA REAL TIME"/>
        </View>
    )
}

const Menu = ({desc}) => {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    width:'auto',
    height:125,
    backgroundColor:'#dda15e',
    marginBottom:15,
    marginHorizontal:10,
    borderRadius:20,
  },
  desc:{
    fontWeight:'bold',
    fontSize:25,
  }
});

export default Menus;
