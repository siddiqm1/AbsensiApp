import { View, Text, StatusBar, Image } from 'react-native';
import React, { useEffect } from 'react';
import logo from '../../assets/image/logo.jpg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'nativewind';

export default function Splash() {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;

        setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        setTimeout(() => ring2padding.value = withSpring(ring1padding.value+hp(5.5)), 150);

        setTimeout(() => {
            navigation.navigate('Login')
        }, 2100);
        
    }, []);
    
    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-customBlue">
            <StatusBar barStyle={"light-content"} backgroundColor={"#10ac84"}/>
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring2padding }}>
                <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1padding }}>
                    <Image 
                        source={ logo } className="rounded-full"
                        style={{ width: hp(22), height: hp(22) }}
                    />
                </Animated.View>
            </Animated.View>

            <View className="flex items-center space-y-2">
                <Text style={{ fontSize: hp(4), fontFamily: "poppins-bold" }} className="font-bold text-white tracking-widest">Attendance App</Text>
                <Text style={{ fontSize: hp(2) }} className="font-medium text-white tracking-widest">lorem ipsum sit amet</Text>
            </View>
            
        </View>
    )
}