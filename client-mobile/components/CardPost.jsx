import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CardPost = ({ item }) => {
  const formatIndonesianTime = (time) => {
    const dateObj = new Date(time);
  
    const day = dateObj.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
  
    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    return `${formattedDate} | ${formattedTime}`;
  };
  const navigation = useNavigation();
  return (
    <GestureDetector
      gesture={
        (doubleTap = Gesture.Tap()
          .maxDuration(250)
          .numberOfTaps(2)
          .onStart(() => {
            // navigation.navigate("Details", { id:item.id });
            navigation.navigate("Details", { item });
          }))
      }
    >
      <View style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.leftText}>{item.startLocation}</Text>
          <Text style={styles.leftText}>
            {formatIndonesianTime(item.departureTime)}
          </Text>
          <View style={styles.line} />
          <Text style={styles.leftText}>{item.destination}</Text>
          <Text style={styles.leftText}>{formatIndonesianTime(item.arrivalTime)}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>Rp.{item.price}</Text>
          <View style={styles.bottom}>
            <Text style={styles.seats}>seats: {item.seats}</Text>
          </View>
          <View className="flex flex-row items-center ">
            <Text className="text-slate-500 mr-2">{item?.name}</Text>
            <View className="bg-slate-200 rounded-full border w-10 h-10 justify-self-end ">
              <Image
                className="w-full h-full object-cover rounded-full "
                source={{ uri: item?.image }}
              />
            </View>
          </View>
        </View>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2d5a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  list: {
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftText: {
    fontSize: 16,
    marginTop: 5,
    color: "#1f2d5a",
    textAlign: "left",
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: "#1f2d5a",
  },
  right: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2d5a",
    marginBottom: 10,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seats: {
    fontSize: 16,
    color: "#8e9eb6",
    marginRight: 10,
  },
  user: {
    fontSize: 16,
    color: "#8e9eb6",
  },
  filter: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default CardPost;
