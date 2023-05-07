import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import LandingScreen from "../screen/landing";
import RegisterScreen from "../screen/register";
import DetailScreen from "../screen/DetailScreen"
import ProfileScreen from "../screen/ProfileScreen"
import { SafeAreaView} from 'react-native';
import MyRides from "../screen/MyRides";
import PostRideScreen from "../screen/PostRideScreen";
import ChatScreen from "../screen/ChatScreen";


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MyRides" component={MyRides} />
        <Stack.Screen name="PostRide" component={PostRideScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
  );
}
