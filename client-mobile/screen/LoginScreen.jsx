import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.imgur.com/b8kFuGs.png",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.head}></View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          
          <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
          
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Register </Text>
          
        </TouchableOpacity>
        </View>
       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
    flex: 1,
  },
  head: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    
  },
  input: {
    marginTop:30 ,
    height: 40,
    padding:5,
    borderColor: "white",
    borderWidth: 1,
    width: "90%"
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
   
    height: 40,
    width: "50%",
    marginTop:30 ,
 },
 submitButtonText:{
    color: 'white',
    textAlign: "center",
 }
});
