import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Muhammad Al Ghifari Lubis</Text>
      <View
        style={{
          flexDirection:'row',
          alignItems: 'center',
          position: 'absolute',
          left: 30,
          bottom: 20,
          gap: 5
        }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/EBEBEB/external-glyph-game-tanah-basah-glyph-tanah-basah-43.png',
            }}
            style={{width: 20, height: 20}}
          />
        <Text style={{color:'#fefae0'}}>27/40</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          position: 'absolute',
          right: 22,
          bottom: 20,
        }}>
        <Text style={{color:'#fefae0'}}>Connected</Text>
        <Image
          source={{
            uri: 'https://img.icons8.com/small/16/40C057/filled-circle.png',
          }}
          style={{width: 10, height: 10}}
        />
      </View>
      <View style={styles.photoProfile}>
        <Image
          source={{uri: 'https://i.pravatar.cc/100', width: 100, height: 100}}
          style={{borderRadius: 50}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#bc6c25',
    maxHeight: 110,
    marginBottom: 57,
    elevation:30
  },
  photoProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:11,
    color:'#fefae0'
  },
});

export default Profil;
