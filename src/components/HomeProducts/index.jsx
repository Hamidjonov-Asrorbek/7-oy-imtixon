import React, { useEffect } from "react";
import { useGetProductByNameQuery } from "../../products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../products/productsSlice";

function HomeProducts() {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const {
    data,
    isLoading: isPending,
    error,
    isSuccess,
  } = useGetProductByNameQuery();

  useEffect(() => {
    if (isSuccess && data?.products) {
      dispatch(getData(data?.products));
    }
  }, [isSuccess, data, dispatch]);

  // Create a new sorted array without mutating the original state
  const products = [...state.data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 15);

  return (
    <div>
      <h2 className="text-3xl">Featured products</h2>
      <hr className="my-4" />
      {!isPending && products?.length > 0 && (
        <div className="grid grid-cols-3 gap-5 mt-5">
          {products.map((item) => {
            const { id, title, description, price, images, rating } = item;
            return (
              <div
                key={id}
                className="card card-compact w-full bg-base-100 shadow-sm shadow-white"
              >
                <figure className="bg-slate-100">
                  <img
                    className="w-full h-[288px] object-contain object-center"
                    src={images[0]}
                    alt={title}
                    width={288}
                    height={288}
                  />
                </figure>
                <div className="card-body flex flex-col items-center box-border text-center">
                  <h2 className="card-title">{title}</h2>
                  <p>{price} $</p>
                  <p>Rating: {rating}⭐</p>
                  {/* <div className="card-actions flex items-center justify-between">
                    <button
                      className="btn btn-sm btn-primary ml-auto"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add Cart
                    </button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomeProducts;
