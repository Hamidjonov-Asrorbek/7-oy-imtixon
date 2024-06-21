import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/hero-img1.png";
import HomeProducts from "../../components/HomeProducts";

function Home() {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero-content flex justify-between">
            <div>
              <h1 className="text-5xl font-bold w-full max-w-[496px] leading-[60px]">
                We are changing the way people shop
              </h1>
              <p className="py-6 w-full max-w-[496px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repellat explicabo enim soluta temporibus asperiores aut
                obcaecati perferendis porro nobis.
              </p>
              <button className="btn btn-primary">
                {" "}
                <NavLink to="/products" className="btn btn-ghost text-xl">
                  Our Products
                </NavLink>
              </button>
            </div>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item">
                <img src={heroImg} className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
            </div>
          </div>
        </div>
        <HomeProducts />
      </div>
    </section>
  );
}

export default Home;
