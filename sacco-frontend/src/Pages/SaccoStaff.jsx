import React from "react";
import TopNav from "../Components/Navbar";
import Footer from "../Components/Footer";

const SaccoStaff = () => {
  return (
    <>
      <TopNav />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">SACCO Staff</h1>
        <p className="text-lg text-gray-700 mt-5">
          Meet our dedicated team of professionals who work tirelessly to serve our members.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SaccoStaff;
