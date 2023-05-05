import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    startLocation: "New York City",
    destination: "Boston",
    departureTime: "2023-05-10 10:00:00",
    arrivalTime: "2023-05-10 13:00:00",
    price: 50,
    seats: 4,
    user: "John Doe",
  },
  {
    id: "2",
    startLocation: "San Francisco",
    destination: "Los Angeles",
    departureTime: "2023-05-15 12:00:00",
    arrivalTime: "2023-05-15 18:00:00",
    price: 100,
    seats: 7,
    user: "Jane Doe",
  },
];

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [user, setUser] = useState("John Doe");

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.leftText}>{item.startLocation}</Text>
        <Text style={styles.leftText}>{item.departureTime}</Text>
        <View style={styles.line} />
        <Text style={styles.leftText}>{item.destination}</Text>
        <Text style={styles.leftText}>{item.arrivalTime}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.bottom}>
          <Text style={styles.seats}>{item.seats} seats</Text>
          <Text style={styles.user}>Posted by {item.user}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user}!</Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    color: '#1f2d5a',
    textAlign: 'left',
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
});
