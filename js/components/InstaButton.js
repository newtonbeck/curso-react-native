import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const InstaButton = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>Logar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#3095f3",
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff"
  }
});
