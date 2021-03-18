import React from "react";
import backImage from "../assets/image/home-hero.jpg";
const Hero = ({ children, img, disableOverlay }) => {
  const image = img ? img : backImage;
  return (
    <div
      className="hero-img-container"
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={!disableOverlay ? "hero-overlay" : ""}>
        <div className="container hero-container">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
