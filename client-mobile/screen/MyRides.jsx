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
import CardMyRides from "../components/CardMyRides"

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

 
  return (
    <View className="flex-1 bg-white">
      <View className="mt-8 mx-8">
        <Text className="text-3xl">My Rides</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <CardMyRides item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyRides;
