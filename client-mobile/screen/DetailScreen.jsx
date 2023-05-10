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
import axios from "axios";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "http://192.168.100.167:4002";

const DetailScreen = () => {
  //  const formatIndonesianTime = (time) => {
  //   const dateObj = new Date(time);

  //   const day = dateObj.getDate();
  //   const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
  //   const year = dateObj.getFullYear();
  //   const hours = dateObj.getHours();
  //   const minutes = dateObj.getMinutes();

  //   const formattedDate = `${day} ${month} ${year}`;
  //   const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  //   return `${formattedDate} | ${formattedTime}`;
  // };
  // const [rides, setRides] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  // const { id } = route.params;
  const rides = route.params.item;

  console.log(route.params, "ini route params");

  // const fetchDetailRide = async () => {
  //   const { data } = await axios.get(BASE_URL + `/rides/${id}`, {
  //     headers: { access_token: await AsyncStorage.getItem("access_token") },
  //   });
  //   setRides(data);
  // };
  // console.log(rides, " <<<< ini rides dari screeen details");
  // useLayoutEffect(() => {
  //   fetchDetailRide();
  //   console.log(rides, "ini rides", id);
  //   console.log(rides.UserRides, "ini user rides");
  //   navigation.setOptions({
  //     headerShown: true,
  //   });
  // }, []);
  return (
    <View className="flex-1 bg-background">
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
              source={rides.UserRides[0].User.photo}
            />
          </View>
          <View>
            <Text className="font-semibold text-2xl ">
              {rides.UserRides[0].User.name}
            </Text>
            {/* <Text className="text-[12px]">{rides.UserRides[0].User.photo}</Text> */}
          </View>
        </View>
      </View>

      <View className="flex-row mt-10 mx-6 px-4 py-2 bg-slate-100 rounded-md items-center justify-between ">
        <View>
          <View className="flex-row space-x-1">
            <Text className=" text-sky-700 font-bold text-[16px]">
              {rides.departureTime}
            </Text>
            <Octicons name="dot-fill" size={24} color="grey" />
            <Text className=" text-sky-700 font-bold  text-[16px]  ">
              {`${rides.seats}/12 Seats`}
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
              <Text>{rides.startLocation}</Text>
              <Text className="text-[11px]">{rides.departureTime}</Text>
            </View>

            <View className="h-[70px] w-1"></View>
            <View>
              <Text>{rides.destination}</Text>
              <Text className="text-[11px]">{rides.arrivalTime}</Text>
            </View>
          </View>
          <View className="mr-4">
            <Text className="text-2xl font-bold">Rp.{rides.price}</Text>
          </View>
        </View>
      </View>

      <View className="mt-6 mx-6 px-4 py-4 bg-slate-100 rounded-md shadow-md">
        <Text className="text-lg font-semibold text-slate-600">
          Info Pengemudi dan Kendaraan
        </Text>
        <View className="flex-row items-center mt-2 space-x-2">
          <Ionicons name="md-car" size={24} color="grey" />
          <Text>{rides.Vehicle ? rides.Vehicle.type : `Not Inputed`}</Text>
        </View>

        <View className="mt-2 flex-row space-x-2">
          <FontAwesome name="phone" size={24} color="grey" />
          <Text>{rides.UserRides[0].User.phoneNumber}</Text>
        </View>
        <View className="flex-row items-center space-x-2 mt-2 pr-2 ">
          <AntDesign name="exclamationcircle" size={24} color="grey" />
          <Text>
            Jl. KH Abdullah Syafei No.12, RT.12/RW.9, Bukit Duri, Kec. Tebet,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12840
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatBox", { item: rides.UserRides[0].User })
        }
      >
        <View className="flex-row mt-6 mx-6 px-4 py-4 bg-slate-100 rounded-md shadow-md space-x-2 items-center ">
          <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
          <Text className="text-xl">Chat</Text>
        </View>
      </TouchableOpacity>

      <View className="flex-1  justify-end ">
        <TouchableOpacity onPress={() => navigation.navigate("MyRides")}>
          <View className="bg-green-500 py-4 px-6 rounded-lg w-full">
            <Text className="text-3xl text-center">Booke This Ride</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
