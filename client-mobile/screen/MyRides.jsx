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
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const data = [
  {
    id: "1",
    startLocation: "New York City",
    destination: "Boston",
    departureTime: "2023-05-10 10:00:00",
    arrivalTime: "2023-05-10 13:00:00",
    price: 50,
    seats: 4,
    seatsFilled: 1,
    user: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3h_e9Ifvatg8isv6u1lwAmBCk4EneSGLccyF81Q&s",
  },
  {
    id: "2",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 3,
    user: "Jane Doe",
    image:
      "https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg",
  },
  {
    id: "3",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3h_e9Ifvatg8isv6u1lwAmBCk4EneSGLccyF81Q&s",
  },
  {
    id: "4",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3h_e9Ifvatg8isv6u1lwAmBCk4EneSGLccyF81Q&s",
  },
  {
    id: "5",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3h_e9Ifvatg8isv6u1lwAmBCk4EneSGLccyF81Q&s",
  },
];

const MyRides = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const card = ({ item }) => (
    <View className="flex-1 mt-4 items-center ">
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
          <View className="mr-1 items-center">
            <Text className="text-2xl font-bold">$ {item?.price}</Text>
            <Text className="font-bold my-8">Seat : {item?.seats}</Text>
            <TouchableOpacity
            className=" py-3 rounded-lg px-5 bg-sky-400"
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text className="text-center text-[16px]">Paid</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <View className="mt-8 mx-8">
        <Text className="text-3xl">My Rides</Text>
      </View>

      <FlatList
        data={data}
        renderItem={card}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyRides;
