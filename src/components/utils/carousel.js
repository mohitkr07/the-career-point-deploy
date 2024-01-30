import React, { useEffect, useRef, useState } from "react";
import styles from "./utils.module.css";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
  const images = [
    { url: "https://api.mmumullana.org/uploads/img/L1_1_4_68248.webp" },
    {
      url: "https://www.chitkara.edu.in/wp-content/themes/chitkara/images/home-page/webp/banners/go-above-and-beyond-min.webp",
    },
    {
      url: "https://www.chitkara.edu.in/wp-content/themes/chitkara/images/home-page/webp/banners/your-dearms-your-goal.webp",
    },
    { url: "https://www.vgu.ac.in/images/02.png" },
    { url: "https://www.vgu.ac.in/upload/Victors.jpg" },
  ];
  // const sliderWidth = 592;
  const windowSize = window.innerWidth;

  return (
    <div className={styles["slider"]}>
      <SimpleImageSlider
        width="100%"
        height={windowSize > 960 ? 580 : 335}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={2}
        autoPlayDelay={5}
        loop="true"
        autoPlay="true"
      ></SimpleImageSlider>
    </div>
  );
};

export default Slider;
