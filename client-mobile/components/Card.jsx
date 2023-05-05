import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Card({ post }) {
  const navigation = useNavigation();
  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      navigation.navigate("Details", {post});
    });

  return (
    <View>
      <GestureDetector gesture={doubleTap}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={{
                uri: post?.imgUrl,
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text>{post?.title}</Text>
            <Text style={styles.cardText}>
              {" "}
              {"\t"}{post?.content}.
            </Text>
          </View>
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "grey",
    marginHorizontal: 15,
    marginTop: 10,
    height: 100,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#f0ffff",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
  },
  cardContent: {
    flex: 2,
    backgroundColor: "white",
    padding: 10,
  },
  cardText: {
    textAlign: "justify",
  },
});
