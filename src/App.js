import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initstore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initstore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
