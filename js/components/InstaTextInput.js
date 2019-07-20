import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
export const InstaTextInput = propriedades => {
  return (
    <View style={styles.container}>
      <Text>{propriedades.label}: </Text>
      <TextInput
        style={styles.input}
        value={propriedades.value}
        onChangeText={propriedades.onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignSelf: "stretch" },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: "#222",
    marginBottom: 15
  }
});
