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
} from "@expo/vector-icons";
import React from "react";

const CardRequestRides = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 mt-3 items-center  ">
      <View className="mx-6 px-4 py-2 bg-background w-10/12 text-white shadow-3xl shadow-black-500/50 rounded-md mt-4 space-x-2">
        <View className="flex-row  "> 
        <View className="flex-row space-x-3  w-full justify-between">
          <View className="flex-row space-x-3">
              <View className="bg-slate-600 w-16 h-16 rounded-full border border-slate-400 ">
                <Image
                  className="w-full h-full object-cover rounded-full "
                  source={{ uri: item?.image }}
                />
              </View>
              <View className="justify-center items-start text-center">
                <Text className="text-white text-xl">{item?.user}</Text>
              </View>
          </View>
            <View>
            <TouchableOpacity onPress={() => {
              navigation.navigate("ChatBox",{item});
            }}>
              <Ionicons name="chatbox-ellipses-outline" size={30} color="white" />
            </TouchableOpacity>
            </View>
        </View>

        <View>
          <Text></Text>
        </View>
        </View>

        
        <View className="flex-row justify-between mt-2">
          <View>
          <Text className="text-white"> Ratings </Text> 
          <Text className="text-white"> 4,5/5 </Text> 

          </View>

          <View className="flex-row space-x-2">
          <TouchableOpacity
          className=" py-3 rounded-lg px-2 bg-sky-400 "
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
               <Text className="text-center text-white text-[16px]">Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className=" py-3 rounded-lg px-3 bg-red-400 "
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
               <Text className="text-center  text-white text-[16px]">Reject</Text>
          </TouchableOpacity>
          </View>
          
        </View>

        </View>
    </View>
  );
};

export default CardRequestRides;
