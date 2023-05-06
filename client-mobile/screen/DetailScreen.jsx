import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 bg-primary">
      <View className="mx-6 my-4 mb-4 ">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-between mx-6 px-4 py-2 bg-slate-100 rounded-md">
        <View className="flex-row items-center space-x-4">
          <View className="bg-slate-600 w-16 h-16 rounded-full border border-slate-400 ">
            <Image
              className="w-full h-full object-cover rounded-full "
              source={{ uri: item?.image }}
            />
          </View>
          <View>
            <Text className="font-semibold text-2xl ">{item?.user}</Text>
            <Text className="text-[12px]">{item?.startLocation}</Text>
          </View>
        </View>
      </View>

      <View className="flex-row mt-10 mx-6 px-4 py-2 bg-slate-100 rounded-md items-center justify-between ">
        <View>
          <View className="flex-row space-x-1">
            <Text className=" text-sky-700 font-bold text-[16px]">
              27 May - 10:00
            </Text>
            <Octicons name="dot-fill" size={24} color="grey" />
            <Text className=" text-sky-700 font-bold  text-[16px]  ">
              4/5 Seat
            </Text>
          </View>
        </View>
        <View>
          <FontAwesome5 name="car-side" size={24} color="black" />
        </View>
      </View>

      <View className="flex-row mx-6 px-4 py-2 bg-slate-100 rounded-md mt-4 space-x-2">
        <View className="justify-center items-center text-center">
          <Octicons name="dot-fill" size={24} color="grey" />
          <View className="h-[85px] w-1 bg-slate-500"></View>
          <Octicons name="dot-fill" size={24} color="grey" />
        </View>

        <View className="flex-row w-full justify-between">
          <View>
            <View>
              <Text>{item?.startLocation}</Text>
              <Text className="text-[11px]">{item?.departureTime}</Text>
            </View>

            <View className="h-[70px] w-1"></View>
            <View>
              <Text>{item?.destination}</Text>
              <Text className="text-[11px]">{item?.arrivalTime}</Text>
            </View>
          </View>
          <View className="mr-4" >
            <Text className="text-2xl font-bold">$ {item?.price}</Text>
          </View>
        </View>
      </View>

      <View className="mt-6 mx-6 px-4 py-4 bg-slate-100 rounded-md shadow-md">
        <Text className="text-lg font-semibold text-slate-600">
          Info Pengemudi dan Kendaraan
        </Text>
        <View className="flex-row items-center mt-2 space-x-2">
          <Ionicons name="md-car" size={24} color="grey" />
          <Text>Avanza</Text>
        </View>

        <View className="mt-2 flex-row space-x-2">
          <FontAwesome name="phone" size={24} color="grey" />
          <Text>+62 82145612312</Text>
        </View>
        <View className="flex-row items-center space-x-2 mt-2 pr-2 ">
          <AntDesign name="exclamationcircle" size={24} color="grey" />
          <Text>
            Jl. KH Abdullah Syafei No.12, RT.12/RW.9, Bukit Duri, Kec. Tebet,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12840
          </Text>
        </View>
      </View>

      <View className="flex-1  justify-end ">
        <TouchableOpacity onPress={()=>navigation.navigate("MyRides")}>
          <View className="bg-green-500 py-4 px-6 rounded-lg w-full">
            <Text className="text-3xl text-center">Booke This Ride</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
