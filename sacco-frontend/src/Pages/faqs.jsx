import React from "react";
import TopNav from "../Components/Navbar";
import Footer from "../Components/Footer";

const FAQs = () => {
  return (
    <>
      <TopNav />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">FAQs</h1>
        <p className="text-lg text-gray-700 mt-5">
          Find answers to the most frequently asked questions about our SACCO.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
