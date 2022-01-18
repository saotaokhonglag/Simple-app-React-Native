import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/TabBarIcon";
import TabBarText from "../components/TabBarText";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AccountScreen from '../screens/Admin/AccountScreen/Account';


import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import DetailsAcc from '../screens/Admin/AccountScreen/DetailsAcc';
import Edit from '../screens/Admin/AccountScreen/Edit';
import DetailsScreen from '../screens/HomeScreen/DetailsScreen';
import { Cart } from '../screens/CartScreen/Cart';

import EditCartScreen from '../screens/CartScreen/EditCartcreen'
import HomeAD from '../screens/Admin/HomeScreen';
import AddVoucher from '../screens/Admin/AddVoucher';
import GetAllVoucher from '../screens/Admin/GetAllVoucher';
import Account from '../screens/Admin/AccountScreen/Account';
import CheckOutScreen from '../screens/CheckOutScreen/CheckOutScreen'
const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
         <MainStack.Screen name="SignInScreen" component={SignInScreen} />
      <MainStack.Screen name="MainTabs" component={MainTabs} />
     
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <MainStack.Screen name="ForgotPassWordScreen" component={ForgotPasswordScreen} />
      <MainStack.Screen name="DetailAccount" component={DetailsAcc} />
      <MainStack.Screen name="Edit" component={Edit} />
      <MainStack.Screen name="DetailsScreen" component={DetailsScreen} />
      <MainStack.Screen name="Cart" component={Cart} />
      <MainStack.Screen name="CheckOut" component={CheckOutScreen}/>
      <MainStack.Screen name="EditCart" component={EditCartScreen} />
      <MainStack.Screen name="HomeAD" component={HomeAD} />
      <MainStack.Screen name="AddVoucher" component={AddVoucher} />
      <MainStack.Screen name="Account" component={Account} />
      <MainStack.Screen name="Home" component={HomeScreen}/>
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitleStyle: styles.headerTitle,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"file-tray-full-outline"} />
          ),
        })}
        
      />
     
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Cart" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"cart-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Account" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};




function Screen() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default Screen
