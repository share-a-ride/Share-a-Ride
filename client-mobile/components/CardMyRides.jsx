import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";import React from 'react'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "http://192.168.100.167:4002";


const CardMyRides = ({item}) => {
  const navigation = useNavigation();

  const handlePayments= async () => {
    try {
      const { data } = await axios.post(
        BASE_URL + `/rides/generate-midtrans-token/${item.id}`,{},
        {
          headers: {
            "access_token": await AsyncStorage.getItem("access_token"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(data,"<<<<dari card myride payments");//alert succes untuk book
      navigation.navigate("Payment",data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 mt-4 items-center  ">
    <View className="flex-row mx-6 px-4 py-2 bg-background text-white shadow-3xl shadow-black-500/50 rounded-md mt-4 space-x-2">
      <View className="justify-center items-center text-center">
        <Octicons name="dot-fill" size={24} color="grey" />
        <View className="h-[85px] w-1 bg-slate-500"></View>
        <Octicons name="dot-fill" size={24} color="grey" />
      </View>

      <View className="flex-row w-full justify-between">
        <View>
          <View>
            <Text className="text-white">{item?.Ride.startLocation}</Text>
            <Text className="text-[11px] text-white">{item?.departureTime}</Text>
          </View>

          <View className="h-[70px] w-1"></View>
          <View>
            <Text className="text-white">{item?.Ride.destination}</Text>
            <Text className="text-[11px] text-white">{item?.arrivalTime}</Text>
          </View>
        </View>
        <View className="mr-1 items-center">
          <Text className="text-2xl font-bold text-white">Rp {item?.Ride.price}</Text>
          <Text className="font-bold my-8 text-white">Seat : {item?.Ride.seats}</Text>
          <TouchableOpacity
          className=" py-3 rounded-lg px-5 bg-sky-400 "
            onPress={handlePayments}
          >
            <Text className="text-center text-white text-[16px]"> {item?.status}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  )
}

export default CardMyRides