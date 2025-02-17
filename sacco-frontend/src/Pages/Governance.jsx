import React from "react";
import TopNav from "../Components/Navbar";
import Footer from "../Components/Footer";

const Governance = () => {
  return (
    <>
      <TopNav />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">Governance</h1>
        <p className="text-lg text-gray-700 mt-5">
          Our SACCO is governed by an elected board that ensures transparency, accountability,
          and financial sustainability.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Governance;
