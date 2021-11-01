import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = ({ name, subtitle, subtitleExtra, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.pageBackground}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {subtitle}
          <Text style={styles.subtitleExtra}>{subtitleExtra}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton type="primary" content="Custom Order" />
        <StyledButton type="secondary" content="Existing Inventory" />
      </View>
    </View>
  );
};

export default CarItem;
