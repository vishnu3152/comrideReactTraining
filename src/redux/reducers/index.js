import { SET_COUNTER, INCREMENT, DECREMENT, MULTIPLY, DIVIDE } from "../action/types";

const initialState = {
  count: 10,
  count1: 10
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        count: action.payload,
        count1: action.payload
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case MULTIPLY:
        return {
          ...state,
        count1: state.count1*2,
      };
    case DIVIDE:
        return {
            ...state,
          count1: state.count1/2,
      };
    default:
      return state;
  }
};

export default counter;
