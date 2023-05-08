import React, { useLayoutEffect, useState, useEffect } from "react";
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
import CardPost from "../components/CardPost"
import { useSelector, useDispatch } from "react-redux"
import { fetchDataPost } from "../store/action/actionCreator";

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

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [user, setUser] = useState("John Doe");

  const [ ride ] = useSelector((state) => {
    console.log(state, "<><><><><><><><><><><><><");
    return state
  })
  
  useEffect(() => {
    dispatch(fetchDataPost())
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  return (
    <View style={styles.container}>
      <View className="flex-row justify-between items-center  w-11/12 mt-5 mb-5 bg-slate-200 py-3 px-4 rounded-md">
        <View>
          <Text className="">Share A Ride</Text>
          <Text className="text-xl text-green-900">Welcome, {user}!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View className="w-12 h-12 bg-slate-300 rounded-md items-center justify-center">
            <Image
              className="w-full h-full "
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-end items-end w-full">
        <View style={styles.filter}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PostRide")}
          >
            <MaterialIcons name="add-location-alt" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.filter}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Landing")}
          >
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
        data={ride}
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
