import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const PostRideScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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

      <View className="mx-10 mt-6 mb-12">
        <Text className="text-4xl font-bold">Post A Ride</Text>
      </View>

      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Origin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Destination
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Departure Time
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Arrival Time
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Price
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-background py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Seats
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-accent mt-8 py-4 w-2/5 items-center justify-center mx-auto rounded-2xl mb-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-white text-2xl text-center font-semibold">
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostRideScreen;
