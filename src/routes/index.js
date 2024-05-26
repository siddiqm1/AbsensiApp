import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Riwayat from '../screens/Riwayat';

const Stack = createStackNavigator();

function LoginNavigation() {
    <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name='Login' component={Login} options={{ headerStyle: {backgroundColor: '#10ac84'} }}/>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
}

export default function NavigationApp() {
    return (
        // <LoginNavigation/>
        <Stack.Navigator>
            <Stack.Screen name='Riwayat' component={Riwayat} options={{ headerStyle: {backgroundColor: '#10ac84'} }}/>
        </Stack.Navigator>
    );
}