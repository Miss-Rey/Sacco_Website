import React from "react";
import { SlPeople } from "react-icons/sl";
import { RxCalendar } from "react-icons/rx";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 lg:px-16 justify-center items-center py-8 bg-gray-200">
      <div className="w-full md:w-1/2 h-auto">
        <span style={{ margin: "20px " }}>
          <h2 className="text-xl text-green-700 font-semibold">
            Our Products & Services
          </h2>
          <div className="text-3xl font-bold">
            Save, borrow and Invest with Kimbilio Daima Sacco
          </div>
        </span>

        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam in
            dignissimos expedita harum quos ullam dolor itaque quaerat
            distinctio iste, ducimus modi facere cum quisquam natus impedit sint
            tempora.
          </p>
        </div>
        <div className="py-5">
          <a className="py-3 px-4 bg-green-300" href="">
            Read More
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center  gap-3 w-full md:w-1/2">
        <div
          className="bg-blue-400 flex flex-col w-60 h-40 px-4 justify-between rounded-sm"
          style={{ height: "180px" }}
        >
          <span className="w-full py-4">
            <SlPeople className="text-5xl" />
          </span>
          <span className="text-4xl font-bold text-white">40K+</span>
          <span className="text-xl py-4">Total Membership</span>
        </div>
        <div
          className="bg-green-400 flex flex-col w-60 h- px-4 justify-between rounded-sm"
          style={{ height: "180px" }}
        >
          <span className="w-full py-4">
            <RxCalendar className="text-5xl" />
          </span>
          <span className="text-4xl font-bold text-white">30+</span>
          <span className="text-xl py-4">Years of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
