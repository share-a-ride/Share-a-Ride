import React, { useLayoutEffect, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import CardPost from "../components/CardPost";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "https://9e9e-36-73-33-46.ngrok-free.app";

const data = [
  {
    id: "1",
    email: "jhone@mail.com",
    startLocation: "New York City",
    destination: "Boston",
    departureTime: "2023-05-10 10:00:00",
    arrivalTime: "2023-05-10 13:00:00",
    price: 50,
    seats: 4,
    seatsFilled: 1,
    user: "John Doe",
    image:
      "https://cdn.medcom.id/dynamic/content/2019/06/04/1029348/uPzxU4aEhF.jpg?w=700",
  },
  {
    id: "2",
    email: "jane@mail.com",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 3,
    user: "Jane Doe",
    image:
      "https://cdn.idntimes.com/content-images/community/2019/09/042635a0301ea0e29c95ee41bf05cad2-eb5fa26f5a5d889ef9066706f9b5eb7f.jpg",
  },
  {
    id: "3",
    email: "BangJefri@mail.com",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "Bang Jefri",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Jefri_Nichol_in_2019.png",
  },
  {
    id: "4",
    email: "Ariel@mail.com",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "Ariel Noah",
    image:
      "https://asset.kompas.com/crops/tmCWUWBKgJMx8BaWfmETsihsGgU=/0x0:0x0/750x500/data/photo/2022/08/30/630ddbb6c1787.jpeg",
  },
  {
    id: "5",
    email: "DilanMilea@mail.com",

    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    seatsFilled: 1,
    user: "DilanMilea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8ROiqjQgZEmCVP2jwpazlCGeZp63KYs5M1fLHViZ&s",
  },
];

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [user, setCurrentUser] = useState({});
  const [rides, setRides] = useState([]);

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/users/currentUser", {
        headers: { access_token: await AsyncStorage.getItem("access_token") },
      });
      console.log(data, "ini data");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRides = async () => {
    const { data } = await axios.get(BASE_URL + "/rides", {
      headers: { access_token: await AsyncStorage.getItem("access_token") },
    });
    setRides(data);
  };
  useEffect(() => {
    fetchCurrentUser();
    fetchRides();
    // console.log(user.name, "ini user");
    console.log(rides, "ini rides");
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // <View><Text>DISINI</Text></View>
    <View style={styles.container}>
      <View className="flex-row justify-between items-center  w-11/12 mt-5 mb-5 bg-slate-200 py-3 px-4 rounded-md">
        <View>
          <Text className="">Share A Ride</Text>
          <Text className="text-xl text-green-900">Welcome, {user.name}!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View className="w-12 h-12 bg-slate-300 rounded-md items-center justify-center">
            <Image
              className="w-full h-full "
              source={{
                uri: user.image,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-end items-end w-full">
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => navigation.navigate("PostRide")}>
            <MaterialIcons name="add-location-alt" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={24}
              color="#8e9eb6"
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={rides}
        renderItem={({ item }) => <CardPost item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2d5a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  list: {
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftText: {
    fontSize: 16,
    marginTop: 5,
    color: "#1f2d5a",
    textAlign: "left",
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: "#1f2d5a",
  },
  right: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2d5a",
    marginBottom: 10,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seats: {
    fontSize: 16,
    color: "#8e9eb6",
    marginRight: 10,
  },
  user: {
    fontSize: 16,
    color: "#8e9eb6",
  },
  filter: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});
