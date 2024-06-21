import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <section>
      <div className="container">
        <h1>Shopping Cart</h1>
        <hr className="my-4" />
      </div>
    </section>
  );
}

export default Cart;
