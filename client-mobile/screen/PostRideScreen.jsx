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

const PostRideScreen = () => {
  const navigation = useNavigation();
  const [ride,setRide]=useState({
    origin: '',
    destination: '',
    departureTime: '',
    arivalTime: '',
    price: '',
    seats: '',
  })
  console.log(ride.seats)
  function handleChange(e){
    const{value,name}= e.target
    setRide({
      ...ride, 
      [name] : value
    })
  }


  
  const handleNewRide = (e) => {
    e.preventDefault()

    navigation.navigate("Home")
    // handle registration logic here
  };

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

      <View className="mx-10 mt-2 mb-12">
        <Text className="text-4xl font-bold">Post A Ride</Text>
      </View>

      <TextInput
        name="origin"
        className="bg-background py-4 w-10/12 text-white text-lg   mx-auto rounded-2xl mb-4 px-4"
        placeholder="Origin"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({origin:newText})}
        value={ride.origin}
      />
      <TextInput
        name="destination"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Destination"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({destination:newText})}
        value={ride.destination}
      />
      <TextInput
        name="departureTime"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Departure Time"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({departureTime:newText})}
        value={ride.departureTime}
      />
      <TextInput
        name="arivalTime"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Arival Time"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({arivalTime:newText})}
        value={ride.arivalTime}
      />
    
      <TextInput
        name="price"
        keyboardType="numeric"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Price"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({price:newText})}
        value={ride.price}
      />
      <TextInput
        name="seats"
        keyboardType="numeric"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Vehicle"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({seats:newText})}
        value={ride.seats}
      />
      <TextInput
        name="seats"
        keyboardType="numeric"
        className="bg-background text-white text-lg  py-4 w-10/12 items-center justify-center mx-auto rounded-2xl mb-4 px-4"
        placeholder="Seats"
        placeholderTextColor="#8e9eb6"
        onChangeText={newText => setRide({seats:newText})}
        value={ride.seats}
      />

      

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
