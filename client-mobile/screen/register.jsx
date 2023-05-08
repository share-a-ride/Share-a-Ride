import React, { useLayoutEffect, useState } from "react";
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

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      // show an error message or alert
      return;
    }
    navigation.navigate("Login")
    // handle registration logic here
  };

  const handleUploadIdCard = () => {
    // handle upload ID card logic here
  };

  const handleUploadSelfie = () => {
    // handle upload selfie logic here
  };

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#8e9eb6"
        value={username}
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
        onPress={handleUploadIdCard}
      >
        <Text style={[styles.uploadButtonText, { color: "#1f2d5a" }]}>
          Upload ID Card Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.uploadButton, { backgroundColor: "#fff" }]}
        onPress={handleUploadSelfie}
      >
        <Text style={[styles.uploadButtonText, { color: "#1f2d5a" }]}>
          Upload Selfie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
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
