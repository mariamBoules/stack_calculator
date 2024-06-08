import { StyleSheet, View, Text } from "react-native";
import Button from "./Button.js";
import {
  enter,
  pressNum,
  operation,
  clear,
  swap,
  toggleNegative,
} from "./modules.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TouchableOpacity } from "react-native";

const baseNumber = {
  backgroundColor: "#424242",
  textAlign: "right",
  padding: 10,
  fontSize: 30,
  fontWeight: "bold",
  borderWidth: 1,
  borderColor: "#fff",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  buttom: {
    flex: 1,
  },

  push: {
    color: "pink",
    ...baseNumber,
  },
  replace: {
    color: "#2E71E5", //blue
    ...baseNumber,
  },
  append: {
    color: "white",
    ...baseNumber,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink",
    borderBottomWidth: 2,
    borderColor: "mistyrose",
  },
});
const App = ({
  calculatorState: { stack, inputState },
  pressNumbwithDispatch,
  enterAcion,
  operationAction,
  clearAction,
  swapAction,
  toggleNegativeAction,
}) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <TouchableOpacity onPress={() => toggleNegativeAction(2)}>
        <Text style={styles.append}>{stack[2] || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>toggleNegativeAction(1)}>
        <Text style={styles.append}>{stack[1] || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>toggleNegativeAction(0)}>
        <Text style={styles[inputState]}>{stack[0] || 0}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttom}>
      <View style={styles.row}>
        <Button text="CLEAR" onPress={clearAction} />
        <Button text="^" onPress={operationAction} />
        <Button text="SWAP" onPress={swapAction} />
        <Button text="/" onPress={operationAction} />
      </View>

      <View style={styles.row}>
        <Button text="9" onPress={pressNumbwithDispatch} />
        <Button text="8" onPress={pressNumbwithDispatch} />
        <Button text="7" onPress={pressNumbwithDispatch} />
        <Button text="X" onPress={operationAction} />
      </View>

      <View style={styles.row}>
        <Button text="6" onPress={pressNumbwithDispatch} />
        <Button text="5" onPress={pressNumbwithDispatch} />
        <Button text="4" onPress={pressNumbwithDispatch} />
        <Button text="-" onPress={operationAction} />
      </View>

      <View style={styles.row}>
        <Button text="3" onPress={pressNumbwithDispatch} />
        <Button text="2" onPress={pressNumbwithDispatch} />
        <Button text="1" onPress={pressNumbwithDispatch} />
        <Button text="+" onPress={operationAction} />
      </View>

      <View style={styles.row}>
        <Button text="0" onPress={pressNumbwithDispatch} />
        <Button text="." onPress={pressNumbwithDispatch} />
        <Button text="ENTER" onPress={enterAcion} special />
      </View>
    </View>
  </View>
);

export default connect(
  (state) => ({ calculatorState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNumbwithDispatch: pressNum,
        enterAcion: enter,
        operationAction: operation,
        clearAction: clear,
        swapAction: swap,
        toggleNegativeAction: toggleNegative,
      },
      dispatch
    )
)(App);
