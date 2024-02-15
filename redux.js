import { legacy_createStore } from "redux";

// reducer

const cartReducer = (
  state = {
    cart: [{id: 1, qty: 20}, {id: 2, qty: 10}],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store

const store = legacy_createStore(cartReducer);
console.log("on create store: ", store.getState());

// subscribe

store.subscribe(() => {
    console.log("store changed: ", store.getState());
})

// dispatch

const action1 = {type: "ADD_TO_CART", payload: {id: 3, qty: 30}};
store.dispatch(action1);
