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
import CardRequestRides from "../components/CardRequestRides"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "https://9e9e-36-73-33-46.ngrok-free.app";


const RideRequestScreen = () => {
  const navigation = useNavigation();

  const fetchRequetedRides = async () => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

 
  return (
    <View className="flex-1 bg-white">
        <View className="mx-6 my-4  ">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View className="mt-4 mx-8">
        <Text className="text-3xl">Request Ride</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <CardRequestRides item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RideRequestScreen;


