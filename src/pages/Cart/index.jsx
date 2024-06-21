import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const initialQuantities = cart.products.reduce((acc, item) => {
    acc[item.id] = 1;
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
  };
  const totalprice = cart.products.reduce((acc, item) => {
    acc += item.price * quantities[item.id];
    return acc;
  }, 0);
  console.log(totalprice);
  return (
    <section>
      <div className="container">
        <h1 className="text-3xl">Shopping Cart</h1>
        <hr className="my-4" />

        <div className="cards flex justify-between">
          <div className="cart flex flex-col gap-5">
            {cart.products.length ? (
              cart?.products?.map((item) => (
                <div
                  className="cart-item w-[814px] flex justify-between"
                  key={item.id}
                >
                  <img
                    className="w-[128px] h-[128px] border-2 rounded-lg"
                    src={item.images[0]}
                    alt={item.title}
                  />
                  <div className="details w-[150px] text-left flex flex-col">
                    <h3 className="text-md mb-5">{item.title}</h3>
                    <p className="text-sm text-slate-500">
                      Category: {item.category}
                    </p>
                  </div>
                  <div className="amount text-center flex flex-col gap-3">
                    <p>Amount</p>
                    <input
                      type="number"
                      min={1}
                      max={item.stock}
                      className="input input-bordered"
                      value={quantities[item.id]}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                    <a
                      className="cursor-pointer text-cyan-400"
                      onClick={() => dispatch(deleteToCart(item))}
                    >
                      Remove
                    </a>
                  </div>
                  <div className="price">
                    <p>{Math.floor(quantities[item.id] * item.price)} $</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-2xl">Cart is empty 😥 !</p>
            )}
          </div>
          <div className="total flex flex-col items-center">
            <div className="total_price p-8 flex flex-col gap-5 b-radius-lg rounded-md h-[250px]">
              <div className="subtotal flex justify-between border-b-2 w-52">
                <p>Subtotal</p>
                <p>{Math.floor(totalprice)} $</p>
              </div>
              <div className="shipping flex justify-between border-b-2 w-52">
                <p>Shipping</p>
                <p>{Math.floor(totalprice * 0.005)} $</p>
              </div>
              <div className="tax flex justify-between border-b-2 w-52">
                <p>Tax</p>
                <p>{Math.floor(totalprice * 0.1)} $</p>
              </div>
              <div className="order-total flex justify-between w-52 mt-4">
                <p className="text-md">Order Total</p>
                <p>
                  {Math.floor(
                    totalprice + totalprice * 0.005 + totalprice * 0.1
                  )}{" "}
                  $
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary  m-auto mt-5"
              onClick={() => navigate("/login")}
            >
              Please Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
