import { View, Text, SafeAreaView,Button, TouchableOpacity,  StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from "react";

const DetailScreen = () => {
   const navigation = useNavigation()
   useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])
  return (
    <SafeAreaView className="flex-1 relative mt-10">
    <View>
      <Text>DetailScreen</Text>
      <TouchableOpacity  onPress={()=>{navigation.navigate("Home")}}>
        <Text className="bg-sky-300 p-4 rounded-md m-auto" >Home</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default DetailScreen