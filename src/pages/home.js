import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Painting from "../components/paintings/Painting";

const Home = () => {
  return (
    <>
      <h3> Home Page </h3>
      <Header />
      <Painting />
      <Footer />
    </>
  );
};

export default Home;
