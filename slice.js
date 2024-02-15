import * as toolkitRaw from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkitRaw.default ?? toolkitRaw;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("on create store: ", store.getState());

store.subscribe(() => {
  console.log("store changed: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 30 }));
store.dispatch(cartSlice.actions.addToCart({ id: 4, qty: 50 }));
