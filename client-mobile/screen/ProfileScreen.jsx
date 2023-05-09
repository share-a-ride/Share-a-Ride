import { View, Text, Modal, TouchableOpacity,Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import ModalAddVihecle from "../components/ModalAddVihecle";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "John Doe",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3h_e9Ifvatg8isv6u1lwAmBCk4EneSGLccyF81Q&s",
    address: "jl.jendral ahmad yani no.10",
    phoneNumber:"876546889",
    rating:4.5,
    review:142,
  });

  const changeModalVisible=(bol)=>{
    setModalVisible(bol)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="relative w-full max-w-2xl h-full  bg-white">
       <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            changeModalVisible(false);
          }}>
            <ModalAddVihecle
            changeModalVisible={changeModalVisible}
            />
        </Modal>
      <View className="mx-6 my-2">
      <TouchableOpacity  onPress={() => {
          navigation.navigate("Home");
        }}>
       <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      </View>
      <View className="flex-row mx-8 my-6 items-center">
        <View className="w-24 h-24 bg-slate-600 rounded-full border border-slate-600 ">
        <Image
                className="w-full h-full object-cover rounded-full "
                source={{ uri: user?.image }}
              />
        </View>
        <View className="p-8">
          <Text className="text-2xl">{user?.name}</Text>
          <Text className="text-slate-700 ">jakarta, Indonesia</Text>
        </View>
      </View>

      <View className="flex-row  mx-8 space-x-4 mb-2 items-center">
        <FontAwesome name="phone" size={24} color="black" />
        <Text>+62 {user?.phoneNumber}</Text>
      </View>

      <View className="flex-row  mx-8 space-x-4 items-center">
        <Entypo name="address" size={24} color="black" />
        <Text> {user?.address}</Text>
      </View>
      <View className="flex-row  mx-8 mt-3 space-x-4 items-center">
        <FontAwesome5 name="car" size={24} color="black" />
        <Text> Avanza </Text>
        <Text> B - 60789 </Text>
      </View>

      <View className="flex-row   mt-6">
        <View className="flex-1 items-center justify-center py-6 border border-slate-400 rounded-lg">
          <Text className=""> Ratings</Text>
          <Text className="text-2xl font-semibold">{user?.rating} / 5 </Text>
        </View>
        <View className="flex-1 items-center justify-center py-6 border border-slate-400 rounded-lg">
          <Text>Review </Text>
          <Text className="text-2xl font-semibold">{user?.review}</Text>
        </View>
      </View>

     
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyRides");
        }}
      >
        <View className="flex-row space-x-4 items-center  mt-2 mx-6 p-2 py-4 bg-slate-100 rounded-md">
          <MaterialIcons name="payment" size={24} color="black" />
          <Text className="text-xl">My Rides</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RideRequest");
        }}
      >
        <View className="flex-row space-x-4 items-center  mt-2 mx-6 p-2 py-4 bg-slate-100 rounded-md">
          <AntDesign name="disconnect" size={24} color="black" />
          <Text className="text-xl">Requested Ride</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <View className="flex-row space-x-4 items-center  mt-2 mx-6 p-2 py-4 bg-slate-100 rounded-md">
         <AntDesign name="pluscircleo" size={24} color="black" />
          <Text className="text-xl">Add Vehicle</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <View className="flex-row space-x-4 items-center  mt-14 mx-6 p-2 py-4 bg-slate-100 rounded-md">
          <SimpleLineIcons name="logout" size={24} color="red" />
          <Text className="text-xl text-red-600">Log out</Text>
        </View>
      </TouchableOpacity>



    </View>


  );
};

export default ProfileScreen;