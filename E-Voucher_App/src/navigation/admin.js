import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';


import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Admin/HomeScreen';
import AddVoucher from '../screens/Admin/AddVoucher';
import GetAllVoucher from '../screens/Admin/GetAllVoucher';
import Account from '../screens/Admin/AccountScreen/Account';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GetAllVoucher" component={GetAllVoucher} />
                
                <Stack.Screen name="AddVoucher" component={AddVoucher} />
                <Stack.Screen name="Acc" component={Account} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation
