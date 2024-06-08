import react from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

const baseContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderRightWidth: 2,
  borderColor: "mistyrose",
};
const baseText = {
  fontSize: 32,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
    backgroundColor: "#424242",
    ...baseContainer,
  },
  text: {
    ...baseText,
  },
  specialText: {
    ...baseText,
    color: "#fff",
  },
});
const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
