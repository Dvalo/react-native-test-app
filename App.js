import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CarItem from "./components/CarItem/CarItem";
import cars from "./utils/cars";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cars}
          renderItem={({ item }) => (
            <CarItem
              key={item.name}
              name={item.name}
              subtitle={item.tagline}
              subtitleExtra={item.taglineCTA}
              image={item.image}
            />
          )}
          showsVerticalScrollIndicator={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
  },
});
