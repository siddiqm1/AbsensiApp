import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { mahasiswa } from '../../constants/Data'
import { useTailwind } from 'nativewind'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 3;
const wp = widthPercentageToDP;
const hp = heightPercentageToDP;

export default function Riwayat() {
  return (
    <View>
        <Text style={{ color: 'black', textAlign: 'center', marginVertical: 15, fontSize: 25, fontWeight: 'bold' }}>Riwayat Absensi</Text>
        <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap' }}
                style={{ overflow: 'visible' }}
            >
                {mahasiswa.map((mhs, index) => (
                    <View key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: itemWidth, height: itemWidth,}}>
                        <TouchableOpacity 
                            className="rounded-full"
                            style={{ padding: 1, shadowOpacity: 0.3, backgroundColor: '#e2e8f0' }}
                        >
                            <Image source={mhs.image} style={{ width: wp(20), height: hp(9.5) }} className="rounded-full"/>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign:'center', color:'black' }}>{mhs.nama}</Text>
                        <Text style={{ fontSize: 12, textAlign:'center', color:'black' }}>{mhs.nim}</Text>
                    </View>
                ))}
            </ScrollView>

    </View>
  )
}