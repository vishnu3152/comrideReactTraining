import { SET_COUNTER, INCREMENT, DECREMENT, MULTIPLY, DIVIDE } from "./types";

export const setCounter = (counter) => ({
  type: SET_COUNTER,
  payload: counter,
});

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const multiply = () => ({
  type: MULTIPLY,
})

export const divide = () => ({
  type: DIVIDE,
})