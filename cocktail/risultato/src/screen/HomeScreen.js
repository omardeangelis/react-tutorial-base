import React from "react";
import { Hero } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
const HomeScreen = () => {
  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color"> WIKI DRINK</h2>
              <h4>Tutti i cocktail del mondo a portata di click</h4>
            </div>
            <p>
              Wiki Drink è un database internazionale che mette a tua
              disposizione, in maniera{" "}
              <span className="brand-color">Gratuita</span>, le ricette dei più
              importanti e diffusi cocktail al mondo.
            </p>
            <button className="btn btn-primary">Scopri di più</button>
          </div>
          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={400}
              width={400}
            />
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form>
              <label htmlFor="drink">
                <h4>Cerca il tuo drink</h4>
              </label>
              <input id="drink" className="input" placeholder="cocktail" />
              <button className="btn icon-btn">
                <FaSearch className="icon" />
              </button>
            </form>
          </div>
          <p className="">50 risultati</p>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
