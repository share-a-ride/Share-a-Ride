import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { handleRegister } from "../store/action/actionCreator";
import axios from "axios";
const BASE_URL = " https://a644-36-73-33-46.ngrok-free.app";

export default function RegisterScreen() {
  const [idCardImg, setidCardImg] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation();
  const [name, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    type();
    console.log("masuk");
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setidCardImg(result.assets[0].uri);
    }
  };

  const pickPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0]);
    }
  };

  const handleRegisterSubmit = async () => {
    let toInput = {
      name,
      email,
      password,
      phoneNumber,
      photo,
      idCardImg,
    };
    console.log(toInput, "<<<<<dari action");
    try {
      if (password !== confirmPassword) {
        // show an error message or alert
        return;
      }
      // let toInput = {
      //   name,
      //   email,
      //   password,
      //   phoneNumber,
      //   photo,
      //   idCardImg,
      // };

      // let data = await axios.post(BASE_URL + "/users/register", toInput);
      // // Swal.fire("Good job!", "Success Register!", "success");
      // dispatch(registerSuccess(data));
    } catch (error) {
      console.log(error);
      // Swal.fire("Cancelled", `${error.response.data.message}`, "error");
    }
    navigation.navigate("Login");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    console.log( photo)
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#8e9eb6"
        value={name}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#8e9eb6"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8e9eb6"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#8e9eb6"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#8e9eb6"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#8e9eb6"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#8e9eb6"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <MaterialCommunityIcons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="#8e9eb6"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.uploadButton, { backgroundColor: "#fff" }]}
        onPress={pickImage}
      >
        <Text style={[styles.uploadButtonText, { color: "#1f2d5a" }]}>
          Upload ID Card Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.uploadButton, { backgroundColor: "#fff" }]}
        onPress={pickPhoto}
      >
        <Text style={[styles.uploadButtonText, { color: "#1f2d5a" }]}>
          Upload Selfie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegisterSubmit}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    color: "#000",
  },
  uploadButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: "#1f2d5a",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#3a66b2",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  passwordContainer: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
  passwordToggle: {
    marginRight: 10,
  },
});
