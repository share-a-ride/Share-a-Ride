import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import {logo_black} from "../assets/image/logo-black.png"



export default function HomeScreen({ navigation }) {
 

  return (
    <View style={styles.container}>
      

      <View style={styles.body}>
        <View style={styles.jumbotron}>
          <Image
            source={{
              uri: "https://i.imgur.com/1vsABTT.png",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.conten}>
          <ScrollView>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  nav: {
    flex: 1,
  },
  navHeader: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 32,
    fontFamily: "serif",
    margin: 0,
  },
  textTop: {
    fontSize: 8,
    fontFamily: "serif",
    margin: 0,
  },
  navMenu: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textMenu: {
    margin: 4,
  },

  body: {
    flex: 4,
    backgroundColor: "white",
  },
  jumbotron: {
    flex: 1,
    margin: 7,
    backgroundColor: "green",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  conten: {
    flex: 3,
    backgroundColor: "white",
  },
});
