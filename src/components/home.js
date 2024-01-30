import React, { useEffect, useState } from "react";
import Slider from "./utils/carousel";
import Features from "./utils/features";
import Associations from "./utils/associations";
import Welcome from "./utils/welcome";
import Courses from "./utils/courses";
import Header from "./utils/header";

import Send_Enquiry from "./utils/sendEnquiry";
import LoadingPage from "./utils/loading";
import MaksFooter from "./utils/maksFooter";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return loading ? (
    <>
      <LoadingPage />
    </>
  ) : (
    <>
      <Header />
      <Slider />
      <Features />
      <Welcome />
      <Associations />
      <Courses />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Send_Enquiry />
      </div>
      <MaksFooter />
    </>
  );
};

export default Home;
