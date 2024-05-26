import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/image/logo.jpg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTailwind } from 'nativewind';

export default function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Image 
                    source={logo}
                    className="rounded-full"
                    style={styles.logo}
                />
            <View>
                <Text style={{ color: 'black' }}>Selamat Datang</Text>
                <Text>Pak/Bu Lorem</Text>
            </View>
            </View>
        </View>
    )         
}

const styles = StyleSheet.create({
    header: {
        width: wp(100),
        height: hp(26),
        backgroundColor: '#10ac84',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    logo: {
        width: wp(15),
        height: hp(7)
    }
})