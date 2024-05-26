import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../components/AppTextInput";


export default function Login() {

    const navigation = useNavigation();
    
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light-content"} backgroundColor={"#10ac84"} />
            <View style={{ padding: Spacing * 2, backgroundColor:'#f1f2f6'}}>
                <View style={{ alignItems: "center",}}>
                <Text className="text-customBlue" style={{fontSize: FontSize.xLarge, fontFamily: "poppins-bold", marginVertical: Spacing * 3, fontWeight: "bold"}}> Login here </Text>

                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.large, maxWidth: "60%", textAlign: "center", color: 'black'}}>Welcome back, have a nice day!</Text>
                </View>
                
                <View style={{ marginVertical: Spacing * 3,}}>
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                </View>

                <View>
                    <Text style={{ fontFamily: "poppins-semiBold", fontSize: FontSize.small, color: Colors.primary, alignSelf: "flex-end",}}>Forgot your password ?</Text>
                </View>

                <TouchableOpacity 
                onPress={() => navigation.navigate("Home")}
                style={{ padding: Spacing * 2, backgroundColor: '#10ac84', marginVertical: Spacing * 3, borderRadius: Spacing, shadowColor: Colors.primary, shadowOffset: { width: 0, height: Spacing, }, shadowOpacity: 0.3, shadowRadius: Spacing, }}>
                    <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.onPrimary, textAlign: "center", fontSize: FontSize.large, }}>
                    Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}