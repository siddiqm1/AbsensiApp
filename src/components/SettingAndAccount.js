import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SettingAndAccount = () => {
  return (
    <View>
        <View style={styles.setting}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/EBEBEB/settings.png',
            }}
            style={{height: 25, width: 25}}
          />
        </View>
        <View style={styles.account}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/30/EBEBEB/gender-neutral-user.png',
            }}
            style={{height: 25, width: 25}}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  setting: {    backgroundColor: '#bc6c25',
 
    borderRadius: 21,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -47,
    left: 20,
  },
  account: {
    backgroundColor: '#bc6c25',
    borderRadius: 21,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -47,
    left: 300,
    elevation:10,
  },
  help: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -47,
    left: 20,
  },
});

export default SettingAndAccount;
