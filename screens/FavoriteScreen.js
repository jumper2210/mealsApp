import React from "react";
import { View, StyleSheet, Text } from "react-native";
const FavoriteScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FavoriteScreen;
