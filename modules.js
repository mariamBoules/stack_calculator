const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const OPERATION = "OPERATION";
const CLEAR = "CLEAR";
const SWAP = "SWAP";
const TOGGLE_NEGATIVE = "TOGGLE_NEGATIVE";

//action 1
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});
//action 2
export const enter = () => ({
  type: ENTER,
});
//action 3
export const operation = (op) => ({
  type: OPERATION,
  payload: op,
});
//action 4
export const clear = () => ({
  type: CLEAR,
});
//action 5
export const swap = () => ({
  type: SWAP,
});
//action 6
export const toggleNegative = (index) => ({
  type: TOGGLE_NEGATIVE,
  payload: index,
});

const doOperations = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);
  if (op === "^") {
    return b ** a;
  } else if (op === "+") {
    return b + a;
  } else if (op === "-") {
    return b - a;
  } else if (op === "/") {
    return b / a;
  } else if (op === "X") {
    return b * a;
  }

  return 0;
};

const switchNegative = (x) => {
  if (x.startsWith("-")) {
    return x.slice(1);
  }
  return `-${x}`;
};

// inputState: append | replace | push
const initialState = { stack: [], inputState: "replace" };

export const reducer = (state = initialState, { type, payload }) => {
  console.log(state.stack);
  switch (type) {
    case PRESS_NUM:
      if (state.inputState == "append") {
        return {
          ...state,
          stack: [(state.stack[0] || "0") + payload, ...state.stack.slice(1)],
        };
      } else if (state.inputState === "replace") {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "push") {
        return {
          stack: [payload, ...state.stack],
          inputState: "append",
        };
      }
      break;
    case ENTER:
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };

    case OPERATION:
      return {
        stack: [
          `${doOperations(state.stack[0], state.stack[1], payload)}`,
          ...state.stack.slice(2),
        ],
        inputState: "push",
      };

    case CLEAR:
      return initialState;

    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: "push",
      };
    case TOGGLE_NEGATIVE:
      return {
        stack: state.stack.map((x, i) =>
          payload === i ? switchNegative(x) : x
        ),
        inputState: state.inputState,
      };

    default:
      return state;
  }
};
