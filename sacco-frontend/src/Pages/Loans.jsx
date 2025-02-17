import React from "react";
import { Collapse, Space } from "antd";
import { hero1, hero2 } from "../../assets/images";
import Banner from "../components/Banner";
import TopNav from "../components/Navbar";
import FooterContainer from "../components/Footer";

const loans = [
  {
    loan: "Development Loans",
    description:
      "Development Loan:- This regards to general purpose of loans where a member can invest in various activities like farming, business etc. It is repaid within a period of 3 years (36 months). The interest rate is on reducing balance",
    image: hero1,
  },
  {
    loan: "School Fee Loans",
    description:
      "This is for school fees repayable in a period of 2 years (24 months). Interest rate is also on reducing balance method.",
    image: hero1,
  },
  {
    loan: "Savings",
    description:
      "Contributions shall be made per month with minimum amount of Ksh 500. Every member shall be required to contribute towards group savings.",
    image: hero1,
  },
  {
    loan: "Microfinance Facilities",
    description:
      "Micro credit entails lending of money to groups of persons who come together as savers in the sacco.",
    image: hero1,
  },
];

const Loans = () => (
  <div>
    <TopNav />
    <Banner
        image={hero2}
        description={"Lorem, ipsum dolor sit amet consectetur adipisicing "}
        page={"Loans"}
      />
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 py-8 px-5">
      {loans.map((loan, index) => (
        <Space
          key={index}
          direction=""
          bordered="false"
          className="w-full h-full"
          style={{height: '100%'}}
        >
          <Collapse
            collapsible="header"
            defaultActiveKey={["1"]}
            bordered
            className="shadow-md rounded-lg border border-gray-300 h-full"
            items={[
              {
                key: "1",
                label: (
                  <span className="text-xl font-bold text-gray-700">
                    {loan.loan}
                  </span>
                ),
                children: (
                  <div className="">
                    <img
                      className="w-full h-64 object-cover rounded-md mb-4"
                      src={loan.image}
                      alt={loan.loan}
                    />
                    <p className="text-gray-600 text-lg">{loan.description}</p>
                  </div>
                ),
              },
            ]}
          />
        </Space>
      ))}
    </div>
    <FooterContainer />
  </div>
);

export default Loans;
