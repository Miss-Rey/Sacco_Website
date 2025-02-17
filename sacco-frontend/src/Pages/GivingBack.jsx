import React from "react";
import TopNav from "../Components/Navbar";
import Footer from "../Components/Footer";

const GivingBack = () => {
  return (
    <>
      <TopNav />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">Giving Back</h1>
        <p className="text-lg text-gray-700 mt-5">
          As part of our corporate social responsibility, we are involved in various
          community development programs.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default GivingBack;
