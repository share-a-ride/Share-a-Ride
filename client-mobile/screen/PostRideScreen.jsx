import { View, Text, TouchableOpacity,TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import axios from 'axios'
const BASE_URL = "http://192.168.100.167:4002";
import AsyncStorage from "@react-native-async-storage/async-storage";



const PostRideScreen = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arivalTime, setArivalTime] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");

 

  const handleRide = async () => {
    const toPost = {
      startLocation:origin,
          destination,
          departureTime,
          arrivalTime:arivalTime,
          price,
          seats,
    }
   
    // console.log(data);
    try {
      console.log(toPost,"<<<<< data add ne post");
      const access_token = await AsyncStorage.getItem("access_token");
      const res = await axios.post(
        BASE_URL + "/rides",
        toPost,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "access_token": access_token,
          },
        }
      );
      // console.log(res);
      if (!res.ok) {
        throw new Error(await res.text());
      }

      console.log("Uploaded");
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Home");
  };



  return (
    <View className="flex-1 bg-white">
       <View className="mx-6 my-4 mb-4 ">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View className="mx-10 mt-2 mb-12">
        <Text className="text-4xl font-bold">Post A Ride</Text>
      </View>

      <TextInput
        name="origin"
        className="bg-background py-4 w-10/12 text-white text-lg   mx-auto rounded-2xl mb-4 px-4"
        placeholder="Origin"
        placeholderTextColor="#8e9eb6"
        onChangeText={setOrigin}
        value={origin}
      />
      <TextInput
        name="destination"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Destination"
        placeholderTextColor="#8e9eb6"
        onChangeText={setDestination}
        value={destination}
      />
      <TextInput
        keyboardType="date"
        name="departureTime"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Departure Time"
        placeholderTextColor="#8e9eb6"
        onChangeText={setDepartureTime}
        value={departureTime}
      />
      <TextInput
        keyboardType="date"
        name="arivalTime"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Arival Time"
        placeholderTextColor="#8e9eb6"
        onChangeText={setArivalTime}
        value={arivalTime}
      />
    
      <TextInput
        name="price"
        keyboardType="numeric"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Price"
        placeholderTextColor="#8e9eb6"
        onChangeText={setPrice}
        value={price}
      />
      <TextInput
        name="seats"
        keyboardType="numeric"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Seats"
        placeholderTextColor="#8e9eb6"
        onChangeText={setSeats}
        value={seats}
      />

      

      <TouchableOpacity
        className="bg-accent mt-8 py-4 w-2/5 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={handleRide}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostRideScreen;
